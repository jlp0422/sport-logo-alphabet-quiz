import { useState } from 'react'
import { cleanAnswer } from '../helpers/index'
import Button from './shared/Button'

const AnswerForm = ({
  onNextLogo,
  remainingLogos,
  logo,
  setCorrectGuess,
  setIncorrectGuess,
  hasGuessed,
  setGameFinal
}) => {
  const numLogosRemaining = remainingLogos.length
  const hasLogosRemaining = numLogosRemaining > 0
  const [answer, setAnswer] = useState('')
  const [showHint, setShowHint] = useState(false)

  const onSubmit = () => {
    const finalAnswer = cleanAnswer(answer)
    const isCorrect = logo.allowedAnswers.some(answer =>
      finalAnswer.includes(answer)
    )
    const setGuessAccuracy = isCorrect ? setCorrectGuess : setIncorrectGuess
    setGuessAccuracy()
  }

  const nextAndClear = () => {
    onNextLogo()
    setAnswer('')
    setShowHint(false)
  }

  const renderHint = isHint => {
    if (isHint) {
      return (
        <h2 className='px-4 py-2 text-sm font-bold text-white'>
          League: {logo.league.toUpperCase()}
        </h2>
      )
    }
    return (
      <Button
        modifier='slate'
        className='text-sm'
        onClick={() => setShowHint(true)}
      >
        Show hint
      </Button>
    )
  }

  const getNextLogic = () => {
    if (hasGuessed && !hasLogosRemaining) {
      return [setGameFinal, 'green', 'See final stats']
    }
    if (hasGuessed) {
      return [nextAndClear, 'blue', 'Next logo']
    }
    return [onSubmit, 'green', 'Submit']
  }

  const [onSubmitOrNext, modifier, copy] = getNextLogic()

  return (
    <>
      <form
        onSubmit={ev => {
          ev.preventDefault()
          onSubmitOrNext()
        }}
        className='relative flex flex-col w-4/5 max-w-2xl mx-auto my-1 mt-1 mt-4 sm:flex-row'
      >
        <input
          type='text'
          placeholder='Whose logo is this?'
          className='block w-full px-4 mb-4 border-gray-300 rounded-md focus:ring-indigo-200 focus:border-indigo-200 sm:w-4/5 sm:text-sm sm:mb-0 sm:mx-4'
          value={answer}
          onChange={ev => setAnswer(ev.target.value)}
          readOnly={hasGuessed}
        />
        <Button
          disabled={!answer}
          modifier={modifier}
          className='flex-grow flex-shrink-0'
        >
          {copy}
        </Button>
      </form>
      <div className='h-8 mt-2'>{renderHint(showHint)}</div>
      <div className='flex flex-col mt-8 mb-2 lg:flex-row lg:w-4/5 lg:justify-evenly'>
        {hasLogosRemaining && (
          <Button
            onClick={nextAndClear}
            modifier='blue'
            disabled={hasGuessed}
            className='mb-4 lg:mb-0 lg:order-1'
          >
            {`Skip Logo (${numLogosRemaining} left)`}
          </Button>
        )}
        <Button
          modifier='yellow'
          disabled={hasGuessed && !hasLogosRemaining}
          onClick={setGameFinal}
          className='lg:order-0'
        >
          End game
        </Button>
      </div>
    </>
  )
}

export default AnswerForm
