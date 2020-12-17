import { createNbaTeam, createWnbaTeam } from '../helpers'

const brooklynNets = createNbaTeam({
  title: 'Brooklyn Nets',
  letters: ['B'],
  answers: ['nets', 'brooklyn', 'brooklyn nets']
})

const clevelandCavaliers = createNbaTeam({
  title: 'Cleveland Cavaliers',
  letters: ['C'],
  answers: ['cavs', 'cleveland', 'cavaliers', 'cleveland cavaliers']
})

const utahJazz = createNbaTeam({
  title: 'Utah Jazz',
  letters: ['J'],
  answers: ['jazz', 'utah', 'utah jazz']
})

const losAngelesLakers = createNbaTeam({
  title: 'Los Angeles Lakers',
  letters: ['L'],
  answers: ['lakers', 'los angeles', 'la lakers', 'los angeles lakers']
})

const charlotteBobcats = createNbaTeam({
  title: 'Charlotte Bobcats',
  letters: ['C'],
  answers: ['charlotte', 'bobcats', 'charlotte bobcats']
})

const vancouverGrizzlies = createNbaTeam({
  title: 'Vancouver Grizzlies',
  letters: ['G'],
  answers: ['vancouver', 'grizzlies', 'vancouver grizzlies']
})

const detroitPistons = createNbaTeam({
  title: 'Detroit Pistons',
  letters: ['P'],
  answers: ['detroit', 'pistons', 'detroit pistons']
})

const indianaPacers = createNbaTeam({
  title: 'Indiana Pacers',
  letters: ['P'],
  answers: ['indiana', 'pacers', 'indiana pacers']
})

const houstonRockets = createNbaTeam({
  title: 'Houston Rockets',
  letters: ['R'],
  answers: ['houston', 'rockets', 'houston rockets']
})

const seattleSuperSonics = createNbaTeam({
  title: 'Seattle SuperSonics',
  letters: ['S'],
  answers: [
    'seattle',
    'supersonics',
    'super sonics',
    'seattle supersonics',
    'seattle super sonics'
  ]
})

export const NBA_LOGOS = [
  brooklynNets,
  clevelandCavaliers,
  utahJazz,
  losAngelesLakers,
  charlotteBobcats,
  vancouverGrizzlies,
  detroitPistons,
  indianaPacers,
  houstonRockets,
  seattleSuperSonics
]

const atlantaDream = createWnbaTeam({
  title: 'Atlanta Dream',
  letters: ['A'],
  answers: ['atlanta', 'dream', 'atlanta dream']
})

const indianaFever = createWnbaTeam({
  title: 'Indiana Fever',
  letters: ['F'],
  answers: ['indiana', 'fever', 'indiana fever']
})

const minnesotaLynx = createWnbaTeam({
  title: 'Minnesota Lynx',
  letters: ['M'],
  answers: ['minnesota', 'lynx', 'minnesota lynx']
})

const phoenixMercury = createWnbaTeam({
  title: 'Phoenix Mercury',
  letters: ['M'],
  answers: ['mercury', 'phoenix', 'phoenix mercury']
})

const chicagoSky = createWnbaTeam({
  title: 'Chicago Sky',
  letters: ['S'],
  answers: ['chicago', 'sky', 'chicago sky']
})

const seattleStorm = createWnbaTeam({
  title: 'Seattle Storm',
  letters: ['S'],
  answers: ['seattle', 'storm', 'seattle storm']
})

export const WNBA_LOGOS = [
  atlantaDream,
  indianaFever,
  minnesotaLynx,
  phoenixMercury,
  chicagoSky,
  seattleStorm
]
