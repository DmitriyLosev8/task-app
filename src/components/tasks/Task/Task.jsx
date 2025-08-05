import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import {FaCheck} from "react-icons/fa";
import './Task.scss'
import classNames from 'classnames'
import {useRef, useState} from "react";
import TaskFormInput from "@/components/tasks/TaskFormInput/index.js";
import {useInputAreaExpand} from "@/hooks/useInputAreaExpand.js";
import {useClickOutside} from "@/hooks/useClickOutside.js";
import TaskModal from "@/components/tasks/TaskModal/index.js";
import {useSetHeightOfTextArea} from "@/hooks/useSetHeightOfTextArea.js";

const Task = (props) => {
  const {
    className,
    task,
    onDeleteButtonClicked,
    onCompleteButtonClicked,
    onCloseModalClicked

  } = props

  const descriptionTextAreaRef = useRef(null)
  const [isMouseOver, setMouseOver] = useState(false)
  const [isModal, setIsModal] = useState(false)
  const [isNeedToLimitTextAreaHeight, setIsNeedToLimitTextAreaHeight] = useState(false)

  const [titleText, setTitleText] = useState(task.title)
  const [descriptionText, setDescriptionText] = useState(task.description)


  const onInputTitleChange = (event) => {
    setTitleText(event.target.value)
  }

  const onInputDescriptionChange = (event) =>{
    setDescriptionText(event.target.value)
  }

  const closeModal = () => {
    setIsModal(false)
    onCloseModalClicked(task.id, titleText, descriptionText )
  }

  /*const setHeightOfTextArea = () => {

    const necessaryHeightOfTextArea = document.documentElement.clientHeight/100 * 50

    console.log('необходимая высота текстовой зоны - ' + necessaryHeightOfTextArea)

    if(descriptionTextAreaRef.current) {
      const currentTextAreaHeight = descriptionTextAreaRef.current?.scrollHeight
     // const currentTextAreaHeight =
      console.log('высота текстовой зоны ДО - ' + currentTextAreaHeight)

      if(currentTextAreaHeight >= necessaryHeightOfTextArea){
        descriptionTextAreaRef.current.style.height = necessaryHeightOfTextArea + 'px'
        console.log('высота текстовой зоны ПОСЛЕ - ' + descriptionTextAreaRef.current.style.height)
        setIsNeedToLimitTextAreaHeight(true)
      }
      else {
        setIsNeedToLimitTextAreaHeight(false)
      }
    }


  }*/

 // useSetHeightOfTextArea(descriptionTextAreaRef, 50, 'visually-hidden')

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
          <div className='task__text-title'>
            <p>{titleText}</p>
          </div>
          <div
            className={`task__text-description ${isNeedToLimitTextAreaHeight ? 'task__text-description--expanded' : ''}`}
           // className='task__text-description'
            ref={descriptionTextAreaRef}

            >
            <p>{descriptionText}  </p>
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
        //setHeightOfTextArea={setHeightOfTextArea}
      />
    </div>
  )
}

export default Task