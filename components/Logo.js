import ColorThief from 'colorthief'
import Image from 'next/image'

const Logo = ({ logo, isWaitingForGuess, setPalette, setIsLoading }) => {
  const ct = new ColorThief()
  const imageInfo = isWaitingForGuess ? 'Guess the logo' : logo.title
  const imageSrc = logo.sport
    ? `/logos/${logo.sport}/${logo.league}/${logo.filename}.png`
    : `/logos/${logo.league}/${logo.filename}.png`

    return (
    <Image
      src={imageSrc}
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
