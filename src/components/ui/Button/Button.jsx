import './Button.scss'


const Button = (props) => {
  const {
    className,
    onClick,
    children,
    title,
    isDisabled = false,
  } = props

  return (
    <button
      {...props}
      className='button'
      onClick={onClick}
      title={title}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

export default Button