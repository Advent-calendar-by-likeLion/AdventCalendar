import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {dbService, authService, storageService} from "fbase"
import "./styles.css";
import { GridBox, Hotelbg, HotelContainer } from './styles/HotelStyle';
import { Container, TitleDiv, TitleDiv2, GingerCookie } from "./styles/style";
import Progressbar from "./Progressbar";
import Hotel from "../components/Hotel";
import { RedButton, WhiteButton, GreenButton, RedRoundButton } from "./styles/buttonstyle";
import { useHistory, useParams } from "react-router-dom";

import HotelName from "../components/HotelName";
import Modal from "../components/Modal/Modal";
import GingerModal from "../components/Modal/GingerModal";
import { CardLayout, MessageCard, GingerCardLayout } from "../components/Modal/styles";
import Nweet from "../components/Nweet";
import MessageModal from "../components/Modal/MessageModal";

// 쿠키 관련 모음
import BellBoyCookie from '../assets/cookie/BellBoyCookie.svg';

// Landing Page 관련
import { LandingRedButton, LandingTitle1, LandingTitle2, LandingTitle3, LandingTitle4, LandingContent1, LandingContent2, LandingContent3, LandingContent4, LandingContent10 } from './styles/style';
import LandingModal from '../components/Modal/LandingModal';
import { LandingPageModalInner } from "../components/Modal/styles";
import LandingPage from '../assets/LandingPage/Welcome.svg';
import LandingModalButton from '../assets/LandingPage/LandingModalButton.svg';
import LandingImage from '../assets/LandingPage/LandingImageGinger.svg';
import LandingEmail from '../assets/LandingPage/LandingEmail.svg';
import LandingInsta from '../assets/LandingPage/LandingInsta.svg';

