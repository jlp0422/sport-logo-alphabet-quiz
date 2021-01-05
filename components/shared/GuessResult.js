import { useEffect } from 'react'

const InProgressGame = ({ isCorrectGuess, isIncorrectGuess, activeLogo }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  const letterForLogo = activeLogo.letters[0].toUpperCase()
  const teamName = activeLogo.title.split(' ').join('&nbsp;')
  const league = activeLogo.league.toUpperCase()

  const [preGuessCopy, color] = isCorrectGuess
    ? ["That's correct!", 'green']
    : ["Nope, that's not correct!", 'red']

  const bgColorMap = {
    green: 'bg-green-600',
    red: 'bg-red-600'
  }

  if (!(isCorrectGuess || isIncorrectGuess)) {
    return null
  }

  return (
    <h2
      className={`text-md xs:text-lg sm:text-3xl text-center font-bold text-white rounded-lg my-2 sm:mt-0 py-2 px-4 mx-4 border-2 border-white border-solid ${bgColorMap[color]}`}
    >
      <span
        dangerouslySetInnerHTML={{
          __html: `${preGuessCopy} ${letterForLogo} is for ${teamName} (${league}).`
        }}
      />
    </h2>
  )
}

export default InProgressGame
