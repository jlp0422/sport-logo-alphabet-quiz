import { useReducer } from 'react'
import Head from 'next/head'
import Logo from '../components/Logo'
import Button from '../components/Button'
import AnswerForm from '../components/AnswerForm'
// import styles from '../styles/Home.module.css'
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
  status: STATUSES.NOT_STARTED
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOGOS':
      return {
        ...state,
        remainingLogos: action.payload
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

  const onSelectLogos = ev =>
    dispatch({
      type: 'SET_LOGOS',
      payload: logosBySport[ev.target.value]
    })

  const onStartGame = () => {
    dispatch({ type: 'START_GAME' })
    setActiveLogo()
  }

  const setCorrectGuess = () => dispatch({ type: 'CORRECT_GUESS' })
  const setIncorrectGuess = () => dispatch({ type: 'INCORRECT_GUESS' })
  const restartGame = () => dispatch({ type: 'RESET_GAME' })
  const setGameFinal = () => dispatch({ type: 'GAME_OVER' })

  return (
    <div className="container mx-auto">
      <Head>
        <title>Sport Logo Alphabet Quiz</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>

      <main className="main">
        {state.status === STATUSES.NOT_STARTED && (
          <div className="start">
            <label htmlFor='logo-selection'>
              Select which logos you want to use:
            </label>
            <select
              onChange={onSelectLogos}
              id='logo-selection'
              name='logo-selection'
              defaultValue='0'
            >
              <option value='0' disabled>
                Select...
              </option>
              {Object.keys(logosBySport).map(sport => (
                <option key={sport} value={sport}>
                  {sport}
                </option>
              ))}
            </select>
            <Button
              disabled={!state.remainingLogos.length}
              onClick={onStartGame}
            >
              Start game!
            </Button>
          </div>
        )}

        {state.status === STATUSES.GAME_OVER && (
          <div>
            <h2>final stats:</h2>
            <h4>correct guesses: {state.correctGuesses}</h4>
            <Button onClick={restartGame}>start new game!</Button>
          </div>
        )}

        {GAME_IN_PROGRESS_STATUSES.includes(state.status) && (
          <>
            <h1 className="title">Guess the team by letter:</h1>

            <div className="grid">
              {state.status === STATUSES.CORRECT_GUESS && (
                <h2>You guessed correct! {getLogoCopy(state.activeLogo)}</h2>
              )}
              {state.status === STATUSES.INCORRECT_GUESS && (
                <h2>
                  Nope, that's not correct! {getLogoCopy(state.activeLogo)}
                </h2>
              )}
              <div className="logo">
                <Logo
                  logo={state.activeLogo}
                  isWaitingForGuess={state.status === WAITING_FOR_GUESS}
                />
              </div>
            </div>
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

      <footer className="footer">Built by Jeremy Philipson</footer>
    </div>
  )
}

export default Home
