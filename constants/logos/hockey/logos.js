import { createAhlTeam, createNhlTeam, createWhaTeam } from '../helpers'

const coloradoAvalanche = createNhlTeam({
  title: 'Colorado Avalanche',
  letters: ['A'],
  answers: ['colorado', 'avalanche', 'colorado avalanche']
})

const bostonBruins = createNhlTeam({
  title: 'Boston Bruins',
  letters: ['B'],
  answers: ['boston', 'bruins', 'boston bruins']
})

const clagaryFlames = createNhlTeam({
  title: 'Calgary Flames',
  letters: ['C'],
  answers: ['calgary', 'flames', 'calgary flames']
})

const montrealCanadiens = createNhlTeam({
  title: 'Montreal Canadiens',
  letters: ['C'],
  answers: ['montreal', 'canadiens', 'montreal canadiens', 'habs']
})

const anaheimDucks = createNhlTeam({
  title: 'Anaheim Ducks',
  letters: ['D'],
  answers: ['anaheim', 'ducks', 'anaheim ducks']
})

const dallasStars = createNhlTeam({
  title: 'Dallas Stars',
  letters: ['D'],
  answers: ['dallas', 'stars', 'dallas stars']
})

const seattleKraken = createNhlTeam({
  title: 'Seattle Kraken',
  letters: ['S'],
  answers: ['seattle', 'kraken', 'seattle kraken']
})

const vegasGoldenKnights = createNhlTeam({
  title: 'Vegas Golden Knights',
  letters: ['V'],
  answers: ['vegas', 'golden knights', 'vegas golden knights']
})

const vancouverCanucks = createNhlTeam({
  title: 'Vancouver Canucks',
  letters: ['C'],
  answers: ['vancouver', 'canucks', 'vancouver canucks']
})

export const NHL_LOGOS = [
  coloradoAvalanche,
  bostonBruins,
  clagaryFlames,
  montrealCanadiens,
  anaheimDucks,
  dallasStars,
  seattleKraken,
  vegasGoldenKnights,
  vancouverCanucks
]

const bellevilleSenators = createAhlTeam({
  title: 'Belleville Senators',
  letters: ['B'],
  answers: ['belleville', 'senators', 'belleville senators']
})

const stocktonHeat = createAhlTeam({
  title: 'Stockton Heat',
  letters: ['S'],
  answers: ['stockton', 'heat', 'stockton heat']
})

const hendersonSilverKnights = createAhlTeam({
  title: 'Henderson Silver Knights',
  letters: ['H'],
  answers: ['henderson', 'silver knights', 'henderson silver knights']
})

const uticaComets = createAhlTeam({
  title: 'Utica Comets',
  answers: ['utica', 'comets', 'utica comets'],
  letters: ['U']
})

export const AHL_LOGOS = [
  bellevilleSenators,
  stocktonHeat,
  hendersonSilverKnights,
  uticaComets
]

const baltimoreBlades = createWhaTeam({
  title: 'Baltimore Blades',
  letters: ['B'],
  answers: ['baltimore', 'blades', 'baltimore blades']
})

const hartfordWhalers = createWhaTeam({
  title: 'Hartford Whalers',
  letters: ['W'],
  answers: ['hartford', 'whalers', 'hartford whalers']
})

const quebecNordiques = createWhaTeam({
  title: 'Quebec Nordiques',
  letters: ['N'],
  answers: ['quebec', 'nordiques', 'quebec nordiques']
})

const cincinnatiStingers = createWhaTeam({
  title: 'Cincinnati Stingers',
  letters: ['C'],
  answers: ['cincinnati', 'stingers', 'cincinnati stingers']
})

const jerseyKnights = createWhaTeam({
  title: 'Jersey Knights',
  letters: ['K'],
  answers: ['jersey', 'knights', 'jersey knights']
})

export const WHA_LOGOS = [
  baltimoreBlades,
  hartfordWhalers,
  quebecNordiques,
  cincinnatiStingers,
  jerseyKnights
]
