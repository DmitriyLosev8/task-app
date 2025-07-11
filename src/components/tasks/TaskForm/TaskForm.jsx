import {useRef, useState} from "react";
import './TaskForm.scss'
import classNames from 'classnames'
import Button from "@/components/ui/Button/Button.jsx";
import TaskFormInput from "@/components/tasks/TaskFormInput/index.js";
import {useClickOutside} from '@/components/hooks/useClickOutside.js'
import {useTextAreaExpand} from '@/components/hooks/useTextAreaExpand.js'

const TaskForm = (props) => {
  const {
    className,
      onSubmitButtonClicked,
  } = props

  const inputsAreaRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const [titleText, setTitleText] = useState('')
  const [taskText, setTaskText] = useState('')
  const [isInputExpanded,setIsInputExpanded] = useState(false)

  const onInputTitleChange = (event) =>{  //сделать, чтобы инпут тайтла был нормального размера изначально
    if (event) {
      setTitleText(event.target.value)
    }
    else {
      setTitleText(titleText)
    }
  }

  const onInputTextChange = (event) =>{
    setTaskText(event.target.value)
  }

  useTextAreaExpand(titleRef, titleText)
  useTextAreaExpand(descriptionRef, taskText)


  const clearInputs = () => {
    setTaskText('')
    setTitleText('')
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    onSubmitButtonClicked(taskText)
    clearInputs()
  }



  const expandInputsArea = () => {
    if (!isInputExpanded) {
      setIsInputExpanded(true)
      onInputTitleChange()
    }
  }

  const collapseInputsArea = () => {
    if (isInputExpanded) {
      setIsInputExpanded(false)
    }
  }

  useClickOutside(inputsAreaRef,collapseInputsArea, isInputExpanded)

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
              ref={titleRef}
              placeholder='Название'
              maxlength={100}
              type="text"
              value={titleText}
              onChange={(event) => onInputTitleChange(event)}
              id="input-title"
            />
           <TaskFormInput
             ref={descriptionRef}
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