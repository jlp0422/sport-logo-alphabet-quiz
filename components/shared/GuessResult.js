const InProgressGame = ({ isCorrectGuess, isIncorrectGuess, activeLogo }) => {
  const letterForLogo = activeLogo.letters[0]
  const teamName = activeLogo.title.split(' ').join('&nbsp;')

  const [preGuessCopy, color] = isCorrectGuess
    ? ["That's correct!", 'green']
    : ["Nope, that's not correct!", 'red']

  const hasGuessed = isCorrectGuess || isIncorrectGuess
  const copy = (
    <span
      dangerouslySetInnerHTML={{
        __html: `${preGuessCopy} ${letterForLogo} is for ${teamName}.`
      }}
    />
  )

  const textColorMap = {
    green: 'text-green-600',
    red: 'text-red-600'
  }

  return (
    <h2
      className={`text-xl sm:text-2xl text-center py-2 font-bold ${textColorMap[color]}`}
    >
      {hasGuessed ? copy : <span>&nbsp;</span>}
    </h2>
  )
}

export default InProgressGame
