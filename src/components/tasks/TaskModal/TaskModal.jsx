import './TaskModal.scss'
import classNames from 'classnames'
import TaskFormInput from "@/components/tasks/TaskFormInput/index.js";
import {useRef} from "react";
import {useTextAreaExpand} from "@/hooks/useTextAreaExpand.js";
import {useClickOutside} from "@/hooks/useClickOutside.js";
import Button from "@/components/ui/Button/index.js";

const TaskModal = (props) => {
  const {
    className,
    isModal,
    titleText,
    descriptionText,
    onInputTitleChange,
    onInputDescriptionChange,
    closeModal,
  } = props

  const taskModalRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)

  useTextAreaExpand(titleRef, titleText)
  useTextAreaExpand(descriptionRef, descriptionText)

  useClickOutside(taskModalRef, closeModal, isModal)
  
  return (
    <div
      className={classNames(className, 'task-modal')}
    >
      <div className='task-modal__inputs'
           ref={taskModalRef}
       >
        <TaskFormInput
          className={`task-modal__inputs-title `} //${!isInputExpanded ? 'visually-hidden' : ''}
          ref={titleRef}
          maxlength={100}
          type="text"
          value={titleText}
          onChange={(event) => onInputTitleChange(event)}
          id="task-input-title"
        />
        <TaskFormInput
          className='task-modal__inputs-description'
          ref={descriptionRef}
          type="text"
          value={descriptionText}
          onChange={(event) => onInputDescriptionChange(event)}
          id="task-input-text"
        />
        <Button
          className='task-form__button'
          type="button"
          title="Закрыть"
          onClick={closeModal}
        >
          Закрыть
        </Button>
        </div>
    </div>
  )
}

export default TaskModal