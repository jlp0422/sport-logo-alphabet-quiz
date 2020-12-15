import { useEffect, useState } from 'react'
import Logo from '../Logo'
// import dynamic from 'next/dynamic'

// const LogoDynamic = dynamic(import('../Logo'), {
//   ssr: false
// })

const LogoDisplay = ({ activeLogo, ...props }) => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
  }, [activeLogo])

  return (
    <div className='m-2 p-4 bg-white rounded-md border shadow w-4/6 xsm:w-max'>
      {isLoading && (
        <h2
          className='flex justify-center items-center font-bold text-2xl text-center'
          style={{
            width: 225,
            height: 230
          }}
        >
          Grabbing next logo...
        </h2>
      )}
      <div className={isLoading ? 'hidden' : 'block'}>
        <Logo {...props} logo={activeLogo} setIsLoading={setIsLoading} />
      </div>
    </div>
  )
}

export default LogoDisplay
