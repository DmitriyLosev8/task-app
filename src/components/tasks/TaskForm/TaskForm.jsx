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
      useClickOutSide,
  } = props

  const inputsAreaRef = useRef(null)
  const [taskText, setTaskText] = useState('')
  const [titleText, setTitleText] = useState('')
  const [isInputExpanded,setIsInputExpanded] = useState(false)





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
      setIsInputExpanded(true)
    }
  }

  const collapseInputsArea = () => {
    if (isInputExpanded) {
      setIsInputExpanded(false)
    }
  }

  UseClickOutSide(inputsAreaRef,collapseInputsArea)

  return (
    <div className={classNames(className,)}
         onClick={collapseInputsArea}
    >
        <form
            className='task-form'
            onSubmit={onFormSubmit}
        >
          <div className='task-form__inputs'
               ref={inputsAreaRef}
          >
            <TaskFormInput
              className={`${!isInputExpanded ? 'visually-hidden' : ''}`}
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
          </div>

          <Button
            type="submit"
            title="Принять"
            disabled={!taskText.length > 0 || !titleText.length > 0}
          >
            Принять
          </Button>
          <Button
            type="button"
            title="Закрыть"
            onClick={collapseInputsArea}

          >
            Закрыть
          </Button>

        </form>
    </div>
  )
}

export default TaskForm