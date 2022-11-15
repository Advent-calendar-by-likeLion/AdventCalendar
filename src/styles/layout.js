import { useEffect } from "react";
import styled, { createGlobalStyle } from 'styled-components';
import reset from "styled-reset"

// const DefaultDiv = styled.div`
//     z-index: 0;
//     display: flex;
//     justify-content: center;
//     height: calc(var(--vh) * 1 * 100 - 54px);
//     width: 100%;
//     background-color: transparent;
// `;

// export const DefaultLayout = ({ children }) => {
//     const handleResize = () => {
//         const vh = window.innerHeight * 0.01;
//         document.documentElement.style.setProperty("--vh", `${vh}px`);
//     };

//     useEffect(() => {
//         handleResize();
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);
//     return <DefaultDiv>{children}</DefaultDiv>;
// };

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