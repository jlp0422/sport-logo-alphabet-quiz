const InProgressGame = ({ isCorrectGuess, isIncorrectGuess, activeLogo }) => {
  const letterForLogo = activeLogo.letters[0]
  const teamName = activeLogo.title.split(' ').join('&nbsp;')

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
      className={`text-md xs:text-lg sm:text-3xl text-center font-bold text-white rounded-lg my-2 sm:mt-0 py-2 px-4 border-2 border-white border-solid ${bgColorMap[color]}`}
    >
      <span
        dangerouslySetInnerHTML={{
          __html: `${preGuessCopy} ${letterForLogo} is for ${teamName}.`
        }}
      />
    </h2>
  )
}

export default InProgressGame
