import styled from 'styled-components';
import Hotel from '../assets/SnowHotel.svg';
import LoginBar from '../assets/LoginBar.svg';
import SignupBar from '../assets/SignupBar.svg';
import Title from '../assets/Welcome.svg';
import { useHistory } from 'react-router-dom';
import { Container, HotelImg, TitleDiv, WelcometoGingerHotel } from './styles/style';
import { GreenButton, RedButton, YellowButton } from './styles/buttonstyle';
import LandingModal from '../components/Modal/LandingModal';
import { useState } from 'react';

// Landing Page 관련
import { LandingPageModalInner } from "../components/Modal/styles";
import LandingPage from '../assets/WelcometoGingerHotel.svg';

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
                                <WelcometoGingerHotel src={LandingPage} />
                                <LandingTitle>☃ 어드벤트 캘린더란?</LandingTitle>
                                <LandingContent>어드벤트 캘린더는 12월 1일부터 25일까지,<br/>크리스마스를 기다리며 하나씩 선물을<br/>열어보는 달력을 말해요!<br/>한국에서는 아직 대중화되지 않았지만, 외국에서는<br/>크리스마스와 연말 시즌에 많이 사용한답니다.</LandingContent>
                                <br/>
                                <LandingTitle>☃ 진저호텔 이용방법</LandingTitle>
                                <LandingContent2>
                                    🎄 내 호텔을 만들고 SNS에 링크를 공유해요.
                                    <br/>
                                    🎄 친구들에게 편지를 받으면 창문을 열 수 있어요.
                                    <br/>
                                    🎄 창문 안에는 친구들이 보내준 메세지가 들어 있어요.
                                    <br/>
                                    🎄 하루에 하나만 오픈 가능해요!
                                    <br/>
                                    🎄 정해진 편지 갯수를 채워야 창문을 열 수 있어요!
                                </LandingContent2>
                                <br/>
                                <LandingTitle2>☃ 진저맨 카드를 모두 모아 보세요!</LandingTitle2>
                                <LandingContent>진저호텔에 사는 25종의 진저맨을 모두 모아 보세요!</LandingContent>
                                <br/>
                                <LandingTitle>☃ 웰컴 투 진저호텔</LandingTitle>
                                <LandingContent>웰컴 투 진저호텔은 광운대, 동국대, 숭실대, 중앙대, 한서대학교 학생 5명이 함께 만든 크리스마스 시즌 서비스입니다.</LandingContent>
                                <LandingContent>웰컴 투 진저호텔은 수익을 창출하지 않으며, 비영리 서비스입니다.</LandingContent>
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
const LandingTitle = styled.div`
    position: relative;
    left: -14%;
    top: 11%;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 23.17px;
    text-align: left;

    color: #000000;
`
const LandingTitle2 = styled.div`
    position: relative;
    left: 5%;
    top: 11%;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 23.17px;
    text-align: left;

    color: #000000;
`
const LandingContent = styled.div`
    position: relative;
    left: 0.67%;
    top: 11.5%;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 14.48px;
    text-align: left;
    
    color: #000000;
`
const LandingContent2 = styled.div`
    position: relative;
    left: 5.67%;
    top: 12%;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 14.48px;
    text-align: left;
    
    color: #000000;
`