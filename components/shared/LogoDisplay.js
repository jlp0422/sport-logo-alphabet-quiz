import Logo from '../Logo'
// import dynamic from 'next/dynamic'

// const LogoDynamic = dynamic(import('../Logo'), {
//   ssr: false
// })

const LogoDisplay = ({ activeLogo, isWaitingForGuess, setPalette }) => {
  return (
    <div className='m-2 p-4 bg-white rounded-md border shadow w-4/6 xsm:w-max'>
      <Logo
        logo={activeLogo}
        isWaitingForGuess={isWaitingForGuess}
        setPalette={setPalette}
      />
    </div>
  )
}

export default LogoDisplay
