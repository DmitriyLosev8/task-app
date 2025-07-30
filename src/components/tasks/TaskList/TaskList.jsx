import './TaskList.scss'
import classNames from 'classnames'
import Task from "@/components/tasks/Task/Task.jsx";
//import MasonryTask from "@/components/tasks/MasonryTask/index.js";
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

const TaskList = (props) => {
  const {
    className,
    tasks,
    onDeleteButtonClicked,
    onCompleteButtonClicked,

  } = props

  const columnsBreakpoints = { 0: 1, 480: 3, 1023: 4, 1240: 6 }
  const gap = 15

  function renderCard()  {
    tasks.map((task ) => (
     // <div className='task-list__item' key={task.id}>
        <Task
          task={task}
          key={task.id}
          onDeleteButtonClicked={onDeleteButtonClicked}
          onCompleteButtonClicked={onCompleteButtonClicked}
        />
     // </div>
    ))
  }



/*  return <div
    className={classNames(className, 'task-list')}
  >
    {!tasks.length ? <h4>Список заметок пуст</h4> :
      <MasonryTask
        todos={tasks}
        columnsBreakpoints={columnsBreakpoints}
        gap={gap}
        renderCard={renderCard}
      />
    }
  </div>*/



    const columnBreakpoints = {
      350: 1,
      533: 2,
      783: 3,
      1024: 4,
      1280: 5,
      1560: 6,
  }

  const gutterBreakpoints = {
    1240: '16px',
    1023: '14px',
    767: '12px',
    480: '18px',
  }

  return <div
    className={classNames(className, 'task-list')}
  >

    {!tasks.length ? <h4>Список заметок пуст</h4> :
      <ResponsiveMasonry
        /*columnsCountBreakPoints={columnBreakpoints}
        gutterBreakpoints={gutterBreakpoints}*/
        columnsCountBreakPoints={columnBreakpoints}
        gutterBreakpoints={{350: "8px", 750: "12px", 900: "16px"}}
      >
        <Masonry
        >
          {tasks.map((task ) => (
           // <div className='task-list__item' key={task.id}>
              <Task
                task={task}
                key={task.id}
                onDeleteButtonClicked={onDeleteButtonClicked}
                onCompleteButtonClicked={onCompleteButtonClicked}
              />
           // </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      }
  </div>
}

export default TaskList