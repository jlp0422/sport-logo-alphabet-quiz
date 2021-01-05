import { useRef, useState } from 'react'
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
  // const inputRef = useRef(null)
  const numLogosRemaining = remainingLogos.length
  const hasLogosRemaining = numLogosRemaining > 0
  const [answer, setAnswer] = useState('')
  const clearAnswer = () => {
    setAnswer('')
    // inputRef.current.focus()
  }
  const onSubmit = () => {
    const finalAnswer = answer.trim().replace(/\./g, '').toLowerCase()
    const setAnswer = logo.allowedAnswers.includes(finalAnswer)
      ? setCorrectGuess
      : setIncorrectGuess
    setAnswer()
  }

  const nextAndClear = () => {
    onNextLogo()
    clearAnswer()
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
      <div className='flex flex-col sm:flex-row mt-1 relative w-4/5 max-w-2xl my-1 mx-auto mt-4'>
        <input
          // ref={inputRef}
          // autoFocus
          type='text'
          placeholder='Whose logo is this?'
          className='focus:ring-indigo-200 focus:border-indigo-200 block w-full sm:w-4/5 px-4 sm:text-sm border-gray-300 rounded-md mb-4 sm:mb-0 sm:mx-4'
          value={answer}
          onChange={ev => setAnswer(ev.target.value)}
          readOnly={hasGuessed}
        />
        <Button
          disabled={!answer}
          onClick={onSubmitOrNext}
          modifier={modifier}
          className='flex-shrink-0 flex-grow'
        >
          {copy}
        </Button>
      </div>
      <div className='mt-8 mb-2 flex flex-col lg:flex-row lg:w-4/5 lg:justify-evenly'>
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
