import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import {FaCheck} from "react-icons/fa";
import './Task.scss'
import classNames from 'classnames'
import {useRef, useState} from "react";
import TaskFormInput from "@/components/tasks/TaskFormInput/index.js";
import {useTextAreaExpand} from "@/hooks/useTextAreaExpand.js";
import {useClickOutside} from "@/hooks/useClickOutside.js";
import TaskModal from "@/components/tasks/TaskModal/index.js";

const Task = (props) => {
  const {
    className,
    task,
    onDeleteButtonClicked,
    onCompleteButtonClicked,
    onCloseModalClicked

  } = props

  const [isMouseOver, setMouseOver] = useState(false)
  const [isModal, setIsModal] = useState(false)

  const taskModalRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const [titleText, setTitleText] = useState(task.title)
  const [descriptionText, setDescriptionText] = useState(task.description)
  //const [isInputExpanded,setIsInputExpanded] = useState(false)

  const onInputTitleChange = (event) => {
    setTitleText(event.target.value)
  }

  const onInputDescriptionChange = (event) =>{
    setDescriptionText(event.target.value)
  }

  useTextAreaExpand(titleRef, titleText)
  useTextAreaExpand(descriptionRef, descriptionText)

  const closeModal = () => {
    setIsModal(false)
    onCloseModalClicked(task.id, titleText, descriptionText )
  }

/*  const expandInputsArea = () => {
    if (!isInputExpanded) {
      setIsInputExpanded(true)
    }
  }*/

  /*const collapseInputsArea = () => {
    if (isInputExpanded) {
      setIsInputExpanded(false)
    }
  }*/

  //useClickOutside(taskModalRef, setIsModal(false), isModal)


  return (
    <div className='task__container'>
      <div
        className={classNames(className, `task ${task.isCompleted ? 'task__completed' : ''} ${isModal ? 'visually-hidden' : ''}`)}
        onMouseOver={() => setMouseOver(true)}
        onMouseOut={() => setMouseOver(false)}
      >
        {/*<RiTodoFill className='task__icon'/>*/}
        <div
          className={`task__text `}
          onClick={() => setIsModal(!isModal)}
        >
          <div className='task__text--title'>
            <p>{titleText}</p>
          </div>
          <div className='task__text--description'>
            <p>{descriptionText}</p>
          </div>
        </div>
        <div className='task__icons-container'>
          <div
            className={`task__icons ${!isMouseOver ? 'visually-hidden' : ''}`}
          >
            <RiDeleteBin2Line className='task__icon task__icon--delete' onClick={() => onDeleteButtonClicked(task.id)}/>
            <FaCheck className=' task__icon task__icon--check' onClick={() => onCompleteButtonClicked(task.id)}/>
          </div>
        </div>
      </div>

      <TaskModal
        className={`${!isModal ? 'visually-hidden' : ''}`}
        isModal={isModal}
        titleText={titleText}
        descriptionText={descriptionText}
        onInputTitleChange={onInputTitleChange}
        onInputDescriptionChange={onInputDescriptionChange}
        closeModal={closeModal}
      />
    </div>
  )
}

export default Task