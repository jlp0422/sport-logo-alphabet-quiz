import {
  createMlsTeam,
  createBundesligaTeam,
  createSerieATeam
} from '../helpers'

const portlandTimbers = createMlsTeam({
  title: 'Portland Timbers',
  letters: ['T'],
  answers: ['portland', 'timbers']
})

const torontoFc = createMlsTeam({
  title: 'Toronto FC',
  letters: ['T'],
  answers: ['toronto']
})

export const MLS_LOGOS = [portlandTimbers, torontoFc]

const borussiaMochengladbach = createBundesligaTeam({
  title: 'Borussia Mochengladbach',
  letters: ['B'],
  answers: ['borussia', 'mochengladbach']
})

const fortunaDusselsdorf = createBundesligaTeam({
  title: 'Fortuna Dusselsdorf',
  letters: ['F'],
  answers: ['fortuna', 'dusselsdorf']
})

const vflWolfsburg = createBundesligaTeam({
  title: 'Vfl Wolfsburg',
  letters: ['W'],
  answers: ['wolfsburg']
})

const werderBremen = createBundesligaTeam({
  title: 'Werder Bremen',
  letters: ['W'],
  answers: ['werder', 'bremen']
})

export const BUNDESLIGA_LOGOS = [
  borussiaMochengladbach,
  fortunaDusselsdorf,
  vflWolfsburg,
  werderBremen
]

const juventus = createSerieATeam({
  title: 'Juventus',
  letters: ['J'],
  answers: ['juventus']
})

const napoli = createSerieATeam({
  title: 'Napoli',
  letters: ['N'],
  answers: ['napoli']
})

export const SERIEA_LOGOS = [juventus, napoli]
