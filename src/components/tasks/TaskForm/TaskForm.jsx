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


  const clearInputs = () => {
    setTaskText('')
    setTitleText('')
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    onSubmitButtonClicked(taskText)
    clearInputs()
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
              maxlength={20}
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
            <div className={`task-form__buttons ${!isInputExpanded ? 'visually-hidden' : ''}`}>
              <Button
                className='task-form__button'
                type="submit"
                title="Записать"
                disabled={!taskText.length > 0 && !titleText.length > 0}
              >
                Записать
              </Button>
              <Button
                className='task-form__button'
                type="button"
                title="Очистить"
                disabled={!taskText.length > 0 && !titleText.length > 0}
                onClick={clearInputs}
              >
                Очистить
              </Button>
              <Button
                className='task-form__button'
                type="button"
                title="Закрыть"
                onClick={collapseInputsArea}
              >
                Закрыть
              </Button>
            </div>
          </div>
        </form>
    </div>
  )
}

export default TaskForm