import Button from './Button'
import DisplayCard from './shared/DisplayCard'
import CardHeader from './shared/CardHeader'

const PreGame = ({
  onSelectLogos,
  sportLogos,
  hasSelectedSport,
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
        className='form-select mt-1 block w-full rounded-md'
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
      <Button
        disabled={!hasSelectedSport}
        onClick={onStartGame}
        modifier='green'
        className='mt-4'
      >
        Start game!
      </Button>
    </DisplayCard>
  )
}

export default PreGame
