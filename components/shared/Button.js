import React from 'react'

export const ButtonWithRef = React.forwardRef(
  ({ onClick, href, ...props }, ref) => (
    <a href={href} onClick={onClick} ref={ref}>
      <Button {...props} />
    </a>
  )
)

const Button = ({
  children,
  onClick,
  disabled,
  modifier,
  className,
  isButton = true
}) => {
  const modifierToColors = {
    green: `bg-green-500 focus:ring-green-400 ${
      disabled ? '' : 'hover:bg-green-700'
    }`,
    yellow: `bg-yellow-500 focus:ring-yellow-400 ${
      disabled ? '' : 'hover:bg-yellow-700'
    }`,
    blue: `bg-blue-500 focus:ring-blue-400 ${
      disabled ? '' : 'hover:bg-blue-700'
    }`,
    slate: `bg-slate-500 focus:ring-slate-400 ${
      disabled ? '' : 'hover:bg-slate-700'
    }`
  }
  const colors = modifierToColors[modifier]
  const buttonProps = isButton ? { onClick, disabled } : {}
  return (
    <button
      className={`py-2 px-4 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 disabled:opacity-75 ${className} ${colors}`}
      {...buttonProps}
    >
      {children}
    </button>
  )
}

export default Button
