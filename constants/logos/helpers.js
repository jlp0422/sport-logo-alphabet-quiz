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
