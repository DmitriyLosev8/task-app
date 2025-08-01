import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import {FaCheck} from "react-icons/fa";
import './Task.scss'
import classNames from 'classnames'
import {useState} from "react";

const Task = (props) => {
  const {
    className,
    task,
    onDeleteButtonClicked,
    onCompleteButtonClicked,
  } = props

  const [isMouseOver, setMouseOver] = useState(false)
  const [isModal, setIsModal] = useState(false)

  const toggleModalStatus = () => {   //переключение модальности окна

  }

  return (
    <div
      className={classNames(className, `task ${task.isCompleted ? 'task__completed' : ''}`,)}
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
      onClick={() => setIsModal(!isModal)}
    >
      {/*<RiTodoFill className='task__icon'/>*/}
      <div className='task__text'>
        <div className='task__text--title'>
          <p>{task.title}</p>
        </div>
        <div className='task__text--description'>
          <p>{task.description}</p>
        </div>
      </div>
      <div className='task__icons-container'>
        <div
          className={`task__icons ${!isMouseOver ? 'visually-hidden' : ''}`}
         // className='task__icons'
        >
          <RiDeleteBin2Line className='task__icon task__icon--delete' onClick={() => onDeleteButtonClicked(task.id)}/>
          <FaCheck className=' task__icon task__icon--check' onClick={() => onCompleteButtonClicked(task.id)}/>
        </div>
      </div>
    </div>
  )
}

export default Task