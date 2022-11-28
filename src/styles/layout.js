import styled, { createGlobalStyle, keyframes } from 'styled-components';
import reset from "styled-reset"
import { Snowfall } from 'react-snowfall';

export const MediaDiv = styled.div`
    margin: 0px auto;
    min-height: calc(var(--vh, 1vh) * 100);
    width: 768px;
    margin: 0 auto;
    background: linear-gradient(#F5C8B8 5%, #FCF4E9, #FCF4E9, #FCF4E9, #FCF4E9);
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        margin: 0px;
    }
`

export const SnowfallStyle = styled.div`

    margin: 0px auto;
    height: 40vh;
    width: 768px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`