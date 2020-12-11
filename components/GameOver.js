import { getScoreForSportFromStorage, getStatCopy } from '../helpers'
import Button from './Button'
import DisplayCard from './shared/DisplayCard'
import CardHeader from './shared/CardHeader'

const GameOver = ({ correctGuesses, restartGame, logoPack }) => {
  const highScore = getScoreForSportFromStorage(logoPack)
  return (
    <DisplayCard borderColor='gray'>
      <CardHeader element='h2'>Final Stats</CardHeader>
      <div>
        <h4 className='text-xl text-center py-2 mt-1'>
          Correct Guesses: {correctGuesses}
        </h4>
        <h4 className='text-xl text-center pb-2 mb-2'>
          High Score for {getStatCopy(logoPack)}: {highScore}
        </h4>
      </div>
      <Button modifier='green' onClick={restartGame}>
        Start new game!
      </Button>
    </DisplayCard>
  )
}

export default GameOver
