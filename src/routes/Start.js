import styled from 'styled-components';
import Hotel from '../assets/SnowHotel.svg';
import LoginBar from '../assets/LoginBar.svg';
import SignupBar from '../assets/SignupBar.svg';
import Title from '../assets/Welcome.svg';
import { useHistory } from 'react-router-dom';
import { Container, HotelImg, TitleDiv } from './styles/style';
import { GreenButton, RedButton, YellowButton } from './styles/buttonstyle';
import LandingModal from '../components/Modal/LandingModal';
import { useState } from 'react';

import { LandingPageModalInner } from "../components/Modal/styles";

const Start = () => {
    const history = useHistory();

    const onclickLoginBar = () => {
        history.push("/login");
    }
    const onclickSignupBar = () => {
        history.push("/signup");
    }

    const [isLandingModalOpen, setLandingModalOpen] = useState(false);

    const onClickOpenLandingModal = () => {
        setLandingModalOpen(true);
    }
    
    const onClickCloseLandingModal = () => {
        setLandingModalOpen((prev) => !prev);
    }

    return (
        <>
        <Container>
            <img src={Title} />
            <br/>
            <TitleDiv>진저호텔에서 보내는 25일간의 휴일</TitleDiv>
            <HotelImg src={Hotel} />
            <ButtonLayout>
                <RedButton onClick={onclickLoginBar}>로그인</RedButton>
                <GreenButton onClick={onclickSignupBar}>내 호텔 만들기</GreenButton>
                <YellowButton onClick={onClickOpenLandingModal}>About Service</YellowButton>
            </ButtonLayout>

            {isLandingModalOpen && <LandingModal closeModal={onClickCloseLandingModal}>
                            <LandingPageModalInner>
                                <GingerTitle>벨보이 진저맨</GingerTitle>
                                <br/>
                                <GingerContent>진저호텔에 온 걸 환영한다!
                                                <br/>
                                                크리스마스에 진저호텔이라...
                                                <br/>
                                                탁월한 선택!
                                </GingerContent>
                            </LandingPageModalInner>
            </LandingModal>}
        </Container>
        </>
    )
}

export default Start;

const ButtonLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12.57px;
    margin-top: 62.02px;
    margin-bottom: 142px;
`
const GingerTitle = styled.div`
    position: absolute;

    top: 6%;
    bottom: 18.26%;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 48px;

    text-align: center;

    color: #000000;
`
const GingerContent = styled.div`
    position: absolute;

    top: 17%;
    bottom: 12.8%;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 21.72px;
    text-align: center;
    
    color: #000000;
`