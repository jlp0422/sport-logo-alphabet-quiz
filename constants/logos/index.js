import { MLB_LOGOS, MILB_LOGOS } from './baseball/logos'
import { NBA_LOGOS, WNBA_LOGOS } from './basketball/logos'
import { NFL_LOGOS, XFL_LOGOS, AFL_LOGOS } from './football/logos'

const baseballLogos = [...MLB_LOGOS, ...MILB_LOGOS]
const footballLogos = [...NFL_LOGOS, ...XFL_LOGOS, ...AFL_LOGOS]
const basketballLogos = [...NBA_LOGOS, ...WNBA_LOGOS]

export const LOGOS_BY_TYPE = {
  'All Logos': [...baseballLogos, ...footballLogos, ...basketballLogos],
  Baseball: baseballLogos,
  Football: footballLogos,
  NFL: NFL_LOGOS,
  NBA: NBA_LOGOS,
  MLB: MLB_LOGOS,
  MILB: MILB_LOGOS,
  XFL: XFL_LOGOS,
  AFL: AFL_LOGOS,
  WNBA: WNBA_LOGOS
}