const Home2 = ({ userObj }) => {
  const history = useHistory();
  const {id} = useParams(); // hetelOwnerId
  const toWrite = () => {
    history.push("/write/" + id);
  }
    
  const [nweets, setNweets] = useState([]);
  const [attachment, setAttachment] = useState("");
  const [isModalLetter, setIsModalLetter] = useState(false);

  let uid = 0;
  const [msgSize, setMsgSize] = useState(0);
  const [displayName, setDisplayName] = useState("");
  const [description, setDescription] = useState("");
  const [windowInfo, setWindowInfo] = useState([]);
  const [windowCount, setWindowCount] = useState("");
  const [lastDate, setLastDate] = useState("");
  
  const [isModalOpen, setModalOpen] = useState(false);
  const [isGingerModalOpen, setGingerModalOpen] = useState(false);
  const [msgCount, setMsgCount] = useState(0);
  const [goalCount, setGoalCount] = useState(0);
  const [isFull, setIsFull] = useState(false);
  const [isMsgFull, setIsMsgFull] = useState(false);
  const [isGoLetter, setIsGoLetter] = useState(false);

  useEffect(() => {
    Config();
    if (userObj) {
      uid = userObj.uid;
    }     

    dbService.collection("hotelOwner").doc(id).onSnapshot((doc) => {
      setDisplayName(doc.data().nickname);
      setDescription(doc.data().description);
      setWindowCount(doc.data().windowCount);
      setWindowInfo(doc.data().windowInfo);
      setLastDate(doc.data().lastDate);
    });


  }, []);
  useEffect(() => {
    
    dbService.collection("hotelOwner").doc(id).onSnapshot((snapshot) => {
      if (msgCount >= goalCount && snapshot.data().windowInfo[windowCount]) {
        setIsFull(true);
      } else {
        setIsFull(false);
      }
      
      if (msgCount !== 0 && msgCount >= (Number)(goalCount * 2)) {
        setIsMsgFull(true);
      } else {
        setIsMsgFull(false);
      }
    });
    
    if (new Date("20" + lastDate) < new Date("20" + getCurrentDate())) {
      addWindowCount(); // Todo: need to validate
    }

    // true고 date가 local과 같을떄.
  }, [msgCount]);

  useEffect(() => {
    dbService.collection(`${id}_${windowCount}`).onSnapshot((snapshot) => {
      const newArray = snapshot.docs.map((document) => ({
          id: document.id,
          ...document.data(),
      }))
      setMsgCount(newArray.length);
      setNweets(newArray);
    })

  }, [windowCount]);

  const addWindowCount = async () => { // Todo: Need to connect DB
    let date = new Date();
    let offset = date.getTimezoneOffset() * 60000; //ms단위라 60000곱해줌
    let dateOffset = new Date(date.getTime() - offset);

    await dbService.collection("hotelOwner").doc(id).update({
        windowCount : windowCount + 1,
        lastDate : dateOffset.toISOString().slice(2, 10),
    });
  }

  const Config = () => {
    
    // get the msg goal count by firestore db.
    dbService.collection("AdminConfig").doc("AdminConfig").onSnapshot((doc) => {
        setGoalCount(doc.data().goalCount);
      });

  }

    // text by db
    // id+ window count 로 하여 테이블생성. --
    // 날짜 따와서 modal nweet에 넣음.
    // 날짜 따와서 lastWriteTime을 호텔오너에 넣음.

    // 날짜가 다르면(다음날이 되면 window count가 올라간다)? 봐야할듯


    const getCurrentDate = () => { // ex : 22-04-17
      let date = new Date();
      let offset = date.getTimezoneOffset() * 60000; //ms단위라 60000곱해줌
      let dateOffset = new Date(date.getTime() - offset);
      
      return dateOffset.toISOString().slice(2, 10);
    }


  const onClickOpenModal = () => {
    setModalOpen(true);
  }

  const onClickCloseModal = () => {
    setModalOpen((prev) => !prev);
  }

  const onClickOpenGingerModal = () => {
    setGingerModalOpen(true);
  }

  const onClickCloseGingerModal = () => {
    setGingerModalOpen((prev) => !prev);
    setIsGoLetter((prev) => !prev);
  }

  const [isLandingModalOpen, setLandingModalOpen] = useState(false);

  const onClickOpenLandingModal = () => {
      setLandingModalOpen(true);
  }
  
  const onClickCloseLandingModal = () => {
      setLandingModalOpen((prev) => !prev);
  }


  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  const onClickGoLetter = () => {
    setIsGoLetter(true);
  }


  //링크 복사 버튼 코드
  let nowUrl = window.location.href;

  const copyUrl = () => { 
      navigator.clipboard.writeText(nowUrl).then(res=>{
      alert("주소가 복사되었습니다!");
    })
  }

  return (
    <>
      <HotelContainer style={{fontFamily: "humanbeomseok"}}> 
        <Progressbar msgCount={msgCount} goalCount={goalCount}/>
        <br/>
        <TitleDiv style={{marginBottom:'10px', fontFamily: "humanbeomseok"}}>진저호텔에서 보내는 25일간의 휴일</TitleDiv>
        <HotelName userObj={userObj} displayName={displayName}/> 
        <br/>
        <TitleDiv2 style={{marginBottom:'10px', fontFamily: "humanbeomseok"}}>{description}</TitleDiv2>
        <LandingButtonHotel1>
            <img src={LandingModalButton} onClick={onClickOpenLandingModal}/>
        </LandingButtonHotel1>  
          {/* <HotelName userObj={userObj} /> */}
          <Hotel/>
          { 
          id === (userObj ? userObj.uid : 0) ?  
          
          <>
            <RedButton disabled={!isFull} onClick={onClickOpenGingerModal}>오늘의 편지</RedButton>
            {!isFull ? <><br/><HotelGuide>* 오늘의 편지를 채워야 열람할 수 있어요! *</HotelGuide></>:<></>}
            <br/>
            <RedButton onClick={onClickOpenGingerModal}>진저맨 모달</RedButton>
            <br/>
            <GreenButton onClick={copyUrl}>호텔 링크 복사하기</GreenButton>
            <br/>
            <WhiteButton onClick={onLogOutClick}>로그아웃</WhiteButton>
            <Footer />
          </>
          :  
          <>
            <br/>
            <RedButton disabled={isMsgFull} onClick={toWrite}>편지 보내기</RedButton>
            {
              isMsgFull ?
              <><br/><HotelGuide>* 오늘의 편지 마감! 내일 작성해 주세요 *</HotelGuide></>
              :
              isFull ?
              <><br/><HotelGuide>보낼 수 있는 편지가 {(goalCount * 2) - msgCount}개 남았습니다!</HotelGuide></>
              :
              <></>
            }
            
            <br/>
          </>
          }      
          {isGingerModalOpen && <GingerModal closeModal={onClickCloseGingerModal}>
                        {isGoLetter ? <Modal closeModal={onClickCloseModal}>
                                          <h1>도착한 편지</h1>
                                          <CardLayout>
                                          {nweets.map((nweet) => (
                                          <MessageCard>
                                              <Nweet 
                                                key={nweet.id} 
                                                nweetObj={nweet}
                                                isOwner={nweet.creatorId === userObj.uid}
                                              />
                                          </MessageCard>
                                          ))}
                                          </CardLayout>
                                        </Modal> :
                            <GingerCardLayout>
                              <GingerTitle>벨보이 진저맨</GingerTitle>
                              <br/>
                              <GingerContent>진저호텔에 온 걸 환영한다!
                                              <br/>
                                              크리스마스에 진저호텔이라...
                                              <br/>
                                              탁월한 선택!
                              </GingerContent>
                              <GingerCookie src={BellBoyCookie} />
                              <RedRoundButton onClick={onClickGoLetter}>편지 읽기</RedRoundButton>
                            </GingerCardLayout>}
                          </GingerModal>} 
          {isLandingModalOpen && <LandingModal closeModal={onClickCloseLandingModal}>
                            <LandingPageModalInner>
                                <LandingRedButton src={LandingPage} />
                                <LandingTitle1>⛄어드벤트 캘린더란?</LandingTitle1>
                                <LandingContent1>
                                    어드벤트 캘린더는 12월 1일부터 25일까지, 크리스마스를 기다리며 하나씩 선물을 열어보는 달력을 말해요! 
                                </LandingContent1>
                                <br/>
                                <LandingContent1>
                                    한국에서는 아직 대중화되지 않았지만, 외국에서는 크리스마스와 연말 시즌에 많이 사용한답니다.
                                </LandingContent1>
                                <br/>
                                <LandingTitle2>⛄진저호텔 이용방법</LandingTitle2>
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
                                <LandingTitle3>⛄진저맨 카드를 모두 모아 보세요!</LandingTitle3>
                                <LandingContent3>진저호텔에 사는 25종의 진저맨을 모두 모아 보세요!</LandingContent3>
                                <LandingGingerImage>
                                    <img src={LandingImage}/>
                                </LandingGingerImage>
                                <br/>
                                <LandingTitle4>⛄웰컴투 진저호텔</LandingTitle4>
                                <LandingContent4>
                                    🎅 웰컴투 진저호텔은 광운대, 동국대, 숭실대, 중앙대, 한서대
                                </LandingContent4>
                                <LandingContent10>학생 5명이 함께 만든 크리스마스 시즌 서비스입니다.</LandingContent10>
                                <LandingContent5>
                                    <br/>🎅 웰컴투 진저호텔은 수익을 창출하지 않으며, 비영리 서비스입니다.
                                </LandingContent5>
                                <LandingInstaImage>
                                    <img src={LandingInsta}/>
                                </LandingInstaImage>
                                <LandingEmailImage>
                                    <img src={LandingEmail}/>
                                </LandingEmailImage>
                            </LandingPageModalInner>
            </LandingModal>}
      </HotelContainer>
    </>
  );
}

