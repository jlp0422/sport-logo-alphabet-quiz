const createReducerAndState = statuses => {
  const initialState = {
    correctGuesses: 0,
    activeLogo: {},
    remainingLogos: [],
    usedLogos: [],
    logoPack: null,
    status: statuses.NOT_STARTED
  }
  return {
    reducer: (state, action) => {
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
            status: statuses.CORRECT_GUESS
          }
        case 'INCORRECT_GUESS':
          return { ...state, status: statuses.INCORRECT_GUESS }
        case 'RESET_GAME':
          return initialState
        case 'GAME_OVER':
          return { ...state, status: statuses.GAME_OVER }
        case 'START_GAME':
          return { ...state, status: statuses.WAITING_FOR_GUESS }
        case 'SET_ACTIVE_LOGO':
          return {
            ...state,
            status: statuses.WAITING_FOR_GUESS,
            activeLogo: action.activeLogo,
            remainingLogos: state.remainingLogos.filter(
              logo => logo.filename !== action.activeLogo.filename
            )
          }
        default:
          throw new Error()
      }
    },
    initialState
  }
}

export default createReducerAndState
