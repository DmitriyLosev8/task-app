import {useState} from "react";
import './TaskGenerator.scss'
import classNames from 'classnames'
import '@/styles/index.scss'
import { v4 as uuidv4 } from 'uuid'
import TaskForm from "@/components/tasks/TaskForm/TaskForm.jsx";

const TaskGenerator = (props) => {
  const {
    className,
  } = props

  const [tasks, setCurrentTasks] = useState([])

  const addTask = (taskText) =>{
    const newTask = {
      text: taskText,
      isCompleted: false,
      id: uuidv4()
    }
    setCurrentTasks([...tasks, newTask]);
  }

  const deleteTask = (taskId) => {
    setCurrentTasks(tasks.filter((task) => task.id !== taskId))
  }

  const toggleTask = (taskId) => {
    setCurrentTasks(tasks.map((task) => {
      return task.id === taskId
        ? {...task, isCompleted: !task.isCompleted}
        : {...task}

    }))
  }

  const resetTasks = () => {
    setCurrentTasks([])
  }

  const deleteCompletedTasks = () => {
    setCurrentTasks(tasks.filter((task) => !task.isCompleted))
  }

  const completedTasksCount = tasks.filter((task) => task.isCompleted).length

  return (
    <div
      className={classNames(className, 'task-generator container')}
    >
      <h1>Что по задачам?</h1>
      <TaskForm
        onSubmitButtonClicked={addTask}
      />

    </div>
  )
}

export default TaskGenerator