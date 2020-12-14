import Image from 'next/image'

const Logo = ({ logo, isWaitingForGuess }) => {
  return (
    <Image
      src={`/logos/${logo.filename}.png`}
      alt={isWaitingForGuess ? 'Guess the logo' : logo.title}
      title={isWaitingForGuess ? 'Guess the logo' : logo.title}
      priority
      loading="eager"
      width='225'
      height='225'
      className='object-contain'
    />
  )
}

export default Logo
