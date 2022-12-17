import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {dbService, authService, storageService} from "fbase"
import "./styles.css";
import { GridBox, Hotelbg, HotelContainer } from './styles/HotelStyle';
import { Container, TitleDiv, TitleDiv2, GingerCookie } from "./styles/style";
import Progressbar, { TodayMessageDiv } from "./Progressbar";
import Hotel from "../components/Hotel";
import { RedButton, WhiteButton, GreenButton, RedRoundButton } from "./styles/buttonstyle";
import { useHistory, useParams } from "react-router-dom";

import HotelName from "../components/HotelName";
import Modal from "../components/Modal/Modal";
import GingerModal from "../components/Modal/GingerModal";
import { CardLayout, MessageCard, GingerCardLayout } from "../components/Modal/styles";
import Nweet from "../components/Nweet";
import MessageModal from "../components/Modal/MessageModal";
import MypageImg from "../assets/Mypage.svg";

// 쿠키 관련 모음
import WhoGinger from '../assets/cookie/WhoGinger.svg';
import BellBoyCookie from '../assets/cookie/BellBoyCookie.svg';
import SleepyheadCookie from '../assets/cookie/SleepyheadCookie.svg';
import BabyCookie from '../assets/cookie/Baby_Cookie.svg';
import PirateCookie from '../assets/cookie/PirateCookie.svg';
import GreatCookie from '../assets/cookie/GreatCookie.svg';
import MilkHotSpringCookie from '../assets/cookie/MilkHotSpringCookie.svg';
import DetectiveCookie from '../assets/cookie/DetectiveCookie.svg';
import ClassicCookie from '../assets/cookie/ClassicCookie.svg';
import KingCookie from '../assets/cookie/KingCookie.svg';
import HappyCookie from '../assets/cookie/HappyCookie.svg';
import ScaredCookie from '../assets/cookie/ScaredCookie.svg';
import CollegeCookie from '../assets/cookie/CollegeCookie.svg';
import DraculaCookie from '../assets/cookie/DraculaCookie.svg';
import SoldierCookie from '../assets/cookie/SoldierCookie.svg';
import ChefCookie from '../assets/cookie/ChefCookie.svg';
import SnowmanCookie from '../assets/cookie/SnowmanCookie.svg';
import RonaldCookie from '../assets/cookie/RonaldCookie.svg';
import ColdManCookie from '../assets/cookie/ColdManCookie.svg';

// Landing Page 관련
import { LandingRedButton, LandingTitle1, LandingTitle2, LandingTitle3, LandingTitle4, LandingContent1, LandingContent2, LandingContent3, LandingContent4, LandingContent10, LandingContent11 } from './styles/style';
import LandingModal from '../components/Modal/LandingModal';
import { LandingPageModalInner } from "../components/Modal/styles";
import LandingPage from '../assets/LandingPage/Welcome.svg';
import LandingModalButton from '../assets/LandingPage/LandingModalButton.svg';
import LandingImage from '../assets/LandingPage/LandingImageGinger.svg';
import LandingInsta from '../assets/LandingPage/LandingInsta.svg';
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";

