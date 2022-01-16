import {
  createNflTeam,
  createXflTeam,
  createAflTeam,
  createCflTeam
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

const houstonRoughnecks = createXflTeam({
  title: 'Houston Roughnecks',
  letters: ['H'],
  answers: ['houston', 'roughnecks']
})

export const XFL_LOGOS = [
  birminghamThunderbolts,
  newYorkHitmen,
  tampaBayVipers,
  houstonRoughnecks
]

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

const edmontonEskimos = createCflTeam({
  title: 'Edmonton Eskimos',
  letters: ['E'],
  answers: ['edmonton', 'eskimos']
})

const montrealAlouettes = createCflTeam({
  title: 'Montreal Alouettes',
  letters: ['A'],
  answers: ['montreal', 'alouettes']
})

const ottawaRedblacks = createCflTeam({
  title: 'Ottawa Redblacks',
  letters: ['R'],
  answers: ['ottawa', 'redblacks']
})

const saskatchewanRoughriders = createCflTeam({
  title: 'Saskatchewan Roughriders',
  letters: ['S'],
  answers: ['saskatchewan', 'roughriders']
})

const winnipegBlueBombers = createCflTeam({
  title: 'Winnipeg Blue Bombers',
  letters: ['W'],
  answers: ['winnipeg', 'blue', 'bombers', 'bluebombers']
})

const torontoArgonauts = createCflTeam({
  title: 'Toronto Argonauts',
  letters: ['A'],
  answers: ['toronto', 'argonauts']
})

export const CFL_LOGOS = [
  edmontonEskimos,
  montrealAlouettes,
  ottawaRedblacks,
  saskatchewanRoughriders,
  winnipegBlueBombers,
  torontoArgonauts
]

/*
A:
B:
C:
D:
E: express (AAF)
F:
G: gamblers (USFL)
H:
I: iron (AAF)
J:
K:
L:
M:
N:
O: apollos (AAF)
P:
Q:
R:
S:
T:
U:
V:
W:
X:
Y:
Z:
*/
