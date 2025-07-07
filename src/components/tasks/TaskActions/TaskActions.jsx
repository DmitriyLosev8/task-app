import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import './TaskActions.scss'
import classNames from 'classnames'
import Button from "@/components/ui/Button/index.js";

const TaskActions = (props) => {
  const {
    className,
    deleteAllTasks,
    deleteCompletedTasks,
    isClearCompletedTasksButtonExist,

  } = props

  return (
    <div
      className={classNames(className, 'task-actions')}
    >
      <Button
        className='button__actions'
        title='Удалить все задачи'
        onClick={deleteAllTasks}
      >
          <RiRefreshLine/>
      </Button>
      <Button
        className='button__actions'
        title='Удалить выполненные задачи'
        onClick={deleteCompletedTasks}
        disabled={!isClearCompletedTasksButtonExist}
      >
        <RiDeleteBin2Line/>
      </Button>
    </div>
  )
}

export default TaskActions