// import styles from '../styles/Button.module.css'

const Button = ({ children, onClick, disabled, modifier }) => {
  return (
    <button
      className={`py-2 px-4 bg-${modifier}-500 text-white font-semibold rounded-lg shadow-md hover:bg-${modifier}-700 focus:outline-none focus:ring-2 focus:ring-${modifier}-400 focus:ring-opacity-75`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
