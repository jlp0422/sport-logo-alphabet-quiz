const createTeam = sport => ({ title, letters, answers }) => ({
  filename: title.toLowerCase().split(' ').join('_'),
  title,
  letters,
  allowedAnswers: answers,
  sport
})

export const createMlbTeam = createTeam('mlb')
export const createMilbTeam = createTeam('milb')

export const createNflTeam = createTeam('nfl')
export const createXflTeam = createTeam('xfl')
export const createAflTeam = createTeam('afl')
export const createCflTeam = createTeam('cfl')
export const createAafTeam = createTeam('aaf')
export const createUsflTeam = createTeam('usfl')

export const createNbaTeam = createTeam('nba')
export const createWnbaTeam = createTeam('wnba')
