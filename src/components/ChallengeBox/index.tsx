import { useContext } from 'react'
import { ChallengContext } from '../../contexts/ChallengeContexts'
import { CountdownContext } from '../../contexts/CountdownContexts'
import {
    ChallengeBoxContainer as Container,
    ChallengeBoxNotActive as NotActive,
    ChallengeBoxIcon as Icon,
    ChallengeBoxParagraph as P,
    ChallengeBoxTitle as Title,
    ChallengeBoxActive as Active,
    ChallengeBoxHeader as Header,
    ChallengeBoxMain as Main,
    ChallengeBoxFooter as Footer,
    ChallengeBoxButtonFailed as ButtonFailed,
    ChallengeBoxButtonSucceeded as ButtonSucceeded,
} from './styled'

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengContext)
    const { resetCountDown } = useContext(CountdownContext)

    function handleChallengeSucceeded() {
        completeChallenge()
        resetCountDown()
    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountDown()
    }
    return (
        <Container>
            {
                activeChallenge ? (
                    <Active>
                        <Header>Ganhe {activeChallenge.amount} px</Header>
                        <Main>
                            <Icon src={`icons/${activeChallenge.type}.svg`} alt="icon body" />
                            <Title>Novo desafio</Title>
                            <P>{activeChallenge.description}</P>
                        </Main>
                        <Footer>
                            <ButtonFailed onClick={handleChallengeFailed}>Falhei</ButtonFailed>
                            <ButtonSucceeded onClick={handleChallengeSucceeded}>Completei</ButtonSucceeded>
                        </Footer>
                    </Active>
                ) : (
                        <NotActive>
                            <Title>Inicie um ciclo para receber desafios</Title>
                            <P>
                                <Icon src="icons/level-up.svg" alt="level Up" />
                                Avance de level completando desafios
                            </P>
                        </NotActive >
                    )
            }
        </Container >
    )
}