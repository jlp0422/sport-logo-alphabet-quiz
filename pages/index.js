import { useReducer, useState } from 'react'
import AnswerForm from '../components/AnswerForm'
import GameOver from '../components/GameOver'
import PreGame from '../components/PreGame'
import GuessResult from '../components/shared/GuessResult'
import Layout from '../components/shared/Layout'
import LogoDisplay from '../components/shared/LogoDisplay'
import * as actions from '../constants/actions'
import { HAS_GUESSED_STATUSES, STATUSES } from '../constants/gameProgress'
import { LOGOS_BY_TYPE } from '../constants/logos'
import createReducerAndState from '../constants/reducer'
import {
  createRgb,
  getCurrentGameStatus,
  getRandomLogo,
  getNextAlphabetLogo,
  updateScoreInStorage
} from '../helpers'

function Home() {
  const { reducer, initialState } = createReducerAndState(STATUSES)
  const [state, dispatch] = useReducer(reducer, initialState)
  const [palette, setPalette] = useState([[], [], []])
  const [isTimedMode, setIsTimedMode] = useState(false)
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)
  const { remainingLogos, activeLogo, correctGuesses, logoPack, status } = state

  const setActiveLogo = () => {
    const fn = logoPack === 'Alphabet' ? getNextAlphabetLogo : getRandomLogo
    dispatch({
      ...actions.SET_ACTIVE_LOGO,
      activeLogo: fn(remainingLogos)
    })
  }

  const onSelectLogos = ev => {
    const key = ev.target.value
    dispatch({
      ...actions.SET_LOGOS,
      payload: {
        logos: LOGOS_BY_TYPE[key],
        logoPack: key
      }
    })
  }

  const onStartGame = () => {
    dispatch(actions.START_GAME)
    setActiveLogo()
    if (isTimedMode) {
      setStartTime(new Date().getTime())
    }
  }

  const setCorrectGuess = () => dispatch(actions.CORRECT_GUESS)
  const setIncorrectGuess = () => dispatch(actions.INCORRECT_GUESS)

  const restartGame = () => {
    setStartTime(null)
    setEndTime(null)
    dispatch(actions.RESET_GAME)
  }

  const setGameFinal = () => {
    const gameEndTime = new Date().getTime()
    setEndTime(gameEndTime)
    updateScoreInStorage(state, { startTime, endTime: gameEndTime })
    dispatch(actions.GAME_OVER)
  }

  const {
    isGameNotStarted,
    isGameOver,
    isCorrectGuess,
    isIncorrectGuess,
    isWaitingForGuess
  } = getCurrentGameStatus(status, STATUSES)
  const isGameInProgress =
    isCorrectGuess || isIncorrectGuess || isWaitingForGuess

  const [primaryColor, secondaryColor, tertiaryColor] = palette.map(createRgb)

  return (
    <Layout
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      tertiaryColor={tertiaryColor}
    >
      <>
        {isGameNotStarted && (
          <PreGame
            onSelectLogos={onSelectLogos}
            sportLogos={Object.keys(LOGOS_BY_TYPE)}
            onStartGame={onStartGame}
            hasSelectedSport={remainingLogos.length}
            isTimedMode={isTimedMode}
            setIsTimedMode={setIsTimedMode}
          />
        )}

        {isGameOver && (
          <GameOver
            correctGuesses={correctGuesses}
            restartGame={restartGame}
            logoPack={logoPack}
            isTimedMode={isTimedMode}
            startTime={startTime}
            endTime={endTime}
          />
        )}

        {isGameInProgress && (
          <>
            <GuessResult
              isCorrectGuess={isCorrectGuess}
              isIncorrectGuess={isIncorrectGuess}
              activeLogo={activeLogo}
            />
            <LogoDisplay
              isWaitingForGuess={isWaitingForGuess}
              activeLogo={activeLogo}
              setPalette={setPalette}
              loadingDotColor={secondaryColor}
            />
            <AnswerForm
              onNextLogo={setActiveLogo}
              logo={activeLogo}
              remainingLogos={remainingLogos}
              setCorrectGuess={setCorrectGuess}
              setIncorrectGuess={setIncorrectGuess}
              hasGuessed={HAS_GUESSED_STATUSES.includes(status)}
              setGameFinal={setGameFinal}
            />
          </>
        )}
      </>
    </Layout>
  )
}

export default Home
