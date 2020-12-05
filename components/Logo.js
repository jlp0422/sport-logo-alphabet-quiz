import Image from 'next/image'
import styles from '../styles/Logo.module.css'

const Logo = ({ logo, isWaitingForGuess }) => {
  return (
    <Image
      src={`/logos/${logo.filename}.png`}
      alt={isWaitingForGuess ? 'Guess the logo' : logo.title}
      title={isWaitingForGuess ? 'Guess the logo' : logo.title}
      width='300'
      height='300'
      className={styles.image}
    />
  )
}

export default Logo
