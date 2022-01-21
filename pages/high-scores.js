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
    <Layout title='Sport Logo Alphabet Quiz'>
      <DisplayCard borderColor='green' narrowHeight="h-70vh" height="h-70vh">
        <CardHeader element='h2'>Your High&nbsp;Scores</CardHeader>
        <DynamicHighScoresList />
        <Link href='/'>
          <ButtonWithRef isButton={false} modifier='green'>
            Home
          </ButtonWithRef>
        </Link>
      </DisplayCard>
    </Layout>
  )
}

export default HighScores
