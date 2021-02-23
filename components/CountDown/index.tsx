import { useEffect, useState } from "react";
import {
    Button,
    ContainerCountDown,
    ContentNumber,
    Number,
    Points,
    Icon
} from "./styled";

export function CountDown() {

    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const [minuteLeft, minuterRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondrRight] = String(seconds).padStart(2, '0').split('')

    useEffect(() => {
        if (active && time > 0) {
            setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        }
    }, [active, time])

    function startCountDown() {
        setActive(true)
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
            <Button onClick={startCountDown}>
                Iniciar um ciclo
                <Icon src="icons/play_arrow.svg" alt="icon play arrow" />
            </Button>
        </>
    )
}