import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import {FaCheck} from "react-icons/fa";
import './Task.scss'
import classNames from 'classnames'



const Task = (props) => {
  const {
    className,
    task,
    onDeleteButtonClicked,
    onCompleteButtonClicked,
  } = props

  return (
    <div
      className={classNames(className, `task ${task.isCompleted ? 'task__completed' : ''}`,)}
    >
      <RiTodoFill className='task__icon'/>
      <div className='task__description'>
        <p>{task.text}</p>
        </div>
      <RiDeleteBin2Line className='task__icon task__icon--delete' onClick={() => onDeleteButtonClicked(task.id)}/>
      <FaCheck className=' task__icon task__icon--check' onClick={() => onCompleteButtonClicked(task.id)}/>
    </div>
  )
}

export default Task