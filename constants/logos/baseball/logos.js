const createTeam = sport => ({ title, letters, answers }) => ({
  filename: title.toLowerCase().split(' ').join('_'),
  title,
  letters,
  allowedAnswers: answers,
  sport
})

const createMlbTeam = createTeam('mlb')
const createMilbTeam = createTeam('milb')

const arizonDiamondbacks = createMlbTeam({
  title: 'Arizona Diamondbacks',
  letters: ['A'],
  answers: [
    'diamondbacks',
    'arizona',
    'dbacks',
    'arizona diamondbacks',
    'diamond backs',
    'arizona diamond backs'
  ]
})

const atlantaBraves = createMlbTeam({
  title: 'Atlanta Braves',
  letters: ['A'],
  answers: ['braves', 'atlanta', 'atlanta braves']
})

const bostonRedSox = createMlbTeam({
  title: 'Boston Red Sox',
  letters: ['B'],
  answers: ['red sox', 'boston', 'boston red sox']
})

const losAngelesAngels = createMlbTeam({
  title: 'Los Angeles Angels',
  letters: ['A'],
  answers: [
    'la angels',
    'angels',
    'los angeles angels',
    'anaheim angels'
  ]
})

const oaklandAthletics = createMlbTeam({
  title: 'Oakland Athletics',
  letters: ['A'],
  answers: [
    'oakland',
    "a's",
    'oakland athletics',
    "oakland a's",
    'athletics'
  ]
})

const chicagoCubs = createMlbTeam({
  title: 'Chicago Cubs',
  letters: ['C'],
  answers: ['cubs', 'chicago', 'chicago cubs', 'cubbies']
})

const cincinnatiReds = createMlbTeam({
  title: 'Cincinnati Reds',
  letters: ['C'],
  answers: ['reds', 'cincinnati', 'cincinnati reds']
})

const detroitTigers = createMlbTeam({
  title: 'Detroit Tigers',
  letters: ['D'],
  answers: ['tigers', 'detroit', 'detroit tigers']
})

const houstonAstros = createMlbTeam({
  title: 'Houston Astros',
  letters: ['H'],
  answers: ['astros', 'houston', 'houston astros']
})

const torontoBlueJays = createMlbTeam({
  title: 'Toronto Blue Jays',
  letters: ['J'],
  answers: ['toronto', 'blue jays', 'jays', 'toronto blue jays']
})

const floridaMarlins = createMlbTeam({
  title: 'Florida Marlins',
  letters: ['F'],
  answers: ['marlins', 'florida', 'florida marlins']
})

const milwaukeeBrewers = createMlbTeam({
  title: 'Milwaukee Brewers',
  letters: ['M'],
  answers: ['brewers', 'milwaukee', 'milwaukee brewers', 'brew crew']
})

const montrealExpos = createMlbTeam({
  title: 'Montreal Expos',
  letters: ['M'],
  answers: ['montreal', 'expos', 'montreal expos']
})

const philadelphiaPhillies = createMlbTeam({
  title: 'Philadelphia Phillies',
  letters: ['P'],
  answers: ['phillies', 'philadelphia', 'philadelphia phillies']
})

const pittsburghPirates = createMlbTeam({
  title: 'Pittsburgh Pirates',
  letters: ['P'],
  answers: ['pirates', 'pittsburgh', 'pittsburgh pirates']
})

const seattleMariners = createMlbTeam({
  title: 'Seattle Mariners',
  letters: ['S'],
  answers: ['seattle', 'mariners', 'seattle mariners']
})

const texasRangers = createMlbTeam({
  title: 'Texas Rangers',
  letters: ['T'],
  answers: ['texas', 'rangers', 'texas rangers']
})

const washingtonNationals = createMlbTeam({
  title: 'Washington Nationals',
  letters: ['W'],
  answers: ['washington', 'nationals', 'washington nationals']
})

export const MLB_LOGOS = [
  atlantaBraves,
  arizonDiamondbacks,
  losAngelesAngels,
  oaklandAthletics,
  bostonRedSox,
  chicagoCubs,
  cincinnatiReds,
  detroitTigers,
  houstonAstros,
  torontoBlueJays,
  floridaMarlins,
  milwaukeeBrewers,
  montrealExpos,
  philadelphiaPhillies,
  pittsburghPirates,
  seattleMariners,
  texasRangers,
  washingtonNationals
]

const albuquerqueIsotopes = createMilbTeam({
  title: 'Albuquerque Isotopes',
  letters: ['A'],
  answers: ['albuquerque', 'isotopes', 'albuquerque isotopes']
})

const renoAces = createMilbTeam({
  title: 'Reno Aces',
  letters: ['A'],
  answers: ['aces', 'reno', 'reno aces']
})

const auburnDoubledays = createMilbTeam({
  title: 'Auburn Doubledays',
  letters: ['A'],
  answers: ['auburn', 'doubledays', 'auburn doubledays']
})

const durhamBulls = createMilbTeam({
  title: 'Durham Bulls',
  letters: ['D'],
  answers: ['durham', 'bulls', 'durham bulls']
})

const roundRockExpress = createMilbTeam({
  title: 'Round Rock Express',
  letters: ['E'],
  answers: ['rond rock', 'express', 'round rock express']
})

const nashvilleSounds = createMilbTeam({
  title: 'Nashville Sounds',
  letters: ['N'],
  answers: ['nashville', 'sounds', 'nashville sounds']
})

const uticaBlueSox = createMilbTeam({
  title: 'Utica Blue Sox',
  letters: ['U'],
  answers: ['utica', 'blue sox', 'utica blue sox']
})

const vermontLakeMonsters = createMilbTeam({
  title: 'Vermont Lake Monsters',
  letters: ['V'],
  answers: ['vermont', 'lake monsters', 'vermont lake monsters']
})

const charlotteKnights = createMilbTeam({
  title: 'Charlotte Knights',
  letters: ['K'],
  answers: ['charlotte', 'knights', 'charlotte knights']
})

const vermontExpos = createMilbTeam({
  title: 'Vermont Expos',
  letters: ['V'],
  answers: ['vermont', 'expos', 'vermont expos']
})

const newOrleansZephyrs = createMilbTeam({
  title: 'New Orleans Zephyrs',
  letters: ['Z'],
  answers: ['new orleans', 'zephyrs', 'new orleans zephyrs']
})

export const MILB_LOGOS = [
  albuquerqueIsotopes,
  renoAces,
  auburnDoubledays,
  durhamBulls,
  roundRockExpress,
  nashvilleSounds,
  uticaBlueSox,
  vermontLakeMonsters,
  charlotteKnights,
  vermontExpos,
  newOrleansZephyrs
]
