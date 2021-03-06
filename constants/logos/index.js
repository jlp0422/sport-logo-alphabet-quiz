import { MLB_LOGOS, MILB_LOGOS } from './baseball/logos'
import { NBA_LOGOS, WNBA_LOGOS } from './basketball/logos'
import { NFL_LOGOS, XFL_LOGOS, AFL_LOGOS } from './football/logos'
import { NHL_LOGOS, AHL_LOGOS, WHA_LOGOS } from './hockey/logos'

const baseballLogos = [...MLB_LOGOS, ...MILB_LOGOS]
const footballLogos = [...NFL_LOGOS, ...XFL_LOGOS, ...AFL_LOGOS]
const basketballLogos = [...NBA_LOGOS, ...WNBA_LOGOS]
const hockeyLogos = [...NHL_LOGOS, ...AHL_LOGOS, ...WHA_LOGOS]

const allLogos = [
  ...baseballLogos,
  ...footballLogos,
  ...basketballLogos,
  ...hockeyLogos
]

export const LOGOS_BY_TYPE = {
  'Alphabet': allLogos,
  'All Logos': allLogos,
  Baseball: baseballLogos,
  Basketball: basketballLogos,
  Football: footballLogos,
  Hockey: hockeyLogos
  // NFL: NFL_LOGOS,
  // NBA: NBA_LOGOS,
  // MLB: MLB_LOGOS,
  // MILB: MILB_LOGOS,
  // XFL: XFL_LOGOS,
  // AFL: AFL_LOGOS,
  // WNBA: WNBA_LOGOS
}

export const TOTAL_LOGOS_BY_TYPE = {
  'Alphabet': allLogos.length,
  'All Logos': allLogos.length,
  Baseball: baseballLogos.length,
  Basketball: basketballLogos.length,
  Football: footballLogos.length,
  Hockey: hockeyLogos.length
  // NFL: NFL_LOGOS.length,
  // NBA: NBA_LOGOS.length,
  // MLB: MLB_LOGOS.length,
  // MILB: MILB_LOGOS.length,
  // XFL: XFL_LOGOS.length,
  // AFL: AFL_LOGOS.length,
  // WNBA: WNBA_LOGOS.length
}
