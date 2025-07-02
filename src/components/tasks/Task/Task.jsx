import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import {FaCheck} from "react-icons/fa";
import './Task.scss'
import classNames from 'classnames'

const Task = (props) => {
  const {
    className,
    title,
    description,

  } = props

  return (
    <div
      className={classNames(className, 'task',)}
    >
      <h6 className="task__title">{title}</h6>
      <p className="task__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores error incidunt nulla optio sequi totam?</p>



    </div>
  )
}

export default Task