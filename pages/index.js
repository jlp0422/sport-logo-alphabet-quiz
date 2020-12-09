import { useReducer } from 'react'
import Head from 'next/head'
import AnswerForm from '../components/AnswerForm'
import GameOver from '../components/GameOver'
import PreGame from '../components/PreGame'
import InProgressGame from '../components/InProgressGame'
import { getScoreForSportFromStorage, updateScoreInStorage } from '../helpers'
import { MLB_LOGOS, NBA_LOGOS } from '../constants'

const NOT_STARTED = 'NOT_STARTED'
const WAITING_FOR_GUESS = 'WAITING_FOR_GUESS'
const CORRECT_GUESS = 'CORRECT_GUESS'
const INCORRECT_GUESS = 'INCORRECT_GUESS'
const GAME_OVER = 'GAME_OVER'

const GAME_IN_PROGRESS_STATUSES = [
  WAITING_FOR_GUESS,
  CORRECT_GUESS,
  INCORRECT_GUESS
]

const STATUSES = {
  NOT_STARTED,
  WAITING_FOR_GUESS,
  CORRECT_GUESS,
  INCORRECT_GUESS,
  GAME_OVER
}

const logosBySport = {
  ALL: [...MLB_LOGOS, ...NBA_LOGOS],
  MLB: MLB_LOGOS,
  NBA: NBA_LOGOS
}

const initialState = {
  correctGuesses: 0,
  activeLogo: {},
  remainingLogos: [],
  usedLogos: [],
  logoPack: null,
  status: STATUSES.NOT_STARTED
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOGOS':
      return {
        ...state,
        remainingLogos: action.payload.logos,
        logoPack: action.payload.logoPack
      }
    case 'CORRECT_GUESS':
      return {
        ...state,
        correctGuesses: state.correctGuesses + 1,
        status: STATUSES.CORRECT_GUESS
      }
    case 'INCORRECT_GUESS':
      return { ...state, status: STATUSES.INCORRECT_GUESS }
    case 'RESET_GAME':
      return initialState
    case 'GAME_OVER':
      return { ...state, status: STATUSES.GAME_OVER }
    case 'START_GAME':
      return { ...state, status: STATUSES.WAITING_FOR_GUESS }
    case 'SET_ACTIVE_LOGO':
      return {
        ...state,
        status: STATUSES.WAITING_FOR_GUESS,
        activeLogo: action.activeLogo,
        remainingLogos: state.remainingLogos.filter(
          logo => logo.filename !== action.activeLogo.filename
        )
      }
    default:
      throw new Error()
  }
}

const getLogoCopy = logo => `${logo.letters[0]} is for ${logo.title}.`

const getRandomLogo = logos => {
  if (!logos.length) {
    return {}
  }
  const randomIndex = Math.floor(Math.random() * logos.length)
  return logos[randomIndex]
}

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const setActiveLogo = () =>
    dispatch({
      type: 'SET_ACTIVE_LOGO',
      activeLogo: getRandomLogo(state.remainingLogos)
    })

  const onSelectLogos = ev => {
    const key = ev.target.value
    dispatch({
      type: 'SET_LOGOS',
      payload: {
        logos: logosBySport[key],
        logoPack: key
      }
    })
  }

  const onStartGame = () => {
    dispatch({ type: 'START_GAME' })
    setActiveLogo()
  }

  const getHighScore = () => {
    const highScore = getScoreForSportFromStorage(state.logoPack)
    return highScore
  }

  const setCorrectGuess = () => dispatch({ type: 'CORRECT_GUESS' })
  const setIncorrectGuess = () => dispatch({ type: 'INCORRECT_GUESS' })
  const restartGame = () => dispatch({ type: 'RESET_GAME' })
  const setGameFinal = () => {
    updateScoreInStorage(state)
    dispatch({ type: 'GAME_OVER' })
  }

  return (
    <div className='mx-auto flex flex-col justify-center items-center min-h-screen bg-green-200'>
      <Head>
        <title>Sport Logo Alphabet Quiz</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>

      <main className='flex flex-col justify-center items-center flex-1 py:4 sm:py-4 w-90vw sm:w-80vw'>
        {state.status === STATUSES.NOT_STARTED && (
          <PreGame
            onSelectLogos={onSelectLogos}
            sportLogos={Object.keys(logosBySport)}
            onStartGame={onStartGame}
            hasSelectedSport={state.remainingLogos.length}
          />
        )}

        {state.status === STATUSES.GAME_OVER && (
          <GameOver
            correctGuesses={state.correctGuesses}
            restartGame={restartGame}
            highScore={getHighScore()}
            logoPack={state.logoPack}
          />
        )}

        {GAME_IN_PROGRESS_STATUSES.includes(state.status) && (
          <>
            <InProgressGame
              isCorrectGuess={state.status === STATUSES.CORRECT_GUESS}
              isIncorrectGuess={state.status === STATUSES.INCORRECT_GUESS}
              isWaitingForGuess={state.status === WAITING_FOR_GUESS}
              postGuessCopy={getLogoCopy(state.activeLogo)}
              activeLogo={state.activeLogo}
            />
            <AnswerForm
              onNextLogo={setActiveLogo}
              logo={state.activeLogo}
              hasMoreLogos={state.remainingLogos.length}
              setCorrectGuess={setCorrectGuess}
              setIncorrectGuess={setIncorrectGuess}
              hasGuessed={[CORRECT_GUESS, INCORRECT_GUESS].includes(
                state.status
              )}
              setGameFinal={setGameFinal}
              startNewGame={restartGame}
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
