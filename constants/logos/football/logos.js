import {
  createNflTeam,
  createXflTeam,
  createAflTeam
  // createCflTeam,
  // createAafTeam,
  // createUsflTeam
} from '../helpers'

const Afc = createNflTeam({
  title: 'AFC',
  letters: ['A'],
  answers: ['afc']
})

const Nfc = createNflTeam({
  title: 'NFC',
  letters: ['N'],
  answers: ['nfc']
})

const chicagoCardinals = createNflTeam({
  title: 'Chicago Cardinals',
  letters: ['C'],
  answers: ['chicago', 'cardinals']
})

const chicagoBears = createNflTeam({
  title: 'Chicago Bears',
  letters: ['C'],
  answers: ['bears', 'chicago', 'da bears']
})

const cincinnatiBengals = createNflTeam({
  title: 'Cincinnati Bengals',
  letters: ['B'],
  answers: ['cincinnati', 'bengals']
})

const baltimoreRavens = createNflTeam({
  title: 'Baltimore Ravens',
  letters: ['B'],
  answers: ['baltimore', 'ravens']
})

const denverBroncos = createNflTeam({
  title: 'Denver Broncos',
  letters: ['D'],
  answers: ['denver', 'broncos']
})

const greenBayPackers = createNflTeam({
  title: 'Green Bay Packers',
  letters: ['G'],
  answers: ['packers', 'green bay']
})

const stLouisRams = createNflTeam({
  title: 'St Louis Rams',
  letters: ['R'],
  answers: ['rams', 'st louis']
})

const tennesseeTitans = createNflTeam({
  title: 'Tennessee Titans',
  letters: ['T'],
  answers: ['titans', 'tennessee']
})

const washingtonFootballTeam = createNflTeam({
  title: 'Washington Football Team',
  letters: ['W'],
  answers: ['washington', 'football team']
})

export const NFL_LOGOS = [
  Afc,
  Nfc,
  chicagoBears,
  denverBroncos,
  greenBayPackers,
  tennesseeTitans,
  cincinnatiBengals,
  baltimoreRavens,
  stLouisRams,
  washingtonFootballTeam,
  chicagoCardinals
]

const birminghamThunderbolts = createXflTeam({
  title: 'Birmingham Thunderbolts',
  letters: ['B'],
  answers: ['birmingham', 'thunderbolts']
})

const newYorkHitmen = createXflTeam({
  title: 'New York Hitmen',
  letters: ['H'],
  answers: ['new york', 'new jersey', 'hitmen', 'new york/new jersey hitmen']
})

const tampaBayVipers = createXflTeam({
  title: 'Tampa Bay Vipers',
  letters: ['V'],
  answers: ['tampa bay', 'tampa', 'vipers']
})

export const XFL_LOGOS = [birminghamThunderbolts, newYorkHitmen, tampaBayVipers]

const baltimoreBrigade = createAflTeam({
  title: 'Baltimore Brigade',
  letters: ['B'],
  answers: ['baltimore', 'brigade']
})

const arizonaRattlers = createAflTeam({
  title: 'Arizona Rattlers',
  letters: ['R'],
  answers: ['arizona', 'rattlers']
})

const coloradoCrush = createAflTeam({
  title: 'Colorado Crush',
  letters: ['C'],
  answers: ['colorado', 'crush']
})

const memphisPharaohs = createAflTeam({
  title: 'Memphis Pharaohs',
  letters: ['P'],
  answers: ['memphis', 'pharaohs']
})

const orlandoPredators = createAflTeam({
  title: 'Orlando Predators',
  letters: ['P'],
  answers: ['orlando', 'predators']
})

const spokaneShock = createAflTeam({
  title: 'Spokane Shock',
  letters: ['S'],
  answers: ['spokane', 'shock']
})

const newJerseyGladiators = createAflTeam({
  title: 'New Jersey Gladiators',
  letters: ['G'],
  answers: ['new jersey', 'gladiators']
})

export const AFL_LOGOS = [
  baltimoreBrigade,
  arizonaRattlers,
  coloradoCrush,
  memphisPharaohs,
  orlandoPredators,
  spokaneShock,
  newJerseyGladiators
]

/*
A: AFC
B:
C:
D:
E: eskimos (CFL), express (AAF)
F:
G: gamblers (USFL)
H:
I: iron (AAF)
J:
K:
L:
M:
N: NFC
O: apollos (AAF)
P:
Q:
R: , redblacks (CFL)
S: roughriders (CFL)
T:
U:
V:
W:
X:
Y:
Z:
*/
