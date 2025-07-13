import {useRef, useState} from "react";
import './TaskForm.scss'
import classNames from 'classnames'
import Button from "@/components/ui/Button/Button.jsx";
import TaskFormInput from "@/components/tasks/TaskFormInput/index.js";
import {useClickOutside} from '@/hooks/useClickOutside.js'
import {useTextAreaExpand} from '@/hooks/useTextAreaExpand.js'

const TaskForm = (props) => {
  const {
    className,
      onSubmitButtonClicked,
  } = props

  const inputsAreaRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const [titleText, setTitleText] = useState('')
  const [descriptionText, setDescriptionText] = useState('')
  const [isInputExpanded,setIsInputExpanded] = useState(false)

  const onInputTitleChange = (event) => {
    setTitleText(event.target.value)
  }



  const onInputTextChange = (event) =>{
    setDescriptionText(event.target.value)
  }

  useTextAreaExpand(titleRef, titleText)
  useTextAreaExpand(descriptionRef, descriptionText)


  const clearInputs = () => {
    setDescriptionText('')
    setTitleText('')
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    onSubmitButtonClicked(descriptionText,titleText)
    clearInputs()
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

  useClickOutside(inputsAreaRef, collapseInputsArea, isInputExpanded)

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
              placeholder='Дайте название'
              maxlength={100}
              type="text"
              value={titleText}
              onChange={(event) => onInputTitleChange(event)}
              id="input-title"
            />
           <TaskFormInput
             className='task-form-input--description'
             ref={descriptionRef}
             placeholder='Введите новую задачу'
             type="text"
             value={descriptionText}
             onChange={(event) => onInputTextChange(event)}
             id="input-text"
             onClick={expandInputsArea}
           />
            <div className={`task-form__buttons ${!isInputExpanded ? 'visually-hidden' : ''}`}>
              <Button
                className='task-form__button'
                type="submit"
                title="Записать"
                disabled={!descriptionText.length > 0 && !titleText.length > 0}
              >
                Записать
              </Button>
              <Button
                className='task-form__button'
                type="button"
                title="Очистить"
                disabled={!descriptionText.length > 0 && !titleText.length > 0}
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