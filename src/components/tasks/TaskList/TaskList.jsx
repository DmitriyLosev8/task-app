import './TaskList.scss'
import classNames from 'classnames'
import Task from "@/components/tasks/Task/Task.jsx";
//import { Masonry } from 'react-masonry'
import Masonry  from 'react-masonry-css'




const TaskList = (props) => {
  const {
    className,
    tasks,
    onDeleteButtonClicked,
    onCompleteButtonClicked,

  } = props

  const breakpoints = {
    default: 6,
    1023: 4,
    767: 3,
    480: 1,

  };




  return <div
    className={classNames(className, 'task-list')}
  >
       {!tasks.length ? <h4>Список заметок пуст</h4> :
         <Masonry
           breakpointCols={breakpoints}
           className="my-masonry-grid"
           columnClassName="my-masonry-grid_column"
         >
           {tasks.map((task ) => (
             <div className='task-list__item' key={task.id}>
             <Task
               task={task}

               onDeleteButtonClicked={onDeleteButtonClicked}
               onCompleteButtonClicked={onCompleteButtonClicked}
             />
             </div>
           ))}
         </Masonry>}
  </div>
}

export default TaskList