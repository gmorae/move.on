import {
    ContainerBar,
    Bar,
    Experience,
    CurrentExperience,
    Success
} from './styled'

export function ExperienceBar() {

    return (
        <ContainerBar>
            <Experience>0 px</Experience>
            <Bar>
                <Success style={{ width: '50%' }} />
                <CurrentExperience style={{ left: '50%' }}>300 px</CurrentExperience>
            </Bar>
            <Experience>600 px</Experience>
        </ContainerBar>
    )
}