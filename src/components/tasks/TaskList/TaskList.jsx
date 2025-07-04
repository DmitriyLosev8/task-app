import './TaskList.scss'
import classNames from 'classnames'
import Task from "@/components/tasks/Task/Task.jsx";

const TaskList = (props) => {
  const {
    className,
    tasks,
    onDeleteButtonClicked,
    onToggleButtonClicked,

  } = props

  return (
    <div
      className={classNames(className, 'task-list')}
    >
      {!tasks.length ? <h2>Список заметок пуст</h2> :
        tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            onDeleteButtonClicked={onDeleteButtonClicked}
            onToggleButtonClicked={onToggleButtonClicked}
          />
        ))
      }
    </div>
  )
}