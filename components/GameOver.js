import Link from 'next/link'
import {
  getScoreForSportFromStorage,
  getStatCopy,
  formatGameDuration
} from '../helpers'
import Button, { ButtonWithRef } from './shared/Button'
import CardHeader from './shared/CardHeader'
import DisplayCard from './shared/DisplayCard'

const GameOver = ({
  correctGuesses,
  restartGame,
  logoPack,
  isTimedMode,
  startTime,
  endTime
}) => {
  const highScore = getScoreForSportFromStorage(logoPack, isTimedMode)
  return (
    <DisplayCard borderColor='gray'>
      <CardHeader element='h2'>Final Stats</CardHeader>
      <div>
        <h4 className='py-2 mt-1 text-xl text-center'>
          Correct Guesses: <strong>{correctGuesses}</strong>
        </h4>
        <h4 className='pb-2 mb-2 text-xl text-center'>
          High Score for {getStatCopy(logoPack)}:{' '}
          <strong>{highScore.score}</strong>
        </h4>
        {isTimedMode && (
          <h4 className='pb-2 mb-2 text-xl text-center'>
            Best time for {getStatCopy(logoPack)}:{' '}
            <strong>{formatGameDuration(highScore.duration)}</strong>
          </h4>
        )}
      </div>
      <Button modifier='green' onClick={restartGame}>
        Start new game!
      </Button>
      <Link href='/high-scores' passHref>
        <ButtonWithRef modifier='blue'>See high scores</ButtonWithRef>
      </Link>
    </DisplayCard>
  )
}

export default GameOver
