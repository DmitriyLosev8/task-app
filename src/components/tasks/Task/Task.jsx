import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import {FaCheck} from "react-icons/fa";
import './Task.scss'
import classNames from 'classnames'

//
//<FaCheck className='task__icon--check' onClick={onCheckButtonClicked}/>

const Task = (props) => {
  const {
    className,
    task,
    onDeleteButtonClicked,
    onToggleButtonClicked,
  } = props

  const onCheckButtonClicked = () => {
    task.isCompleted = !task.isCompleted
    console.log(task.isCompleted)
  }

  return (
    <div
      className={classNames(className, `task ${task.isCompleted ? 'task__completed' : ''}`,)}
    >
      <RiTodoFill className='task__icon'/>
      <div className='task__description'>{task.text}</div>
      <RiDeleteBin2Line className='task__icon--delete' onClick={() => onDeleteButtonClicked(task.id)}/>
      <FaCheck className='task__icon--check' onClick={() => onToggleButtonClicked(task.id)}/>
    </div>
  )
}

export default Task