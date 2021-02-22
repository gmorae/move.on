import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const ContainerBar = styled.header`
    display: flex;
    align-items: center;
`;

export const Experience = styled.span`
  font-size: 1rem;
`;

export const Bar = styled.div`
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: ${theme.colors.gray_line};
    margin: 0 1.5rem;
    position: relative;
`;

export const Success = styled.div`
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: ${theme.colors.green};
`;

export const CurrentExperience = styled.span`
    font-size: 1rem;
    position: absolute;
    top: 12px;
    transform: translateX(-50%);
`;