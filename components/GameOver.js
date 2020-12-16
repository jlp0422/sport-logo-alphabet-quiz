import Link from 'next/link'
import { getScoreForSportFromStorage, getStatCopy } from '../helpers'
import Button, { ButtonWithRef } from './shared/Button'
import CardHeader from './shared/CardHeader'
import DisplayCard from './shared/DisplayCard'

const GameOver = ({ correctGuesses, restartGame, logoPack }) => {
  const highScore = getScoreForSportFromStorage(logoPack)
  return (
    <DisplayCard borderColor='gray'>
      <CardHeader element='h2'>Final Stats</CardHeader>
      <div>
        <h4 className='text-xl text-center py-2 mt-1'>
          Correct Guesses: <strong>{correctGuesses}</strong>
        </h4>
        <h4 className='text-xl text-center pb-2 mb-2'>
          High Score for {getStatCopy(logoPack)}: <strong>{highScore}</strong>
        </h4>
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
