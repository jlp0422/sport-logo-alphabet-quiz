// import styles from '../styles/Button.module.css'

const Button = ({ children, onClick, disabled, modifier }) => {
  return (
    <button className="modifier" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
