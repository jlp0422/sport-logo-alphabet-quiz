import Button from './Button'

const GameOver = ({ correctGuesses, restartGame, highScore }) => {
  return (
    <div className='p-10 bg-red text-center flex flex-col items-center justify-center rounded-2xl border-2 shadow-lg border-gray-400 bg-gray-100'>
      <h2 className='text-3xl md:text-5xl text-center font-bold sm:text-2xl'>STATS</h2>
      <h4 className='text-2xl text-center py-2 mt-1'>
        Correct Guesses: {correctGuesses}
      </h4>
      <h4 className='text-2xl text-center pb-2 mb-2'>
        High Score: {highScore}
      </h4>
      <Button modifier='green' onClick={restartGame}>
        Start new game!
      </Button>
    </div>
  )
}

export default GameOver
