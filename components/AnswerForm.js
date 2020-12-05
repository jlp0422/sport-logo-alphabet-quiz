import { useState } from 'react'
import styles from '../styles/AnswerForm.module.css'
import Button from '../components/Button'

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
      <input
        type='text'
        className={styles.input}
        value={answer}
        onChange={ev => setAnswer(ev.target.value)}
        readOnly={hasGuessed}
      />
      <Button disabled={hasGuessed || !answer} onClick={onSubmit} modifier='blue'>
        Submit
      </Button>
      <Button disabled={hasGuessed} onClick={clearAnswer} modifier='gray'>
        Clear
      </Button>
      {hasMoreLogos || !hasGuessed ? (
        <Button
          disabled={!hasMoreLogos}
          onClick={() => {
            onNextLogo()
            clearAnswer()
          }}
          modifier='blue'
        >
          Next Logo
        </Button>
      ) : (
        <Button modifier='blue' onClick={setGameFinal}>
          See final stats!
        </Button>
      )}
      <Button modifier='yellow' onClick={startNewGame}>
        Start new game
      </Button>
    </>
  )
}

export default AnswerForm
