const LOCAL_STORAGE_KEY = 'SPORT_LOGO_ALPHABET_HIGH_SCORE'

export const getScoresFromStorage = () => {
  const rawStorage = window.localStorage.getItem(LOCAL_STORAGE_KEY) || '{}'
  let parsedStorage

  try {
    parsedStorage = JSON.parse(rawStorage)
  } catch (e) {
    parsedStorage = {}
  }

  return parsedStorage
}

export const updateScoreInStorage = ({ logoPack, correctGuesses }) => {
  const scores = getScoresFromStorage()
  const prevHighScoreForSport = scores[logoPack] || 0

  const newHighScoreForSport = Math.max(prevHighScoreForSport, correctGuesses)
  const updatedScoresForStorage = {
    ...scores,
    [logoPack]: newHighScoreForSport
  }

  window.localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify(updatedScoresForStorage)
  )
}

export const getScoreForSportFromStorage = logoPack => {
  const scores = getScoresFromStorage()
  return scores[logoPack] || 0
}

export const getRandomLogo = logos => {
  if (!logos.length) {
    return {}
  }
  const randomIndex = Math.floor(Math.random() * logos.length)
  return logos[randomIndex]
}

export const getCurrentGameStatus = (currentStatus, allStatuses) => ({
  isGameNotStarted: currentStatus === allStatuses.NOT_STARTED,
  isGameOver: currentStatus === allStatuses.GAME_OVER,
  isCorrectGuess: currentStatus === allStatuses.CORRECT_GUESS,
  isIncorrectGuess: currentStatus === allStatuses.INCORRECT_GUESS,
  isWaitingForGuess: currentStatus === allStatuses.WAITING_FOR_GUESS
})

export const getStatCopy = logoPack => {
  const copy = logoPack === 'ALL' ? 'All' : logoPack
  return `${copy} Logos`
}
