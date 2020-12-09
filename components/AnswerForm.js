import { useState } from 'react'
import Button from './Button'

const AnswerForm = ({
  onNextLogo,
  hasMoreLogos,
  logo,
  setCorrectGuess,
  setIncorrectGuess,
  hasGuessed,
  setGameFinal,
  startNewGame
}) => {
  const [answer, setAnswer] = useState('')
  const clearAnswer = () => setAnswer('')
  const onSubmit = () => {
    const finalAnswer = answer.trim().replace(/\./g, '').toLowerCase()
    const setAnswer = logo.allowedAnswers.includes(finalAnswer)
      ? setCorrectGuess
      : setIncorrectGuess
    setAnswer()
  }

  const getNextStep = () => {
    if (!hasMoreLogos && hasGuessed) {
      return
    }

    if (!hasMoreLogos) {
      return {
        onClick: setGameFinal,
        copy: 'End Game'
      }
    }

    return {
      onClick: () => {
        onNextLogo()
        clearAnswer()
      },
      copy: hasGuessed ? 'Next Logo' : 'Skip Logo'
    }
  }

  const nextStepLogic = getNextStep()

  return (
    <>
      <div className='flex flex-col sm:flex-row mt-1 relative w-4/5 my-1 mx-auto mt-4'>
        <input
          type='text'
          className='focus:ring-indigo-200 focus:border-indigo-200 block w-full px-4 sm:text-sm border-gray-300 rounded-md mb-4 sm:mb-0 sm:mx-4'
          value={answer}
          onChange={ev => setAnswer(ev.target.value)}
          readOnly={hasGuessed}
        />
        <Button
          disabled={hasGuessed || !answer}
          onClick={onSubmit}
          modifier='green'
        >
          Submit
        </Button>
      </div>
      <div className='mt-8 mb-2 flex flex-col'>
        {hasMoreLogos || !hasGuessed ? (
          <Button
            onClick={nextStepLogic.onClick}
            modifier='blue'
            className='mb-4'
          >
            {nextStepLogic.copy}
          </Button>
        ) : (
          <Button modifier='blue' onClick={setGameFinal} className='mb-4'>
            See final stats!
          </Button>
        )}
        <Button modifier='yellow' onClick={startNewGame}>
          Start new game
        </Button>
      </div>
    </>
  )
}

export default AnswerForm
