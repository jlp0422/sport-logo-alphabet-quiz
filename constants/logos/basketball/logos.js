const SPORT_NBA = { sport: 'nba' }
const SPORT_WNBA = { sport: 'wnba' }

const brooklynNets = {
  filename: 'brooklyn_nets',
  title: 'Brooklyn Nets',
  letters: ['B'],
  allowedAnswers: ['nets', 'brooklyn', 'brooklyn nets'],
  ...SPORT_NBA
}

const clevelandCavaliers = {
  filename: 'cleveland_cavaliers',
  title: 'Cleveland Cavaliers',
  letters: ['C'],
  allowedAnswers: ['cavs', 'cleveland', 'cavaliers', 'cleveland cavaliers'],
  ...SPORT_NBA
}

const utahJazz = {
  filename: 'utah_jazz',
  title: 'Utah Jazz',
  letters: ['J'],
  allowedAnswers: ['jazz', 'utah', 'utah jazz'],
  ...SPORT_NBA
}

const losAngelesLakers = {
  filename: 'los_angeles_lakers',
  title: 'Los Angeles Lakers',
  letters: ['L'],
  allowedAnswers: ['lakers', 'los angeles', 'la lakers', 'los angeles lakers'],
  ...SPORT_NBA
}

export const NBA_LOGOS = [
  brooklynNets,
  clevelandCavaliers,
  utahJazz,
  losAngelesLakers
]

/*
A: deream (WNBA)
B: nets
C: cavs, bobcats
D:
E:
F: fever (WNBA)
G: grizzlies (vancouver)
H:
I:
J: jazz
K:
L: lakers
M: lynx (WNBA), mercury (WNBA)
N:
O:
P: pistons, pacers
Q:
R: rockets
S: sky (WNBA), storm (WNBA), supersonics
T:
U: spurs
V:
W:
X:
Y:
Z:
*/
