import { useState } from 'react'
import { getScoresFromStorage } from '../helpers'
import { TOTAL_LOGOS_BY_TYPE } from '../constants/logos'
import Button from './shared/Button'

const sortByAlpha = ([aKey], [bKey]) => {
  if (aKey > bKey) {
    return 1
  }
  if (aKey < bKey) {
    return -1
  }
  return 0
}

const sortByTotal = ([aKey, aCount], [bKey, bCount]) => {
  // sort desc
  if (aCount > bCount) {
    return -1
  }
  if (aCount < bCount) {
    return 1
  }
  return 0
}

const sortByPercentage = ([aKey, aCount], [bKey, bCount]) => {
  const aPercent = aCount / TOTAL_LOGOS_BY_TYPE[aKey]
  const bPercent = bCount / TOTAL_LOGOS_BY_TYPE[bKey]

  // sort desc
  if (aPercent > bPercent) {
    return -1
  }
  if (aPercent < bPercent) {
    return 1
  }
  return 0
}

const sortOrderTypes = {
  alpha: sortByAlpha,
  total: sortByTotal,
  percent: sortByPercentage
}

const HighScores = () => {
  const [sortOrder, setSortOrder] = useState('alpha')
  const allScores = getScoresFromStorage()
  const scoreKeys = Object.entries(allScores)
  const hasScores = scoreKeys.length

  const renderContent = sort => {
    if (!hasScores) {
      return <h2>No high scores yet. Play a game first!</h2>
    }

    return scoreKeys.sort(sort).map(([logoPack, score]) => {
      const totalForLogoPack =
        sortOrder === 'percent'
          ? `${Math.round((score / TOTAL_LOGOS_BY_TYPE[logoPack]) * 100)}%`
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
    <div className='w-full'>
      {renderContent(sortOrderTypes[sortOrder])}
      <div className='flex justify-around'>
        {['alpha', 'total', 'percent'].map(sortType => (
          <Button
            key={sortType}
            disabled={sortOrder === sortType}
            modifier='blue'
            onClick={() => setSortOrder(sortType)}
          >
            {`${sortType.slice(0, 1).toUpperCase()}${sortType.slice(1)}`}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default HighScores
