import Logo from '../Logo'

const LogoDisplay = ({ activeLogo, isWaitingForGuess }) => {
  return (
    <div className='m-2 p-4 bg-white rounded-md border shadow w-4/6 xsm:w-max'>
      <Logo logo={activeLogo} isWaitingForGuess={isWaitingForGuess} />
    </div>
  )
}

export default LogoDisplay
