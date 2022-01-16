import { createAhlTeam, createNhlTeam, createWhaTeam } from '../helpers'

const coloradoAvalanche = createNhlTeam({
  title: 'Colorado Avalanche',
  letters: ['A'],
  answers: ['colorado', 'avalanche']
})

const bostonBruins = createNhlTeam({
  title: 'Boston Bruins',
  letters: ['B'],
  answers: ['boston', 'bruins']
})

const clagaryFlames = createNhlTeam({
  title: 'Calgary Flames',
  letters: ['C'],
  answers: ['calgary', 'flames']
})

const montrealCanadiens = createNhlTeam({
  title: 'Montreal Canadiens',
  letters: ['C'],
  answers: ['montreal', 'canadiens', 'habs']
})

const anaheimDucks = createNhlTeam({
  title: 'Anaheim Ducks',
  letters: ['D'],
  answers: ['anaheim', 'ducks']
})

const dallasStars = createNhlTeam({
  title: 'Dallas Stars',
  letters: ['D'],
  answers: ['dallas', 'stars']
})

const seattleKraken = createNhlTeam({
  title: 'Seattle Kraken',
  letters: ['S'],
  answers: ['seattle', 'kraken']
})

const vegasGoldenKnights = createNhlTeam({
  title: 'Vegas Golden Knights',
  letters: ['V'],
  answers: ['vegas', 'golden knights']
})

const vancouverCanucks = createNhlTeam({
  title: 'Vancouver Canucks',
  letters: ['C'],
  answers: ['vancouver', 'canucks']
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
  answers: ['belleville', 'senators']
})

const stocktonHeat = createAhlTeam({
  title: 'Stockton Heat',
  letters: ['S'],
  answers: ['stockton', 'heat']
})

const hendersonSilverKnights = createAhlTeam({
  title: 'Henderson Silver Knights',
  letters: ['H'],
  answers: ['henderson', 'silver knights']
})

const uticaComets = createAhlTeam({
  title: 'Utica Comets',
  letters: ['U'],
  answers: ['utica', 'comets']
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
  answers: ['baltimore', 'blades']
})

const hartfordWhalers = createWhaTeam({
  title: 'Hartford Whalers',
  letters: ['W'],
  answers: ['hartford', 'whalers']
})

const quebecNordiques = createWhaTeam({
  title: 'Quebec Nordiques',
  letters: ['N'],
  answers: ['quebec', 'nordiques']
})

const cincinnatiStingers = createWhaTeam({
  title: 'Cincinnati Stingers',
  letters: ['C'],
  answers: ['cincinnati', 'stingers']
})

const jerseyKnights = createWhaTeam({
  title: 'Jersey Knights',
  letters: ['K'],
  answers: ['jersey', 'knights']
})

export const WHA_LOGOS = [
  baltimoreBlades,
  hartfordWhalers,
  quebecNordiques,
  cincinnatiStingers,
  jerseyKnights
]
