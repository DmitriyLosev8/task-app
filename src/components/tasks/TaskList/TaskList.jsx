import './TaskList.scss'
import classNames from 'classnames'
import Task from "@/components/tasks/Task/Task.jsx"
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

const TaskList = (props) => {
  const {
    className,
    tasks,
    onDeleteButtonClicked,
    onCompleteButtonClicked,

  } = props


  const columnBreakpoints = {
      350: 1,
      533: 2,
      783: 3,
      1024: 4,
      1280: 5,
      1560: 6,
  }

  const gutterBreakpoints = {
    350: "8px",
    750: "12px",
    900: "16px",
  }

  return <div
    className={classNames(className, 'task-list')}
  >

    {!tasks.length ? <h4>Список заметок пуст</h4> :
      <ResponsiveMasonry
        columnsCountBreakPoints={columnBreakpoints}
        gutterBreakpoints={gutterBreakpoints}
      >
        <Masonry
        >
          {tasks.map((task ) => (
              <Task
                task={task}
                key={task.id}
                onDeleteButtonClicked={onDeleteButtonClicked}
                onCompleteButtonClicked={onCompleteButtonClicked}
              />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      }
  </div>
}

export default TaskList