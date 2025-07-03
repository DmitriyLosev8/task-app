import '@/styles/index.scss'
import { v4 as uuidv4 } from 'uuid'

import './App.css'
import Task from "@/components/tasks/Task/Task.jsx";
import {useState} from "react";



function App() {

  const currentTask = {
    text: 'Task number 1',
    isCompleted: false,
    id: uuidv4()
  }

  const [task, setTask] = useState(currentTask);

  const toggleTaskHandler = (taskId) => {
    setTask({...task, isCompleted: !task.isCompleted})
  }


  return (
    <div>
      <Task
        task={task}
        onToggleButtonClicked={toggleTaskHandler}
      />


    </div>
  )
}

export default App
