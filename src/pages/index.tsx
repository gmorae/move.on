import Head from 'next/head'
import { ChallengeBox } from '../components/ChallengeBox'
import { CompleteChallenges } from '../components/CompleteChallenges'
import { CountDown } from '../components/CountDown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { Container } from '../styles/globals'
import { Section } from '../styles/pages/home'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Home | Move on</title>
      </Head>
      <ExperienceBar />
      <Section>
        <div>
          <Profile />
          <CompleteChallenges />
          <CountDown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </Section>
    </Container>
  )
}
