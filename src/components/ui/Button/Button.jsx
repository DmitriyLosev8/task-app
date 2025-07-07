import './Button.scss'
import classNames from "classnames";


const Button = (props) => {
  const {
    className,
    onClick,
    children,
    title,
    disabled = false,
  } = props

  return (
    <button
      {...props}
      className={classNames('button', className, `${disabled ? 'button__actions--disabled' : ''}`)}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button