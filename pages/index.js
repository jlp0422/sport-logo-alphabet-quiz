import Head from 'next/head'
import { useReducer, useState } from 'react'
import AnswerForm from '../components/AnswerForm'
import GameOver from '../components/GameOver'
import PreGame from '../components/PreGame'
import GuessResult from '../components/shared/GuessResult'
import LogoDisplay from '../components/shared/LogoDisplay'
import * as actions from '../constants/actions'
import { HAS_GUESSED_STATUSES, STATUSES } from '../constants/gameProgress'
import { LOGOS_BY_TYPE } from '../constants/logos'
import createReducerAndState from '../constants/reducer'
import {
  createRgb,
  getCurrentGameStatus,
  getRandomLogo,
  updateScoreInStorage
} from '../helpers'

function Home() {
  const { reducer, initialState } = createReducerAndState(STATUSES)
  const [state, dispatch] = useReducer(reducer, initialState)
  const [palette, setPalette] = useState([[], [], []])
  const { remainingLogos, activeLogo, correctGuesses, logoPack, status } = state
  const setActiveLogo = () =>
    dispatch({
      ...actions.SET_ACTIVE_LOGO,
      activeLogo: getRandomLogo(remainingLogos)
    })

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
  }

  const setCorrectGuess = () => dispatch(actions.CORRECT_GUESS)
  const setIncorrectGuess = () => dispatch(actions.INCORRECT_GUESS)
  const restartGame = () => dispatch(actions.RESET_GAME)
  const setGameFinal = () => {
    updateScoreInStorage(state)
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
    <div
      className='mx-auto flex flex-col justify-center items-center min-h-screen bg-green-900'
      style={{ backgroundColor: primaryColor }}
    >
      <Head>
        <title>Sport Logo Alphabet Quiz</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>

      <main className='flex flex-col justify-evenly xs:justify-center items-center flex-1 py:4 sm:py-4 w-90vw sm:w-80vw'>
        {isGameNotStarted && (
          <PreGame
            onSelectLogos={onSelectLogos}
            sportLogos={Object.keys(LOGOS_BY_TYPE)}
            onStartGame={onStartGame}
            hasSelectedSport={remainingLogos.length}
          />
        )}

        {isGameOver && (
          <GameOver
            correctGuesses={correctGuesses}
            restartGame={restartGame}
            logoPack={logoPack}
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
      </main>

      <footer
        className='w-full h-12 flex justify-center items-center border-t border-solid border-gray-400 text-gray-400 bg-green-900'
        style={{
          backgroundColor: secondaryColor,
          color: primaryColor,
          borderColor: tertiaryColor
        }}
      >
        Built by Jeremy Philipson
      </footer>
    </div>
  )
}

export default Home
