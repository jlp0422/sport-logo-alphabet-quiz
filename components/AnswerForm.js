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
  return (
    <>
      <div className='mt-1 relative rounded-md shadow-sm w-4/5 my-1 mx-auto'>
        <input
          type='text'
          className='focus:ring-indigo-200 focus:border-indigo-200 block w-full px-4 sm:text-sm border-gray-300 rounded-md'
          value={answer}
          onChange={ev => setAnswer(ev.target.value)}
          readOnly={hasGuessed}
        />
      </div>
      <div className='mt-4 mb-2 flex justify-between w-52'>
        <Button
          disabled={hasGuessed || !answer}
          onClick={onSubmit}
          modifier='green'
        >
          Submit
        </Button>
        <Button disabled={hasGuessed} onClick={clearAnswer} modifier='gray'>
          Clear
        </Button>
      </div>
      <div className='my-1 flex flex-col justify-between w-52'>
        {hasMoreLogos || !hasGuessed ? (
          <Button
            disabled={!hasMoreLogos}
            onClick={() => {
              onNextLogo()
              clearAnswer()
            }}
            modifier='blue'
            className="my-2"
          >
            Next Logo
          </Button>
        ) : (
          <Button modifier='blue' onClick={setGameFinal} className="my-2">
            See final stats!
          </Button>
        )}
        <Button modifier='yellow' onClick={startNewGame} className="my-2">
          Start new game
        </Button>
      </div>
    </>
  )
}

export default AnswerForm
