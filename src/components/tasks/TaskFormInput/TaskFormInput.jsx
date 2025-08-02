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
    maxlength,
    ref,
  } = props

  return (
    <textarea
      className={classNames(className, 'task-form-input')}
      ref={ref}
      placeholder={placeholder}
      rows={1}
      value={value}
      onChange={onChange}
      onClick={onClick}
      id={id}
      maxLength={maxlength}
      autoComplete="off"
    />
  )
}

export default TaskFormInput