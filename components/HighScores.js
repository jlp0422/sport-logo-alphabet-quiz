import { getScoresFromStorage } from '../helpers'

const HighScores = () => {
  const allScores = getScoresFromStorage()
  const scoreKeys = Object.keys(allScores)
  const hasScores = scoreKeys.length

  return (
    <div>
      {hasScores ? (
        scoreKeys.sort().map(logoPack => (
          <h2 className='text-xl my-1' key={logoPack}>
            <strong>{logoPack}:&nbsp;</strong>
            {allScores[logoPack]}
          </h2>
        ))
      ) : (
        <h2>No high scores yet. Play a game first!</h2>
      )}
    </div>
  )
}

export default HighScores
