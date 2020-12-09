import Button from './Button'

const GameOver = ({ correctGuesses, restartGame, highScore, logoPack }) => {
  return (
    <div className='p-10 bg-red text-center flex flex-col items-center justify-around rounded-2xl border-2 shadow-lg border-gray-400 bg-gray-100 sm:w-50vw sm:h-50vh w-80vw h-60vh'>
      <h2 className='text-3xl text-center font-bold'>STATS</h2>
      <div><h4 className='text-xl text-center py-2 mt-1'>
        Correct Guesses: {correctGuesses}
      </h4>
      <h4 className='text-xl text-center pb-2 mb-2'>
        High Score for {logoPack}: {highScore}
      </h4>
      </div>
      <Button modifier='green' onClick={restartGame}>
        Start new game!
      </Button>
    </div>
  )
}

export default GameOver
