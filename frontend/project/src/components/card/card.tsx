import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { fetchTaskDeleteAction, fetchTasksAction } from '../../store/api-actions';
import { Task } from '../../types/task-data';
import CardEdit from './card-edit/card-edit';
import CardItem from './card-item/card-item';
import { store } from '../../store';

export type CardProps = {
  task: Task;
};

function Card ({task}: CardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const handleEditClick = () =>  {
    setIsEdit(true)
  };
  const handleDeleteClick = () => {
    if(task.id) {
      dispatch(fetchTaskDeleteAction(task.id));
      store.dispatch(fetchTasksAction());
    }
  };
  const renderCard = (): JSX.Element => {
    if (isEdit) {
      return (
        <CardEdit
          task={task}
          onClick={() => setIsEdit(false)}
        />
      );
    } else {
      return <CardItem task={task} handleDeleteClick={handleDeleteClick} handleEditClick={handleEditClick}/>;
    }
  };
  return (
    <>
    {renderCard()}
    </>
  );
}


export default Card;