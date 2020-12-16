import { useEffect, useState } from 'react'
import Logo from '../Logo'

const LogoDisplay = ({ activeLogo, ...props }) => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
  }, [activeLogo])

  return (
    <div className='m-2 p-4 bg-white rounded-md border shadow w-1/2 xs:w-max'>
      {true && (
        <h2 className='flex justify-center items-center xs:font-bold text-lg xs:text-2xl text-center w-full h-full xs:w-225 xs:h-230'>
          Grabbing the next logo...
        </h2>
      )}
      <div className={true ? 'hidden' : 'block'}>
        <Logo {...props} logo={activeLogo} setIsLoading={setIsLoading} />
      </div>
    </div>
  )
}

export default LogoDisplay