const Home2 = ({ userObj }) => {

  // Need to add Daily Cookies here.
  const cookies = new Array(WhoGinger, BellBoyCookie, SleepyheadCookie, BabyCookie, PirateCookie, GreatCookie, MilkHotSpringCookie,
    DetectiveCookie, ClassicCookie, KingCookie, HappyCookie, ScaredCookie, CollegeCookie, DraculaCookie, SoldierCookie, ChefCookie,
    SnowmanCookie, RonaldCookie, ColdManCookie);

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
  
  // cookie
  const [gingerTitle, setGingerTitle] = useState("");
  const [gingerContent, setGingerContent] = useState("");
  const [gingerName, setGingerName] = useState("");
  
  const [isModalOpen, setModalOpen] = useState(false);
  const [isGingerModalOpen, setGingerModalOpen] = useState(false);
  const [msgCount, setMsgCount] = useState(0);
  const [goalCount, setGoalCount] = useState(1);
  const [isFull, setIsFull] = useState(false);
  const [isMsgFull, setIsMsgFull] = useState(false);
  const [isGoLetter, setIsGoLetter] = useState(false);
  const todayDate = new Date().getDate();

  useEffect(async () => {
    Config();
    if (userObj) {
      uid = userObj.uid;
    }

    // windowCount에 오늘 날짜를 입력해줌: 이렇게하면 오늘 날짜와 동일한 Index의 창문을 열 수 있음
    dbService.collection("hotelOwner").doc(id).update({
      windowCount: todayDate.toString()
    });

    // 만약 오늘 이후의 창문이 열려있다면 다 닫는 코드를 작성: 이미 열려버린 창문들을 처리하기 위함
    // 25일 이후로는 처리할 필요가 없음. 그때는 오류도 거의 사라질 것으로 예상됨으로 코드 삭제해도 될 것으로 보임
    if (todayDate < 25) {
      dbService.collection("hotelOwner").doc(id).onSnapshot((snapshot) => {
        for (let i = todayDate + 1; i <= 25; i++) {
          if (snapshot.data().windowInfo[i]) {
            dbService.collection("hotelOwner").doc(id).update({
              [`windowInfo.${i}`] : false,
            });
          }
        }
      });
    }

    await dbService.collection("hotelOwner").doc(id).onSnapshot((doc) => {
      setDisplayName(doc.data().nickname);
      setDescription(doc.data().description);
      setWindowCount(doc.data().windowCount);
      setWindowInfo(doc.data().windowInfo);
      setLastDate(doc.data().lastDate);
    });

    dbService.collection("CookieInfo").doc(todayDate.toString()).get().then((doc) => {
      setGingerTitle(doc.data().gingerTitle);
      setGingerContent(doc.data().gingerContent);
      setGingerName(doc.data().gingerName);
    })



  }, []);

  useEffect(() => {
    dbService.collection("hotelOwner").doc(id).onSnapshot((snapshot) => {
      // 목표 개수를 채웠을 때는 오늘 날짜에 해당하는 창문을 열어줍니다.
      if (msgCount >= goalCount) {
        dbService.collection("hotelOwner").doc(id).update({
          [`windowInfo.${todayDate}`] : true,
        });
        setIsFull(true);
      }

      // 창문을 최초에 열었을 때, 오늘의 편지 버튼을 계속 활성화로 유지하기 위한 코드 : 오류 있어서 일단 비활성화
      // if (snapshot.data().windowInfo[todayDate]) {
      //   setIsFull(true);
      // }
      
      if (msgCount !== 0 && msgCount >= 20) {
        setIsMsgFull(true);
      } else {
        setIsMsgFull(false);
      }
    });
    
    // if (new Date("20" + lastDate) < new Date("20" + getCurrentDate())) {
    //   addWindowCount(); // Todo: need to validate
    // }

    // true고 date가 local과 같을떄.
  }, [msgCount]);

  useEffect(() => {
    dbService.collection(`${id}_${windowCount}`).orderBy('timestamp','asc').onSnapshot((snapshot) => {
      const newArray = snapshot.docs.map((document) => ({
          id: document.id,
          ...document.data(),
      }))
      setMsgCount(newArray.length);
      setNweets(newArray);
        // if (newArray.length > 0) {
        //   if (new Date("20" + newArray[0].dateFormat) < new Date("20" + getCurrentDate())) {
        //     addWindowCount();
        //   }
        // }
    })

  }, [windowCount]);

  const addWindowCount = async () => { // Todo: Need to connect DB
    let date = new Date();
    let offset = date.getTimezoneOffset() * 60000; //ms단위라 60000곱해줌
    let dateOffset = new Date(date.getTime() - offset);

    await dbService.collection("hotelOwner").doc(id).update({
        windowCount : Number(windowCount) + 1,
        lastDate : dateOffset.toISOString().slice(2, 10),
    });
  }

  const Config = () => {
    
    // get the msg goal count by firestore db.
    dbService.collection("AdminConfig").doc("AdminConfig").onSnapshot((doc) => {
        setGoalCount(doc.data().goalCount);
      });

  }


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

    dbService.collection("CookieInfo").doc(windowCount).onSnapshot((doc) => {
      setGingerTitle(doc.data().gingerTitle);
      setGingerContent(doc.data().gingerContent);
      setGingerName(doc.data().gingerName);
    })


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

  const onClickGingerAlbum = () => {
    history.push("/ginger/" + id);
  }


  //링크 복사 버튼 코드
  let nowUrl = window.location.href;

  const copyUrl = () => { 
      navigator.clipboard.writeText(nowUrl).then(res=>{
      alert("주소가 복사되었습니다!");
    }).catch(() => {
      alert("해당 브라우저에서 클립보드 복사가 지원되지 않으므로, 상단 url을 복사하거나 삼성/크롬 브라우저 사용을 권장드립니다.");
    });
  }

  const createHotel = () => {
    history.push("/"); // 경로 설정 추후에 다시 할 예정
}

const GoMypage = () => {
  history.push("/mypage/" + id);
}

  return (
    <>
      <HotelContainer style={{fontFamily: "humanbeomseok"}}> 
        <Progressbar msgCount={msgCount} goalCount={goalCount}/>
        { id === (userObj ? userObj.uid : 0) ?
          <>
            <TodayMessageGuide>오늘 받아야 하는 편지 개수는 매일 바뀝니다</TodayMessageGuide>
            <img src={MypageImg} style={{position:"relative", right:"-140px", top:"-75px"}} onClick={GoMypage}/>
          </>
          :
          <>
            <TodayMessageGuide></TodayMessageGuide>
          </>
        }
        <br/>
        <TitleDiv style={{marginBottom:'10px', fontFamily: "humanbeomseok"}}>진저호텔에서 보내는 25일간의 휴일</TitleDiv>
        <HotelName userObj={userObj} displayName={displayName}/> 
        <br/>
        <TitleDiv2 style={{marginBottom:'10px', fontFamily: "humanbeomseok"}}>{description}</TitleDiv2>
          {/* <HotelName userObj={userObj} /> */}
          <Hotel userObj={userObj}/>
          { 
          id === (userObj ? userObj.uid : 0) ?  
          
          <>
            <LandingButtonHotel1>
              <img src={LandingModalButton} onClick={onClickOpenLandingModal}/>
            </LandingButtonHotel1>  
            <HotelGuide style={{marginBottom: "5px"}}>12월 9일부터 날짜와 동일한 숫자의 창문이 열립니다!</HotelGuide>
            <HotelGuide style={{marginBottom: "10px"}}>이미 받은 편지들은 지워지지 않으니 걱정마세요!</HotelGuide>
            <BtnFlex>
            <RedButton2 disabled={!isFull} onClick={onClickOpenGingerModal}>오늘의 편지</RedButton2>
            <GingerBtn onClick={onClickGingerAlbum}>
              <img src={WhoGinger} style={{width:"20px", height:"25.71px", paddingTop:"7px"}}></img>
            </GingerBtn>
            </BtnFlex>
            {!isFull ? <><br/><HotelGuide>* 오늘의 편지를 채워야 열람할 수 있어요! *</HotelGuide></>:<></>}
            <br/>
            <GreenButton onClick={copyUrl}>호텔 링크 복사하기</GreenButton>
            <br/>
            <WhiteButton onClick={onLogOutClick}>로그아웃</WhiteButton>
            {/* <br/>
            <RedButton onClick={DeleteHotel}>회원 탈퇴</RedButton>  */}
            <Footer />
          </>
          :  
          <>
            <LandingButtonHotel2>
              <img src={LandingModalButton} onClick={onClickOpenLandingModal}/>
            </LandingButtonHotel2> 
            <br/>
            <RedButton disabled={isMsgFull} onClick={toWrite}>편지 보내기</RedButton>
            {
              isMsgFull ?
              <>
              <br/><HotelGuide>* 오늘의 편지 마감! 내일 작성해 주세요 *</HotelGuide>
              
              </>
              :
              isFull ?
              <><br/><HotelGuide>보낼 수 있는 편지가 {20 - msgCount}개 남았습니다!</HotelGuide></>
              :
              <></>
            }
            <br/>
            <GreenButton onClick={createHotel}>호텔 만들기 / 로그인</GreenButton>            
            <br/>
          </>
          }


                
          {isGingerModalOpen && <GingerModal dateFormat={nweets[0].dateFormat} closeModal={onClickCloseGingerModal}>
                        {isGoLetter ? <Modal dateFormat={nweets[0].dateFormat} closeModal={onClickCloseModal}>
                                          <h1>도착한 편지</h1>
                                          <CardLayout>
                                          {nweets.map((nweet) => (
                                          <MessageCard>
                                              <Nweet 
                                                key={nweet.id} 
                                                nweetObj={nweet}
                                                tableNm={`${id}_${windowCount}`}
                                              />
                                          </MessageCard>
                                          ))}
                                          </CardLayout>
                                        </Modal> :
                            <GingerCardLayout>
                              <GingerTitle>{gingerTitle}</GingerTitle>
                              <br/>
                              <GingerContent> 
                                {gingerContent}
                              </GingerContent>
                              <GingerCookie src={cookies[windowCount]} 
                              />
                              <RedRoundButton onClick={onClickGoLetter}>편지 읽기</RedRoundButton>
                            </GingerCardLayout>}
                          </GingerModal>} 
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
                                    🎄 하루에 하나의 창문만 오픈 가능해요!!
                                    <br/>
                                    🎄 정해진 편지 개수를 채워야 창문을 열 수 있어요!!
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
                                      받은 서비스입니다.
                                </LandingContent6>
                                <InstaLink target="_blank" href="https://www.instagram.com/gingerhotel_welcome/">
                                  <LandingInstaImage>
                                      <img src={LandingInsta}/>
                                  </LandingInstaImage>
                                </InstaLink>
                            </LandingPageModalInner>
            </LandingModal>}

      </HotelContainer>
    </>
  );
}

