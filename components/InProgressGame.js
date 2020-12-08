import Logo from './Logo'

const InProgressGame = ({
  isCorrectGuess,
  isIncorrectGuess,
  isWaitingForGuess,
  postGuessCopy,
  activeLogo
}) => {
  const [preGuessCopy, color] = isCorrectGuess
    ? ['You guessed correct', 'green']
    : ["Nope, that's not correct!", 'red']
  return (
    <div className='flex flex-col justify-center items-center max-w-screen-md flex-wrap'>
      <div className='m-2 p-2 text-left'>
        <Logo logo={activeLogo} isWaitingForGuess={isWaitingForGuess} />
      </div>
      {(isCorrectGuess || isIncorrectGuess) && (
        <h2 className={`text-xl py-2 text-${color}-600 font-bold`}>
          {`${preGuessCopy} ${postGuessCopy}`}
        </h2>
      )}
    </div>
  )
}

export default InProgressGame
