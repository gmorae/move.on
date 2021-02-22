import Head from 'next/head'
import { ExperienceBar } from '../components/ExperienceBar'
import { Container } from '../styles/globals'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Welcome | NLW</title>
      </Head>
      <ExperienceBar />
    </Container>
  )
}
