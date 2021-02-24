import { useContext, useEffect, useState } from "react";
import { ChallengContext } from "../../contexts/ChallengeContexts";
import {
    Button,
    ContainerCountDown,
    ContentNumber,
    Number,
    Points,
    Icon,
    ButtonAbandon
} from "./styled";

let countdownTimeout: NodeJS.Timeout;

export function CountDown() {
    const { startNewChallenge } = useContext(ChallengContext)
    const [isActive, setIsActive] = useState(false)
    const [time, setTime] = useState(0.05 * 60);
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const [minuteLeft, minuterRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondrRight] = String(seconds).padStart(2, '0').split('')

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()
        }
    }, [isActive, time])

    function startCountDown() {
        setIsActive(true)
    }

    function resetCountDown() {
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(0.05 * 60)
    }

    return (
        <>
            <ContainerCountDown>
                <ContentNumber>
                    <Number>{minuteLeft}</Number>
                    <Number>{minuterRight}</Number>
                </ContentNumber>
                <Points>:</Points>
                <ContentNumber>
                    <Number>{secondLeft}</Number>
                    <Number>{secondrRight}</Number>
                </ContentNumber>
            </ContainerCountDown>
            {
                hasFinished ? (
                    <Button disabled onClick={startCountDown}>
                        Cliclo encerrado
                        <Icon src="icons/check_circle.svg" alt="icon play arrow" />
                    </Button>
                ) : (
                        <>
                            {
                                isActive ? (
                                    <ButtonAbandon onClick={resetCountDown}>
                                        Abandonar ciclo
                                        <Icon src="icons/x.svg" alt="icon x" />
                                    </ButtonAbandon>
                                ) : (
                                        <Button onClick={startCountDown}>
                                            Iniciar um ciclo
                                            <Icon src="icons/play_arrow.svg" alt="icon play arrow" />
                                        </Button>
                                    )
                            }
                        </>
                    )
            }
        </>
    )
}