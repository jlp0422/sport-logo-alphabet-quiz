import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ButtonWithRef } from '../components/shared/Button'
import CardHeader from '../components/shared/CardHeader'
import DisplayCard from '../components/shared/DisplayCard'
import Layout from '../components/shared/Layout'
import Loading from '../components/shared/Loading'

const DynamicHighScoresList = dynamic(
  () => import('../components/HighScores'),
  { ssr: false, loading: () => <Loading loadingDotColor='#064E3B' /> }
)

const HighScores = () => {
  return (
    <Layout tltle='Sport Logo Alphabet Quiz'>
      <DisplayCard borderColor='green' >
        <CardHeader element='h2'>All-Time High&nbsp;Scores</CardHeader>
        <DynamicHighScoresList />
        <Link href='/'>
          <ButtonWithRef isButton={false} modifier='green'>
            Back home
          </ButtonWithRef>
        </Link>
      </DisplayCard>
    </Layout>
  )
}

export default HighScores
