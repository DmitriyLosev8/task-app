import {useState} from "react";
import './TaskGenerator.scss'
import classNames from 'classnames'
import '@/styles/index.scss'
import { v4 as uuidv4 } from 'uuid'
import TaskForm from "@/components/tasks/TaskForm/TaskForm.jsx";
import TaskActions from "@/components/tasks/TaskActions/index.js";
import TaskList from "@/components/tasks/TaskList/index.js";

const TaskGenerator = (props) => {
  const {
    className,
  } = props

  const [tasks, setCurrentTasks] = useState([])


  const addTask = (description, title) =>{

    const newTask = {
      description: description,
      title: title,
      isCompleted: false,
      id: uuidv4()
    }
    const newTasksArray = [...tasks]
    newTasksArray.unshift(newTask)
    setCurrentTasks(newTasksArray)
  }

  const refreshOneTask = (taskId, title, description) => {
    setCurrentTasks(tasks.map((task) => {
      return task.id === taskId
        ? {...task, title: title, description: description}
        : {...task}
    }))
  }

  const deleteTask = (taskId) => {
    setCurrentTasks(tasks.filter((task) => task.id !== taskId))

  }

  const completeTask = (taskId) => {
    setCurrentTasks(tasks.map((task) => {
      return task.id === taskId
        ? {...task, isCompleted: !task.isCompleted}
        : {...task}

    }))
  }

  const deleteAllTasks = () => {
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
      {tasks.length > 0 &&
        <TaskActions
          deleteAllTasks={deleteAllTasks}
          deleteCompletedTasks={deleteCompletedTasks}
          isClearCompletedTasksButtonExist={completedTasksCount > 0}
        />
      }
      <TaskList
        tasks={tasks}
        onDeleteButtonClicked={deleteTask}
        onCompleteButtonClicked={completeTask}
        onCloseModalClicked={refreshOneTask}
      />
      {completedTasksCount > 0 &&
        <h4>{`Вы завершили ${completedTasksCount} ${completedTasksCount > 1
          ? 'задач'
          : "задачу"}`}</h4>
      }
    </div>
  )
}

export default TaskGenerator