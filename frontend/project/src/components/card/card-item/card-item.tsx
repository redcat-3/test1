import { Task } from "../../../types/task-data";

export type CardItemProps = {
    task: Task;
    handleEditClick: () => void;
    handleDeleteClick: () => void;
  };

function CardItem ({task, handleEditClick, handleDeleteClick}: CardItemProps): JSX.Element {
  return (
    <article 
      className="card card--blue"
    >
      <div className="card__form">
        <div className="card__inner">
          <div className="card__control">
            <button
              type="button"
              className="card__btn card__btn--edit"
              onClick={() => handleEditClick()}
            >
              edit
            </button>
            <button
              type="button"
              className="card__btn card__btn--archive"
              onClick={() => handleDeleteClick()}
            >
              delete
            </button>
          </div>
          <div className="card__color-bar">
          </div>
          <div className="card__textarea-wrap">
            <h3 className="card__colors-title">{task.title}</h3>
            <p className="card__text">{task.description}</p>
          </div>
          <div className="card__settings">
            <div className="card__details">
              <div className="card__dates">
                <div className="card__date-deadline">
                  <p className="card__input-deadline-wrap">
                    <span className="card__date">{task.status}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}


export default CardItem;