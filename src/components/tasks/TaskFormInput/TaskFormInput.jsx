import './TaskFormInput.scss'
import classNames from 'classnames'



const TaskFormInput = (props) => {
  const {
    className,
    placeholder,
    value,
    onChange,
    onClick,
    id,
  } = props

  return (
    <input
      className={classNames(className, 'task-form-input')}
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onClick={onClick}
      id={id}
      autoComplete="off"
    />
  )
}

export default TaskFormInput