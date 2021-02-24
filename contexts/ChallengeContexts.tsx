import { createContext, ReactNode, useState } from 'react'
import challenges from '../challenges.json';

type ChallengProviderProps = {
    children: ReactNode
}

type ChallengContextData = {
    level: number,
    currentExperience: number,
    challengeCompleted: number,
    experienceToNextLevel: number,
    activeChallenge: Challenge,
    levelUp: () => void,
    startNewChallenge: () => void,
    resetChallenge: () => void,
}

type Challenge = {
    type: 'eye' | 'body',
    description: number,
    amount: string,
}

export const ChallengContext = createContext({} as ChallengContextData)

export function ChallengProvider({ children }: ChallengProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengeCompleted, setChallengeCompleted] = useState(0)

    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge)
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    return (
        <ChallengContext.Provider
            value={{
                level,
                currentExperience,
                challengeCompleted,
                levelUp,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                experienceToNextLevel
            }}
        >
            {children}
        </ChallengContext.Provider>
    )
}