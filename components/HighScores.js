import { useState } from 'react'
import { TOTAL_LOGOS_BY_TYPE } from '../constants/logos'
import {
  getScoresFromStorage,
  sortByAlpha,
  sortByPercentage,
  sortByTotal,
  capitalize,
  formatGameDuration,
  getPercentage
} from '../helpers'

const sortOrderTypes = {
  Alphabetic: sortByAlpha,
  Total: sortByTotal,
  Percent: sortByPercentage
}

const HighScores = () => {
  const [sortOrder, setSortOrder] = useState('Alphabetic')
  const [gameType, setGameType] = useState('untimed')
  const allScores = getScoresFromStorage()
  const gameTypeKeys = Object.keys(allScores)
  const scoresForGameType = allScores[gameType]
  const scoreKeys = Object.entries(scoresForGameType)
  const hasScores = Boolean(scoreKeys.length)

  const renderContent = sortType => {
    if (!hasScores) {
      return <h2>No high scores yet. Play a game first!</h2>
    }

    return scoreKeys.sort(sortType).map(([logoPack, { score, duration }]) => {
      const totalForLogoPack =
        sortOrder === 'Percent'
          ? getPercentage({
              amount: score,
              total: TOTAL_LOGOS_BY_TYPE[logoPack]
            })
          : `${score}/${TOTAL_LOGOS_BY_TYPE[logoPack]}`
      return (
        <h2 className='my-1 text-xl' key={logoPack}>
          <strong>{logoPack}:&nbsp;</strong>
          {totalForLogoPack}{' '}
          {duration ? `(${formatGameDuration(duration)})` : null}
        </h2>
      )
    })
  }

  return (
    <div className='flex flex-col w-full h-full'>
      {hasScores && (
        <div className='flex flex-col items-center mx-auto mt-4 lg:flex-row'>
          <div className='flex items-center'>
            <h2 className='mr-2 font-bold' htmlFor='sort-order'>
              Sort:
            </h2>
            <select
              onChange={ev => setSortOrder(ev.target.value)}
              id='sort-order'
              name='sort-order'
              defaultValue={sortOrder}
              className='block w-9/12 mt-1 rounded-md focus:border-green-700 focus:ring-green-700 form-select min-w-150'
            >
              {['Alphabetic', 'Total', 'Percent'].map(sortType => (
                <option key={sortType} value={sortType}>
                  {sortType}
                </option>
              ))}
            </select>
          </div>
          <div className='flex items-center'>
            <h2
              className='ml-4 mr-2 font-bold whitespace-nowrap'
              htmlFor='game-type'
            >
              Game Type:
            </h2>
            <select
              onChange={ev => setGameType(ev.target.value)}
              id='game-type'
              name='game-type'
              defaultValue={gameType}
              className='block w-9/12 mt-1 rounded-md focus:border-green-700 focus:ring-green-700 form-select min-w-150'
            >
              {gameTypeKeys.map(gameType => (
                <option key={gameType} value={gameType}>
                  {capitalize(gameType)}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      <div className='my-4'>{renderContent(sortOrderTypes[sortOrder])}</div>
    </div>
  )
}

export default HighScores
