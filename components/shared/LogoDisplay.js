import { useEffect, useState } from 'react'
import Logo from '../Logo'
import Loading from '../shared/Loading'

const LogoDisplay = ({ activeLogo, loadingDotColor, ...props }) => {
  const [isLoading, setIsLoading] = useState(true)
  const hiddenWhenLoading = isLoading ? 'hidden' : 'block'

  useEffect(() => {
    setIsLoading(true)
  }, [activeLogo])

  return (
    <>
      {isLoading && <Loading loadingDotColor={loadingDotColor} />}
      <div
        className={`m-2 p-4 bg-white rounded-md border shadow w-1/2 xs:w-max ${hiddenWhenLoading}`}
      >
        <div className={hiddenWhenLoading}>
          <Logo {...props} logo={activeLogo} setIsLoading={setIsLoading} />
        </div>
      </div>
    </>
  )
}

export default LogoDisplay
