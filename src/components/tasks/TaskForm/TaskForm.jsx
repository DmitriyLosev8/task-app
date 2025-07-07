import {useState} from "react";
import './TaskForm.scss'
import classNames from 'classnames'
import Button from "@/components/ui/Button/Button.jsx";


const TaskForm = (props) => {
  const {
    className,
      onSubmitButtonClicked
  } = props

    const [taskText, setTaskText] = useState('')

    const onFormSubmit = (event) => {
        event.preventDefault()
        onSubmitButtonClicked(taskText)
        setTaskText('')
    }

    function onInputChange(event) {
        setTaskText(event.target.value)
    }

  return (
    <div className={classNames(className,)}>
        <form
            className='task-form'
            onSubmit={onFormSubmit}
        >
            <input
              className='task-form__input'
              placeholder='Введите новую задачу'
              type="text"
              value={taskText}
              onChange={(event) => onInputChange(event)}
              id="task-form__input"
            />
          <Button
            type="submit"
            title="Принять"
          >
            Принять
          </Button>

        </form>
    </div>
  )
}

export default TaskForm