export default Home2;

const Cookie = styled.img`
  width: 180px;
  height: 218px;


`

const ModalLayout2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ReadLetterBtn = styled.button`
      width: 108px;
      height: 29px;
      border-width: 1.5px;
      border-style: dashed;
      border-color: white;
      border-radius: 1px;
      background-color: #AF2010;
      outline-width: 9px;
      outline-color:  #AF2010;
      outline-style: solid;

      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: white;
      
      margin-top: 9px;
      margin-bottom: 9px;
      :disabled {
          background-color: rgba(175, 32, 16, 0.5);
          outline-color:  rgba(175, 32, 16, 0.5);
    }
`
const SmallCookie = styled.img`
  width: 40px;
  height: 54px;
  position: relative;
  top: 10px;
  margin: 0 auto;
`
const TextDiv = styled.div`
  width: 182px;
  height: 66px;
  margin-bottom: 30px;
`
const Footer = styled.div`
  height: 75px;
`
const GingerTitle = styled.div`
  position: absolute;

  top: 6%;
  bottom: 18.26%;

  font-family: 'humanbeomseok';
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 48px;

  text-align: center;

  color: #000000;
`
const GingerContent = styled.div`
  position: absolute;

  top: 20%;
  bottom: 12.8%;

  font-family: 'humanbeomseok';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21.72px;
  text-align: center;
  
  color: #000000;
`

const HotelGuide = styled.div`
    text-align: center; 
    font-weight: 500;
    font-size: 12px;
`

const LandingGingerImage = styled.div`
    position: relative;
    height: 116px;
    width: 220px;
    left: 0px;
    top: 100px;
`
const LandingInstaImage = styled.div`
    position: relative;
    height: 10px;
    width: 10px;
    left: 40px;
    top: 60px;
`
const LandingEmailImage = styled.div`
    position: relative;
    height: 10px;
    width: 10px;
    left: 40px;
    top: 66px;
`
const LandingButtonHotel1 = styled.div`
    position: relative;
    width: 35px;
    height: 35px;
    left: 130px;
    top: -200px;
`
const LandingContent5 = styled.div`
    position: relative;
    left: 0%;
    top: 10%;
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