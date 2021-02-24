import { useContext } from 'react'
import { ChallengContext } from '../../contexts/ChallengeContexts'
import {
    ContainerBar,
    Bar,
    Experience,
    CurrentExperience,
    Success
} from './styled'

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengContext)
    const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel)
    return (
        <ContainerBar>
            <Experience>0 px</Experience>
            <Bar>
                <Success style={{ width: `${percentToNextLevel}%` }} />
                <CurrentExperience style={{ left: `${percentToNextLevel}%` }}>{currentExperience} px</CurrentExperience>
            </Bar>
            <Experience>{experienceToNextLevel} px</Experience>
        </ContainerBar>
    )
}