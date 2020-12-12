import Head from 'next/head'
import { useReducer } from 'react'
import AnswerForm from '../components/AnswerForm'
import GameOver from '../components/GameOver'
import LogoDisplay from '../components/shared/LogoDisplay'
import PreGame from '../components/PreGame'
import GuessResult from '../components/shared/GuessResult'
import * as actions from '../constants/actions'
import { STATUSES, HAS_GUESSED_STATUSES } from '../constants/gameProgress'
import { LOGOS_BY_TYPE } from '../constants/logos'
import createReducerAndState from '../constants/reducer'
import {
  getLogoCopy,
  getRandomLogo,
  updateScoreInStorage,
  getCurrentGameStatus
} from '../helpers'

function Home() {
  const { reducer, initialState } = createReducerAndState(STATUSES)
  const [state, dispatch] = useReducer(reducer, initialState)
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

  return (
    <div className='mx-auto flex flex-col justify-center items-center min-h-screen bg-green-200'>
      <Head>
        <title>Sport Logo Alphabet Quiz</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>

      <main className='flex flex-col justify-center items-center flex-1 py:4 sm:py-4 w-90vw sm:w-80vw'>
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

      <footer className='w-full h-12 flex justify-center items-center text-gray-600 border-t border-solid border-green-500'>
        Built by Jeremy Philipson
      </footer>
    </div>
  )
}

export default Home
