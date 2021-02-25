import { useContext } from "react";
import { ChallengContext } from "../../contexts/ChallengeContexts";
import {
    ContainerInfo,
    ImageLevel,
    ImageProfile,
    Level,
    Name,
    ProfileContainer
} from "./styled";

export function Profile() {

    const { level } = useContext(ChallengContext)

    return (
        <ProfileContainer>
            <ImageProfile src="https://github.com/gmorae.png" alt="Gabriel Moraes Martins" />
            <ContainerInfo>
                <Name>Gabriel Moraes</Name>
                <Level>
                    <ImageLevel src="icons/level.svg" alt="icons level" />
                    Level {level}
                </Level>
            </ContainerInfo>
        </ProfileContainer>
    )
}