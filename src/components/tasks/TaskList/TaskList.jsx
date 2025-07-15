import './TaskList.scss'
import classNames from 'classnames'
import Task from "@/components/tasks/Task/Task.jsx";
import { Masonry } from 'react-masonry'




const TaskList = (props) => {
  const {
    className,
    tasks,
    onDeleteButtonClicked,
    onCompleteButtonClicked,

  } = props

  return <div
    className={classNames(className, 'task-list')}
  >
       {!tasks.length ? <h4>Список заметок пуст</h4> :
         <Masonry>
           {tasks.map((task ) => (
           <div className='task-list__item'>
             <Task
               task={task}
               key={task.id}
               onDeleteButtonClicked={onDeleteButtonClicked}
               onCompleteButtonClicked={onCompleteButtonClicked}
             />
           </div>
           ))}
         </Masonry>
    }
  </div>
}

export default TaskList