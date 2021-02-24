import { useContext } from 'react'
import { ChallengContext } from '../../contexts/ChallengeContexts'
import {
    ContainerCompleteChallenges,
    Numbers,
    Title
} from './styled'

export function CompleteChallenges() {
    const { challengeCompleted } = useContext(ChallengContext)
    return (
        <ContainerCompleteChallenges>
            <Title>Desafios Completos</Title>
            <Numbers>{challengeCompleted}</Numbers>
        </ContainerCompleteChallenges>
    )
}