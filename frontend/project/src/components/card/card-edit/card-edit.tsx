import { ChangeEventHandler, FormEvent, useState } from 'react';
import { DescriptionLength, ErrorMessage, TitleLength } from '../../../constant';
import { Status, Task } from '../../../types/task-data';
import { useAppDispatch } from '../../../hooks';
import { createAction, fetchTaskUpdateAction } from '../../../store/api-actions';

export type CardEditProps = {
  task: Task;
  onClick: () => void
};

function CardEdit ({task, onClick}: CardEditProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [formError, setFormError] = useState(false);
  const [formData, setFormData] = useState(task);
  const [isDisabled, setIsDisabled] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const handleCanselClick = () => {
    onClick();
  };
  const handleTextChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setFormData({...formData, description: event.target.value});
    if(DescriptionLength.Min < event.target.value.length || event.target.value.length > DescriptionLength.Max) {
      setIsDisabled(false);
      setDescriptionError(false);
    } else {
      setIsDisabled(true);
      setDescriptionError(true);
    }
  };
  
  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormData({...formData, title: event.target.value});
    if(event.target.value.length <= TitleLength.Min || TitleLength.Max <= event.target.value.length) {
      setIsDisabled(true);
      setTitleError(true);
    } else {
      setIsDisabled(false);
      setTitleError(false);
    }
  };

  const onSendWorkout = () => {
    if(formData.title === '' ||
      formData.description === '') {
      setFormError(false);
      if(task.id) {
        dispatch(fetchTaskUpdateAction(formData));
      } else {
        dispatch(createAction(formData));
      }
    } else {
      setFormError(true);
    }
  };
  return (
    <article className="card card--edit card--blue">
      <form
        className="card__form"
        method="get"
        onSubmit={(evt: FormEvent<HTMLFormElement>) => {
          evt.preventDefault();
          onSendWorkout();
        }}
      >
        <div className="card__inner">
          <div className="card__color-bar">
          </div>
          <div className="card__dates">
            <label className="card__input-deadline-wrap">
              <input
                className="card__date"
                type="text"
                name="title"
                placeholder="Название"
                value={formData.title}
                onChange={handleTitleChange}
              />
              {titleError && <span>{ErrorMessage.Title}</span>}
            </label>
          </div>
          <div className="card__textarea-wrap">
            <label>
                <textarea
                    className="card__text"
                    placeholder="Start typing your text here..."
                    name="text"
                    value={formData.description}
                    onChange={handleTextChange}
                ></textarea>
                {descriptionError && <span>{ErrorMessage.Description}</span>}
            </label>
          </div>

          <div className="card__colors-inner">
            <h3 className="card__colors-title">{formData.status}</h3>
              <div className="card__colors-wrap">
                <input
                  type="radio"
                  id='awaits'
                  className="card__color-input card__color-input--black visually-hidden"
                  name="status"
                  value={Status.Awaits}
                  checked={formData.status === Status.Awaits}
                  onChange={() => setFormData({...formData, status: Status.Awaits})}
                />
                <label
                  htmlFor='awaits'
                  className="card__color card__color--black"
                >{Status.Awaits}
                </label>
                <input
                  type="radio"
                  id='done'
                  className="card__color-input card__color-input--black visually-hidden"
                  name="status"
                  value={Status.Done}
                  checked={formData.status === Status.Done}
                  onChange={() => setFormData({...formData, status: Status.Done})}
                />
                <label
                  htmlFor='done'
                  className="card__color card__color--black"
                >{Status.Done}
                </label>
                <input
                  type="radio"
                  id='progress'
                  className="card__color-input card__color-input--black visually-hidden"
                  name="status"
                  value={Status.InProgress}
                  checked={formData.status === Status.InProgress}
                  onChange={() => setFormData({...formData, status: Status.InProgress})}
                />
                <label
                  htmlFor='progress'
                  className="card__color card__color--black"
                >{Status.InProgress}
                </label>
                </div>
            <div className="card__status-btns">
                <button
                  className="card__save"
                  type="submit"
                  disabled={isDisabled}
                >save</button>
                {formError && <span>{ErrorMessage.Form}</span>}
                <button
                  className="card__delete"
                  type="button"
                  onClick={() => handleCanselClick()}
                >cancel</button>
            </div>
          </div>
        </div>
      </form>
    </article>
  );
}

export default CardEdit;