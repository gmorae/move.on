import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { ChallengContext } from "./ChallengeContexts";

type CountdownProviderProps = {
    children: ReactNode
}

type CountdownContextData = {
    minutes: number,
    seconds: number,
    hasFinished: boolean,
    isActive: boolean,
    startCountDown: () => void,
    resetCountDown: () => void
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {

    const { startNewChallenge } = useContext(ChallengContext)
    const [isActive, setIsActive] = useState(false)
    const [time, setTime] = useState(0.05 * 60);
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

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
        setHasFinished(false)
        setTime(0.05 * 60)
    }

    return (
        <CountdownContext.Provider
            value={{
                minutes,
                seconds,
                hasFinished,
                isActive,
                startCountDown,
                resetCountDown
            }}
        >
            {children}
        </CountdownContext.Provider>
    )
}