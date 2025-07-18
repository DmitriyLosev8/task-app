import './TaskList.scss'
import classNames from 'classnames'
import Task from "@/components/tasks/Task/Task.jsx";
import Masonry from 'masonry-layout'
//import { Masonry } from 'react-masonry'
//import Masonry  from 'react-masonry-css'
import MasonryCo from '@/MasonryCo.js'




const TaskList = (props) => {
  const {
    className,
    tasks,
    onDeleteButtonClicked,
    onCompleteButtonClicked,

  } = props

  /*//const elem = document.querySelector('.grid');
  const msnry = new Masonry('.task-list', {
    // options
    itemSelector: '.task-list__item',
    columnWidth: 240,
    gutter: 10,

  });


  function changeLayout () {
    msnry.layout()
  }*/


  return <div
    className={classNames(className, 'task-list')}
  >
    {!tasks.length ? <h4>Список заметок пуст</h4> :
         tasks.map((task ) => (
           <div className='task-list__item' key={task.id}>
             <Task
               task={task}
               onDeleteButtonClicked={onDeleteButtonClicked}
               onCompleteButtonClicked={onCompleteButtonClicked}
             />
           </div>

         ))}
  </div>






  /*const breakpoints = {
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
  </div>*/
}



export default TaskList