import { useContext, useEffect, useState } from "react";
import { CountdownContext } from "../../contexts/CountdownContexts";
import {
    Button,
    ContainerCountDown,
    ContentNumber,
    Number,
    Points,
    Icon,
    ButtonAbandon
} from "./styled";

export function CountDown() {

    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        resetCountDown,
        startCountDown
    } = useContext(CountdownContext)

    const [minuteLeft, minuterRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondrRight] = String(seconds).padStart(2, '0').split('')

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