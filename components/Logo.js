import ColorThief from 'colorthief'
import Image from 'next/image'

const Logo = ({
  logo,
  isWaitingForGuess,
  setPalette,
  setIsLoading
}) => {
  const ct = new ColorThief()
  const imageInfo = isWaitingForGuess ? 'Guess the logo' : logo.title

  return (
    <Image
      src={`/logos/${logo.sport}/${logo.filename}.png`}
      alt={imageInfo}
      title={imageInfo}
      loading='eager'
      width='225'
      height='225'
      className={`object-contain`}
      onLoad={img => {
        setIsLoading(false)
        setPalette(ct.getPalette(img.target, 3))
      }}
    />
  )
}

export default Logo
