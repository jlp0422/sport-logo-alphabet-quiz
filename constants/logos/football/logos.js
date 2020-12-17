import { createNflTeam } from '../helpers'

const chicagoBears = createNflTeam({
  title: 'Chicago Bears',
  letters: ['C'],
  answers: ['bears', 'chicago', 'chicago bears', 'da bears']
})

const cincinnatiBengals = createNflTeam({
  title: 'Cincinnati Bengals',
  letters: ['C'],
  answers: ['cincinnati', 'bengals', 'cincinnati bengals']
})

const baltimoreRavens = createNflTeam({
  title: 'Baltimore Ravens',
  letters: ['B'],
  answers: ['baltimore', 'ravens', 'baltimore ravens']
})

const denverBroncos = createNflTeam({
  title: 'Denver Broncos',
  letters: ['D'],
  answers: ['denver', 'broncos', 'denver broncos']
})

const greenBayPackers = createNflTeam({
  title: 'Green Bay Packers',
  letters: ['G'],
  answers: ['packers', 'green bay', 'green bay packers']
})

const stLouisRams = createNflTeam({
  title: 'St Louis Rams',
  letters: ['R'],
  answers: ['rams', 'st louis', 'st louis rams']
})

const tennesseeTitans = createNflTeam({
  title: 'Tennessee Titans',
  letters: ['T'],
  answers: ['titans', 'tennessee', 'tennessee titans']
})

const washingtonFootballTeam = createNflTeam({
  title: 'Washington Football Team',
  letters: ['W'],
  answers: ['washington', 'football team', 'washington football team']
})

export const NFL_LOGOS = [
  chicagoBears,
  denverBroncos,
  greenBayPackers,
  tennesseeTitans,
  cincinnatiBengals,
  baltimoreRavens,
  stLouisRams,
  washingtonFootballTeam,
]

/*
A: AFC
B:  thunderbolts (XFL), brigade (AFL)
C:
D:  dolphins (wordmark)
E: eskimos (CFL), express (AAF)
F:
G: , gamblers (USFL)
H: hitmen (XFL)
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
V: vipers (XFL)
W: WFT
X:
Y:
Z:
*/
