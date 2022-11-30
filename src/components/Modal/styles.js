import styled from "styled-components";

export const ModalLayout = styled.div`
    z-index: 999;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    /* max-height: 50%; */
    width: 279px;
    height: 435px;
    background: white;
    border-radius: 5px;
    text-align: center;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;
    border: 3px solid #A4D6CB;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    font-weight: 400;
    font-size: 15px;
    line-height: 22px;

    h1 {
        margin-top: 30px;
        margin-bottom: 28px;
        font-weight: 700;
        font-size: 20px;
        line-height: 29px;
    }
`;

export const ModalCloseButton = styled.div`
    position: fixed;
    top: 10px;
    right: 10px;
    width: 1.2rem;
    height: 1.2rem;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 1.2rem;
    &:active {
        background-color: white;
        filter: brightness(80%);
    }
`;

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`;

export const MessageCard = styled.div`
    position: relative;

	height: fit-content;
    padding: 10px;
    
    width: 217px;


    box-sizing: border-box;

    border: 2px dashed #A4D6CB;
    border-radius: 3px;
    box-shadow: 0 0 0 8px white, 0 0 0 10px #A4D6CB;
`

export const CardLayout = styled.div`
    position: relative;
    overflow: scroll;
    align-items: center;


    width: 272px;
    height: fit-content;
    padding-top: 10px;
    padding-bottom: 35px;

    display: flex;
    flex-direction: column;
    gap: 35px;
`

export const GingerCardLayout = styled.div`
    position: relative;
    align-items: center;

    width: 279px;
    height: 435px;
    padding-top: 10px;
    padding-bottom: 35px;

    display: flex;
    flex-direction: column;
    gap: 35px;
`

export const LandingPageModalLayout = styled.div`
    box-sizing: border-box;
    position: fixed;

    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;

    width: 300px;
    height: 687px;

    background: #FFFFFF;
    border: 3px solid #BAB8B5;
    border-radius: 10px;
`

export const LandingPageModalInner = styled.div`
    position: relative;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;

    width: 280px;
    height: 665px;

    border: 1px dashed #686363;
    border-radius: 7px;

    display: flex;
    flex-direction: column;
    align-items: center;

`