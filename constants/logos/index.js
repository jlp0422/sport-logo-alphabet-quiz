import { MLB_LOGOS } from './baseball/logos'
import { NBA_LOGOS } from './basketball/logos'

export const LOGOS_BY_TYPE = {
  ALL: [...MLB_LOGOS, ...NBA_LOGOS],
  MLB: MLB_LOGOS,
  NBA: NBA_LOGOS
}
