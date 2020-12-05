const SPORT_MLB = { sport: 'mlb' }

const bostonRedSox = {
  filename: 'boston_red_sox',
  title: 'Boston Red Sox',
  letters: ['B'],
  allowedAnswers: ['red sox', 'boston', 'boston red sox'],
  ...SPORT_MLB
}

const clevelandIndians = {
  filename: 'cleveland_indians',
  title: 'Cleveland Indians',
  letters: ['C'],
  allowedAnswers: ['indians', 'cleveland'],
  ...SPORT_MLB
}

const losAngelesAngels = {
  filename: 'los_angeles_angels',
  title: 'Los Angeles Angels',
  letters: ['A'],
  allowedAnswers: [
    'la angels',
    'angels',
    'los angeles angels',
    'anaheim angels'
  ],
  ...SPORT_MLB
}

const oaklandAthletics = {
  filename: 'oakland_athletics',
  title: 'Oakland Athletics',
  letters: ['A'],
  allowedAnswers: ['oakland', "a's", 'oakland athletics', "oakland a's", 'athletics'],
  ...SPORT_MLB
}

const MLB_TEAMS = [
  bostonRedSox,
  clevelandIndians,
  losAngelesAngels,
  oaklandAthletics
]

export default MLB_TEAMS

/*
A: braves, angels, athletics, dbacks, isotopes (MILB), aces (MILB), doubledays (MILB)
B: red sox
C: indians, cubs, reds
D: tigers, bulls (MILB)
E: express (MILB)
F:
G:
H: astros
I:
J: blue jays
K:
L:
M: mariners (throwback), marlins, brewers (throwback), expos
N: sounds (MILB)
O: tigers (MILB)
P: phillies, pirates
Q:
R: royals?
S: mariners (throwback)
T: rangers, blue jays (throwback, alternate)
U: blue sox (MILB)
V: lake monsters (MILB), expos (MILB)
W: nationals
X:
Y:
Z: zephyrs (MILB)
*/
