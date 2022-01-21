import { TOTAL_LOGOS_BY_TYPE } from '../constants/logos'

const LOCAL_STORAGE_KEY = 'SPORT_LOGO_ALPHABET_HIGH_SCORE'

export const getScoresFromStorage = () => {
  if (!window) {
    return {}
  }

  const rawStorage = window.localStorage.getItem(LOCAL_STORAGE_KEY) || '{}'
  let parsedStorage

  try {
    parsedStorage = JSON.parse(rawStorage)
  } catch (e) {
    parsedStorage = {}
  }

  return parsedStorage
}

export const getDuration = ({ startTime, endTime }) => {
  if (!startTime || !endTime) {
    return null
  }
  return endTime - startTime
}

export const formatGameDuration = gameDurationMs => {
  if (!gameDurationMs) {
    return null
  }
  const durationTime = new Date(gameDurationMs)
  const minutes = durationTime.getMinutes()
  const seconds = durationTime.getSeconds()
  return `${minutes}:${seconds}`
}

const getScoresKey = isTimedMode => (isTimedMode ? 'timed' : 'untimed')
const isTimed = key => key === 'timed'

export const updateScoreInStorage = (
  { logoPack, correctGuesses },
  { startTime, endTime } = {}
) => {
  const gameDuration = getDuration({ startTime, endTime })
  const key = getScoresKey(gameDuration)
  const scores = getScoresFromStorage()
  const scoresForGameType = scores[key] || {}
  const scoresForLogoPack = scoresForGameType[logoPack] || {}
  const prevHighScoreForSport = scoresForLogoPack.score || 0

  const newHighScoreForSport = Math.max(prevHighScoreForSport, correctGuesses)
  const updatedScoresForStorage = Object.assign({}, scores, {
    [key]: {
      ...scores[key],
      [logoPack]: {
        score: newHighScoreForSport,
        ...(isTimed(key) ? { duration: gameDuration } : {})
      }
    }
  })

  window.localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify(updatedScoresForStorage)
  )
}

export const getScoreForSportFromStorage = (logoPack, isTimedMode) => {
  const key = getScoresKey(isTimedMode)
  const scores = getScoresFromStorage()
  return scores[key][logoPack] || 0
}

export const getRandomLogo = logos => {
  if (!logos.length) {
    return {}
  }
  const randomIndex = Math.floor(Math.random() * logos.length)
  return logos[randomIndex]
}

export const getNextAlphabetLogo = logos => {
  if (!logos.length) {
    return {}
  }
  const sorted = logos.sort(sortByLetter)
  return sorted[0]
}

const sortByLetter = (a, b) => {
  if (a.letters[0] > b.letters[0]) {
    return 1
  }
  if (a.letters[0] < b.letters[0]) {
    return -1
  }
  return 0
}

export const getCurrentGameStatus = (currentStatus, allStatuses) => ({
  isGameNotStarted: currentStatus === allStatuses.NOT_STARTED,
  isGameOver: currentStatus === allStatuses.GAME_OVER,
  isCorrectGuess: currentStatus === allStatuses.CORRECT_GUESS,
  isIncorrectGuess: currentStatus === allStatuses.INCORRECT_GUESS,
  isWaitingForGuess: currentStatus === allStatuses.WAITING_FOR_GUESS
})

export const cleanAnswer = string =>
  string
    .trim()
    .replace(/('|"|\.)/g, '')
    .replace('university of', '')
    .trim()
    .toLowerCase()

export const getStatCopy = logoPack => {
  const copy = logoPack === 'ALL' ? 'All' : logoPack
  return `${copy} Logos`
}

export const createRgb = rgbArr => `rgb(${rgbArr})`

export const sortByAlpha = ([aKey], [bKey]) => {
  if (aKey > bKey) {
    return 1
  }
  if (aKey < bKey) {
    return -1
  }
  return 0
}

export const sortByTotal = ([aKey, aCount], [bKey, bCount]) => {
  // sort desc
  if (aCount > bCount) {
    return -1
  }
  if (aCount < bCount) {
    return 1
  }
  return 0
}

export const sortByPercentage = ([aKey, aCount], [bKey, bCount]) => {
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

export const getPercentage = ({ amount, total }) =>
  `${Math.round((amount / total) * 100)}%`
