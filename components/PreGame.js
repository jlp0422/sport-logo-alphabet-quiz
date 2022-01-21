import Link from 'next/link'
import Button, { ButtonWithRef } from './shared/Button'
import CardHeader from './shared/CardHeader'
import DisplayCard from './shared/DisplayCard'

const PreGame = ({
  onSelectLogos,
  sportLogos,
  hasSelectedSport,
  setIsTimedMode,
  isTimedMode,
  onStartGame
}) => {
  return (
    <DisplayCard borderColor='green'>
      <CardHeader element='h2' className='pb-2'>
        <label htmlFor='logo-selection'>Select your Logo&nbsp;Pack</label>
      </CardHeader>
      <select
        onChange={onSelectLogos}
        id='logo-selection'
        name='logo-selection'
        defaultValue='0'
        className='block w-full mt-1 rounded-md focus:border-green-700 focus:ring-green-700 form-select'
      >
        <option value='0' disabled>
          Select...
        </option>
        {sportLogos.map(sport => (
          <option key={sport} value={sport}>
            {sport}
          </option>
        ))}
      </select>
      <div>
        <label>
          <h3>Timed mode</h3>
          <input
            type='checkbox'
            onChange={() => setIsTimedMode(timedMode => !timedMode)}
            checked={isTimedMode}
          />
        </label>
      </div>
      <Button
        disabled={!hasSelectedSport}
        onClick={onStartGame}
        modifier='green'
        className='mt-4'
      >
        Start game!
      </Button>
      <Link href='/high-scores' passHref>
        <ButtonWithRef modifier='blue'>See high scores</ButtonWithRef>
      </Link>
    </DisplayCard>
  )
}

export default PreGame
