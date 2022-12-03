import styled from 'styled-components';
import Hotel from '../assets/StartHotel.svg';
import LoginBar from '../assets/LoginBar.svg';
import SignupBar from '../assets/SignupBar.svg';
import Title from '../assets/Welcome.svg'; // 기존에 쓰던 타이틀
import MainTitle from '../assets/WelcomeAddedFont.svg'; // 폰트적용된 타이틀
import { useHistory } from 'react-router-dom';
import { Container, HotelImg, TitleDiv, LandingButton, LandingRedButton, LandingTitle1, LandingTitle2, LandingTitle3, LandingTitle4, LandingContent1, LandingContent2, LandingContent3, LandingContent4, LandingContent10, LandingContent11 } from './styles/style';
import { GreenButton, RedButton } from './styles/buttonstyle';
import LandingModal from '../components/Modal/LandingModal';
import { useState } from 'react';

// Landing Page 관련
import { LandingPageModalInner } from "../components/Modal/styles";
import LandingPage from '../assets/LandingPage/Welcome.svg';
import LandingModalButton from '../assets/LandingPage/LandingModalButton.svg';
import LandingImage from '../assets/LandingPage/LandingImageGinger.svg';
import LandingInsta from '../assets/LandingPage/LandingInsta.svg';

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
            <img src={MainTitle} />
            <br/>
            {/* <TitleDiv>진저호텔에서 보내는 25일간의 휴일</TitleDiv> */}
            <HotelImg src={Hotel} />
            <ButtonLayout>
                <RedButton onClick={onclickLoginBar}>로그인</RedButton>
                <GreenButton onClick={onclickSignupBar}>내 호텔 만들기</GreenButton>
                <LandingButton>
                    <img src={LandingModalButton} onClick={onClickOpenLandingModal}/>
                </LandingButton>
            </ButtonLayout>

            {isLandingModalOpen && <LandingModal closeModal={onClickCloseLandingModal}>
                            <LandingPageModalInner>
                                <LandingRedButton src={LandingPage} />
                                <LandingTitle1>⛄ 어드벤트 캘린더란?</LandingTitle1>
                                <LandingContent1>
                                    어드벤트 캘린더는 12월 1일부터 25일까지, 크리스마스를 기다리며 하나씩 선물을 열어보는 달력을 말해요! 
                                </LandingContent1>
                                <br/>
                                <LandingContent11>
                                    한국에서는 아직 대중화되지 않았지만, 외국에서는 크리스마스와 연말 시즌에 많이 사용한답니다.
                                </LandingContent11>
                                <br/>
                                <LandingTitle2>⛄ 진저호텔 이용 방법</LandingTitle2>
                                <LandingContent2>
                                    🎄 내 호텔을 만들고 SNS에 링크를 공유해요.
                                    <br/>
                                    🎄 친구들에게 편지를 받으면 창문을 열 수 있어요.
                                    <br/>
                                    🎄 창문 안에는 친구들이 보내준 메세지가 들어 있어요.
                                    <br/>
                                    🎄 하루에 하나의 창문만 오픈 가능해요!
                                    <br/>
                                    🎄 정해진 편지 갯수를 채워야 창문을 열 수 있어요!
                                    <br/>
                                    🎄 열지 못한 창문은 25일에 오픈돼요!
                                </LandingContent2>
                                <br/>
                                <LandingTitle3>⛄ 진저맨 카드를 모두 모아 보세요!</LandingTitle3>
                                <LandingContent3>진저호텔에 사는 25종의 진저맨을 모두 모아 보세요!</LandingContent3>
                                <LandingGingerImage>
                                    <img src={LandingImage}/>
                                </LandingGingerImage>
                                <br/>
                                <LandingTitle4>⛄ 웰컴투 진저호텔</LandingTitle4>
                                <LandingContent4>
                                    🎅 웰컴투 진저호텔은 광운대, 동국대, 숭실대, 중앙대, 한서대
                                </LandingContent4>
                                <LandingContent10>학생 5명이 함께 만든 크리스마스 시즌 서비스입니다.</LandingContent10>
                                <LandingContent5>
                                    <br/>🎅 웰컴투 진저호텔은 수익을 창출하지 않으며, 비영리 서비스입니다.
                                    <br/>🎅 본 서비스는 멋쟁이사자처럼대학 연합 해커톤 '단풍톤'에서 대상을
                                </LandingContent5>                                
                                <LandingContent6>
                                    받은 서비스입니다.......
                                </LandingContent6>
                                <LandingInstaImage>
                                    <img src={LandingInsta}/>
                                </LandingInstaImage>
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
    margin-top: 30px;
    margin-bottom: 142px;
`
const LandingGingerImage = styled.div`
    position: relative;
    height: 116px;
    width: 220px;
    left: 0px;
    top: 92px;
`
const LandingInstaImage = styled.div`
    position: relative;
    height: 10px;
    width: 10px;
    left: -5px;
    top: -113px;
`
const LandingContent5 = styled.div`
    position: relative;
    left: 0%;
    top: 7.7%;
    height: 60px;
    width: 230px;
    
    font-family: 'humanbeomseok';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 16.9px;
    text-align: left;
    
    color: #000000;
`
const LandingContent6 = styled.div`
    position: relative;
    left: 6.4%;
    top: 6%;
    height: 60px;
    width: 230px;
    
    font-family: 'humanbeomseok';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 16.9px;
    text-align: left;
    
    color: #000000;
`