import { useState } from 'react'
import { TOTAL_LOGOS_BY_TYPE } from '../constants/logos'
import {
  getScoresFromStorage,
  sortByAlpha,
  sortByPercentage,
  sortByTotal,
  getPercentage
} from '../helpers'
import Button from './shared/Button'

const sortOrderTypes = {
  Alphabetic: sortByAlpha,
  Total: sortByTotal,
  Percent: sortByPercentage
}

const HighScores = () => {
  const [sortOrder, setSortOrder] = useState('Alphabetic')
  const allScores = getScoresFromStorage()
  const scoreKeys = Object.entries(allScores)
  const hasScores = Boolean(scoreKeys.length)

  const renderContent = sortType => {
    if (!hasScores) {
      return <h2>No high scores yet. Play a game first!</h2>
    }

    return scoreKeys.sort(sortType).map(([logoPack, score]) => {
      const totalForLogoPack =
        sortOrder === 'Percent'
          ? getPercentage({
              amount: score,
              total: TOTAL_LOGOS_BY_TYPE[logoPack]
            })
          : score
      return (
        <h2 className='text-xl my-1' key={logoPack}>
          <strong>{logoPack}:&nbsp;</strong>
          {totalForLogoPack}
        </h2>
      )
    })
  }

  return (
    <div className='flex flex-col h-full w-full'>
      {hasScores && (
        <div className="flex items-baseline my-0 mx-auto mt-4">
          <h2 className="font-bold mr-2" htmlFor='sort-order'>Sort:</h2>
          <select
            onChange={ev => setSortOrder(ev.target.value)}
            id='sort-order'
            name='sort-order'
            defaultValue={sortOrder}
            className='focus:border-green-700 focus:ring-green-700 form-select mt-1 block w-9/12 min-w-150 rounded-md'
          >
            {['Alphabetic', 'Total', 'Percent'].map(sortType => (
              <option key={sortType} value={sortType}>
                {sortType}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="mt-4">{renderContent(sortOrderTypes[sortOrder])}</div>
    </div>
  )
}

export default HighScores
