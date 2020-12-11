import Logo from './Logo'

const InProgressGame = ({
  isCorrectGuess,
  isIncorrectGuess,
  isWaitingForGuess,
  postGuessCopy,
  activeLogo
}) => {
  const [preGuessCopy, color] = isCorrectGuess
    ? ["That's correct!", 'green']
    : ["Nope, that's not correct!", 'red']
  const hasGuessed = isCorrectGuess || isIncorrectGuess

  return (
    <div className='flex flex-col justify-center items-center max-w-screen-md flex-wrap'>
      <div className='m-2 p-4 bg-white rounded-md border shadow'>
        <Logo logo={activeLogo} isWaitingForGuess={isWaitingForGuess} />
      </div>
      {hasGuessed && (
        <h2 className={`text-xl py-2 text-${color}-600 font-bold`}>
          {`${preGuessCopy} ${postGuessCopy}`}
        </h2>
      )}
    </div>
  )
}

export default InProgressGame
