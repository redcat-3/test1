import { useState } from "react";
import Card from "../../components/card/card";
import { useAppSelector } from "../../hooks";
import { getTasks, getTasksDataLoadingStatus } from "../../store/task-process/selectors";
import { Status } from "../../types/task-data";
import CardEdit from "../../components/card/card-edit/card-edit";

function Main(): JSX.Element {
  const loadingData = useAppSelector(getTasksDataLoadingStatus);
  const tasks = useAppSelector(getTasks);
  const [isAdd, setIsAdd] = useState(false);
  if(loadingData) {
    return (
      <main className="main">
        <section className="main__control control container">
          <h1 className="control__title">TODO LIST</h1>
        </section>
        <section className="main__filter filter container">
          <input
            type="radio"
            id="filter__all"
            className="filter__input visually-hidden"
            name="filter"
            checked
          />
          <label htmlFor="filter__all" className="filter__label">
            All <span className="filter__all-count">0</span>
          </label>
        </section>
        <section className="board container">
          <p className="board__no-tasks">
            Loading...
          </p>
        </section>
      </main>
    );
  }
  const emptyTask = {
    title: '',
    description: '',
    status: Status.Awaits
  }
  return (
    <main className="main">
      <section className="main__control control container">
        <h1 className="control__title">TODO LIST</h1>
        {!isAdd && <button
          className="control__button"
          onClick={() => setIsAdd(true)}
        >+ ADD NEW TASK</button>}
      </section>
      <section className="main__filter filter container">
        <input
          type="radio"
          id="filter__all"
          className="filter__input visually-hidden"
          name="filter"
          checked
        />
        <label htmlFor="filter__all" className="filter__label">
          All <span className="filter__all-count">{tasks.length}</span>
        </label>
      </section>
      <section className="board container">
        <div className="board__tasks">
          {isAdd && <CardEdit task={emptyTask} onClick={() => setIsAdd(false)}/>}
          {tasks.map((task, index) => (
            <Card key={index}
              task={task}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
export default Main;
