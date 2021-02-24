import styled from 'styled-components';

export const Section = styled.section`
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;

    @media(max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;