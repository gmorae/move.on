import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ChallengeBoxContainer = styled.div`
    height: 100%;

    background: ${theme.colors.white};
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0,0,0,0.05);
    padding: 1.6rem 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const ChallengeBoxNotActive = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ChallengeBoxTitle = styled.strong`
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2.5rem;
`;

export const ChallengeBoxParagraph = styled.p`
    display: flex;
    align-items: center;
    flex-direction: column;

    line-height: 1.4rem;
    max-width: 70%;
    margin-top: 4rem;
`;

export const ChallengeBoxIcon = styled.img`
    margin-bottom: 1rem;
`;


export const ChallengeBoxActive = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
`;

export const ChallengeBoxHeader = styled.header`
    color: ${theme.colors.blue};
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${theme.colors.gray_line};
`;

export const ChallengeBoxMain = styled.main`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    strong {
        font-size: 2rem;
        font-weight: 600;
        margin: 1.5rem 0 1rem;
    }
    p {
        margin: 0;
    }
`;

export const ChallengeBoxFooter = styled.footer`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    button {
        height: 3rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border: 0;
        border-radius: 5px;

        color: ${theme.colors.white};

        font-size: 1rem;
        font-weight: 600;

        transition: all 0.5s;
        
        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const ChallengeBoxButtonFailed = styled.button`
    background: ${theme.colors.red};
`;

export const ChallengeBoxButtonSucceeded = styled.button`
    background: ${theme.colors.green};
`;