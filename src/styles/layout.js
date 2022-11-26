import styled, { createGlobalStyle, keyframes } from 'styled-components';
import reset from "styled-reset"
import { Snowfall } from 'react-snowfall';

export const MediaDiv = styled.div`
    margin: 0px auto;
    min-height: calc(var(--vh, 1vh) * 100);
    width: 768px;
    margin: 0 auto;
    background-color: #FCF4E9;
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

// const Opacity = keyframes`
//         0% {
//             opacity: 1;
//             transform: translateY(0);
//         }
//         100% {
//             opacity: 0;
//             transform: translateY(50%);
//         }`

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

/* export const SnowOpacity = styled.div`
    position: relative;
    margin: 0px auto;
    min-height: calc(var(--vh, 1vh) * 100);
    width: 768px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    animation: ${Opacity} 10s linear infinite;
` */