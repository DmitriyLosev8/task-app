import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import {FaCheck} from "react-icons/fa";
import './Task.scss'
import classNames from 'classnames'

const Task = (props) => {
  const {
    className,
  } = props

  return (
    <div
      className={classNames(className, 'task container',)}
    >
      <RiTodoFill/>
      Task
    </div>
  )
}

export default Task