export default Home2;

const InstaLink = styled.a`
  background-color: transparent !important;
  background-image: none !important;
  border-color: transparent;
  border: none;
  color: #FFFFFF;
`
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
  
  white-space: pre-wrap;
`

const HotelGuide = styled.div`
    text-align: center; 
    font-weight: 500;
    font-size: 12px;
`

const TodayMessageGuide = styled.div`
  text-align: center; 
  font-weight: 500;
  font-size: 12px;
  color: #585858;
  margin-bottom: 30px;
`

const LandingGingerImage = styled.div`
    position: relative;
    height: 116px;
    width: 220px;
    left: 0px;
    top: 92px;
`
const InstaImage = styled.span`
    position: relative;
    height: 10px;
    width: 10px;
`
const LandingInstaImage = styled.div`
    position: relative;
    height: 10px;
    width: 10px;
    left: -5px;
    top: -112px;
`
const LandingButtonHotel1 = styled.div`
    position: relative;
    width: 35px;
    height: 35px;
    right: 148px;
    top: -726px;
`
const LandingButtonHotel2 = styled.div`
    position: relative;
    width: 35px;
    height: 35px;
    right: 130px;
    top: -685px;
`
const LandingContent5 = styled.div`
    position: relative;
    left: 0%;
    top: 8%;
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
    top: 6.3%;
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
const RedButton2 = styled.button`
    width: 195px;
    height: 29px;
    /* border-width: 1.5px;
    border-style: dashed;
    border-color: white;
    border-radius: 2px;
    background-color: #AF2010;
    outline-width: 9px;
    outline-color:  #AF2010;
    outline-style: solid; */

    box-shadow:  0 0 0 10px #AF2010;

    border: 1.5px dashed white;
    /* outline:  solid #AF2010; */
    box-shadow: 0 0 0 8px #AF2010, 0 0 0 9px white;

    border-radius: 2px;
    background-color: #AF2010; 

    font-weight: 400;
    font-size: 14px;
    font-family: "humanbeomseok";
    line-height: 20px;
    color: white;
    
    margin-top: 9px;
    margin-bottom: 9px;
    :disabled {
        background-color: rgba(175, 32, 16, 0.5);
        outline-color:  rgba(175, 32, 16, 0.5);
        box-shadow: 0 0 0 8px rgba(175, 32, 16, 0.5), 0 0 0 9px white;
    }
`
const GingerBtn = styled.div`
  width: 65px;
  height: 38px;

  border: 3px solid #E07272;
  border-radius: 10px;
  background-color: white;

  text-align: center;
`
const BtnFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;

  justify-content: center;
  align-items: center;
`
// const Mypage = styled.button`
//   position: relative;
//   right: -140px;
//   top: -60px;

//   width: 67px;
//   height: 25.26px;

//   border-width: 1.5px;
//   border-style: dashed;
//   border-color: white;
//   background-color: #4C243C;
//   outline-width: 5px;
//   outline-color:  #4C243C;
//   outline-style: solid;

//   font-weight: 400;
//   font-size: 14px;
//   font-family: "humanbeomseok";
//   line-height: 16px;
//   color: white;

//   padding-top: 2px;
//   border-radius: 50px;
// `
