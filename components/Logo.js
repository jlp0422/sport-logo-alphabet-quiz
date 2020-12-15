import ColorThief from 'colorthief'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Logo = ({ logo, isWaitingForGuess, setPalette }) => {
  const ct = new ColorThief()
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    setIsLoaded(false)
  }, [logo])

  console.log({ isLoaded })

  return (
    <Image
      src={`/logos/${logo.sport}/${logo.filename}.png`}
      alt={isWaitingForGuess ? 'Guess the logo' : logo.title}
      title={isWaitingForGuess ? 'Guess the logo' : logo.title}
      priority
      loading='eager'
      width='225'
      height='225'
      className='object-contain'
      onLoad={img => {
        setIsLoaded(true)
        setPalette(ct.getPalette(img.target, 3))
      }}
    />
  )
}

export default Logo
