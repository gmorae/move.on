import {
    ContainerInfo,
    ImageLevel,
    ImageProfile,
    Level,
    Name,
    ProfileContainer
} from "./styled";

export function Profile() {

    return (
        <ProfileContainer>
            <ImageProfile src="https://github.com/gmorae.png" alt="Gabriel Moraes Martins" />
            <ContainerInfo>
                <Name>Gabriel Moraes</Name>
                <Level>
                    <ImageLevel src="icons/level.svg" alt="icons level"/>
                    Level 1
                </Level>
            </ContainerInfo>
        </ProfileContainer>
    )
}