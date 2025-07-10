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
  } = props

  return (   //доделать нормальный перенос текста
    <textarea
      className={classNames(className, 'task-form-input')}
      placeholder={placeholder}
      wrap={'hard'}
      cols={60}
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