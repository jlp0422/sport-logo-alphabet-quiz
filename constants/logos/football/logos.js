const SPORT_NFL = { sport: 'nfl' }

const chicagoBears = {
  filename: 'chicago_bears',
  title: 'Chicago Bears',
  letters: ['C'],
  allowedAnswers: ['bears', 'chicago', 'chicago bears', 'da bears'],
  ...SPORT_NFL
}

const denverBroncos = {
  filename: 'denver_broncos',
  title: 'Denver Broncos',
  letters: ['D'],
  allowedAnswers: ['denver', 'broncos', 'denver broncos'],
  ...SPORT_NFL
}

const greenBayPackers = {
  filename: 'green_bay_packers',
  title: 'Green Bay Packers',
  letters: ['G'],
  allowedAnswers: ['packers', 'green bay', 'green bay packers'],
  ...SPORT_NFL
}

const tennesseeTitans = {
  filename: 'tennessee_titans',
  title: 'Tennessee Titans',
  letters: ['T'],
  allowedAnswers: ['titans', 'tennessee', 'tennessee titans'],
  ...SPORT_NFL
}

export const NFL_LOGOS = [chicagoBears, denverBroncos, greenBayPackers, tennesseeTitans]

/*
A: AFC
B: bengals, ravens, thunderbolts (XFL), brigade (AFL)
C: bears
D: broncos (throwback), dolphins (wordmark)
E: eskimos (CFL), express (AAF)
F: falcons
G: packers, gamblers (USFL)
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
R: rams (throwback/alternate), redblacks (CFL)
S: roughriders (CFL)
T: titans
U: colts?
V: vipers (XFL)
W: WFT
X:
Y:
Z:
*/
