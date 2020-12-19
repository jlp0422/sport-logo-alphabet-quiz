const createTeam = (league, sport) => ({ title, letters, answers }) => ({
  filename: title.toLowerCase().split(' ').join('_'),
  title,
  letters,
  allowedAnswers: answers,
  sport,
  league
})

export const createMlbTeam = createTeam('mlb', 'baseball')
export const createMilbTeam = createTeam('milb', 'baseball')

export const createNflTeam = createTeam('nfl', 'football')
export const createXflTeam = createTeam('xfl', 'football')
export const createAflTeam = createTeam('afl', 'football')
export const createCflTeam = createTeam('cfl', 'football')
export const createAafTeam = createTeam('aaf', 'football')
export const createUsflTeam = createTeam('usfl', 'football')

export const createNbaTeam = createTeam('nba', 'basketball')
export const createWnbaTeam = createTeam('wnba', 'basketball')

export const createNhlTeam = createTeam('nhl', 'hockey')
