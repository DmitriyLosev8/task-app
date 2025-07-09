import {useRef, useState} from "react";
import './TaskForm.scss'
import classNames from 'classnames'
import Button from "@/components/ui/Button/Button.jsx";
import TaskFormInput from "@/components/tasks/TaskFormInput/index.js";
import {UseClickOutSide} from '@/components/hooks/useClickOutSide.js'



const TaskForm = (props) => {
  const {
    className,
      onSubmitButtonClicked,
  } = props

  const inputsAreaRef = useRef(null)
  const [taskText, setTaskText] = useState('')
  const [titleText, setTitleText] = useState('')
  const [isInputExpanded,setisInputExpanded] = useState(false)


  const onFormSubmit = (event) => {
    event.preventDefault()
    onSubmitButtonClicked(taskText)
    setTaskText('')
  }

  function onInputTitleChange(event) {
    setTitleText(event.target.value)
  }

  function onInputTextChange(event) {
        setTaskText(event.target.value)
  }

  const expandInputsArea = () => {
    if (!isInputExpanded) {
      setisInputExpanded(true)
    }
  }

  const collapseInputsArea = () => {
    if (isInputExpanded) {
      setisInputExpanded(false)
    }
  }

  UseClickOutSide(inputsAreaRef,collapseInputsArea, isInputExpanded)

  return (
    <div className={classNames(className,)}
    >
        <form
            className='task-form'
            onSubmit={onFormSubmit}
        >
          <div className='task-form__inputs'
               ref={inputsAreaRef}
          >
            <TaskFormInput
              className={`task-form-input--title ${!isInputExpanded ? 'visually-hidden' : ''}`}
              placeholder='Название'
              type="text"
              value={titleText}
              onChange={(event) => onInputTitleChange(event)}
              id="input-title"
            />
           <TaskFormInput
             placeholder='Введите новую задачу'
             type="text"
             value={taskText}
             onChange={(event) => onInputTextChange(event)}
             id="input-text"
             onClick={expandInputsArea}
           />
            <Button  // кнопки надо будет в отдельный див запихнуть и туда visually-hidden
              className={`task-form__button ${!isInputExpanded ? 'visually-hidden' : ''}`}
              type="submit"
              title="Принять"
              disabled={!taskText.length > 0 || !titleText.length > 0}
            >
              Принять
            </Button>
            <Button
              className={`task-form__button ${!isInputExpanded ? 'visually-hidden' : ''}`}
              type="button"
              title="Закрыть"
              onClick={collapseInputsArea}
            >
              Закрыть
            </Button>

          </div>


        </form>
    </div>
  )
}

export default TaskForm