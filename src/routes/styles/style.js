import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 125px;
`
export const HotelImg = styled.img`
    width: 180px;
    height: 285px;
    margin-top: 36px;
`
export const TitleDiv = styled.div`
    width: 176px;
    height: 17px;
    text-align: center;
    padding-top: 3px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;

    color: #000000;
`
export const InputStyle = styled.input`
    width: 305px;
    height: 45px;
    background-color: #FCF4E9;
    color:  #000000;

    border-color: transparent;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #BAB8B5;
    padding-left: 10px;

    font-family: 'Preahvihear';
    src: url(//db.onlinewebfonts.com/c/7275543a4c81e75f7268e3d555b186d0?family=Preah+Vihear);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;

    ::placeholder {
        color: #BAB8B5;
        font-family: 'Preahvihear';
        src: url(//db.onlinewebfonts.com/c/7275543a4c81e75f7268e3d555b186d0?family=Preah+Vihear);
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 25px;
    }
`
// write.js
export const WriteTitleDiv = styled.div`
    width: 159px;
    height: 58px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    text-align: center;

    color: #000000;
`
export const LetterStyle = styled.img`
    width: 70px;
    height: 43.47px;
    margin-bottom: 22.53px;
`
export const WriteSubTitle = styled.div`
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    
    color: #686363;
`
// common

export const ButtonLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12.57px;
    margin-top: 62.02px;
    margin-bottom: 142px;
`