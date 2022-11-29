import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {dbService, authService, storageService} from "fbase"
import "./styles.css";
import { GridBox, Hotelbg, HotelContainer } from './styles/HotelStyle';
import { Container, TitleDiv, TitleDiv2 } from "./styles/style";
import Progressbar from "./Progressbar";
import Hotel from "../components/Hotel";
import { RedButton, WhiteButton } from "./styles/buttonstyle";
import { useHistory, useParams } from "react-router-dom";

import HotelName from "../components/HotelName";
import Modal from "../components/Modal/Modal";
import { CardLayout, MessageCard } from "../components/Modal/styles";
import Nweet from "../components/Nweet";
import CookieImg from '../assets/JinegrMan.svg';
import MessageModal from "../components/Modal/MessageModal";
import Cookie2 from '../assets/Cookie.svg';

const Home2 = ({ userObj }) => {
  const history = useHistory();
  const {id} = useParams(); // hetelOwnerId
  const toWrite = () => {
    history.push("/write/" + id);
  }
    
  const [nweets, setNweets] = useState([]);
  const [attachment, setAttachment] = useState("");
  const [isModalOpen2, setModalOpen2] = useState(false);
  const [isModalLetter, setIsModalLetter] = useState(false);

  let uid = 0;
  const [msgSize, setMsgSize] = useState(0);
  const [displayName, setDisplayName] = useState("");
  const [description, setDescription] = useState("");
  
  const [isModalOpen, setModalOpen] = useState(false);
  const [msgCount, setMsgCount] = useState(0);
  const [goalCount, setGoalCount] = useState(0);
  const [isFull, setIsFull] = useState(false);

  useEffect(() => {

    if (userObj) {
      uid = userObj.uid;
    }     

    dbService.collection("hotelOwner").doc(id).get()
    .then((doc) => {
      setDisplayName(doc.data().nickname)
      setDescription(doc.data().description)
    });
    dbService.collection(id).onSnapshot((snapshot) => {
      const newArray = snapshot.docs.map((document) => ({
          id: document.id,
          ...document.data(),
      }))
      setMsgCount(newArray.length);
      setNweets(newArray);

      initWindowInfo();
    })

  }, []);

  useEffect(() => {
    if (msgCount == goalCount) {
      setIsFull(true);
    }
  }, [msgCount]);

  const initWindowInfo = () => {
    dbService.collection("AdminConfig").doc("AdminConfig").get()
      .then((doc) => {
        setGoalCount(doc.data().goalCount);
      });
  }

  const onClickOpenModal = () => {
    setModalOpen(true);
  }

  const onClickOpenModal2 = () => {
    setModalOpen2(true);
  }

  const onClickCloseModal = () => {
    setModalOpen((prev) => !prev);
  }

  const onClickCloseModal2 = () => {
    setModalOpen2((prev) => !prev);
  }

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };


  //링크 복사 버튼 코드
  let nowUrl = window.location.href;

  const copyUrl = () => { 
      navigator.clipboard.writeText(nowUrl).then(res=>{
      alert("주소가 복사되었습니다!");
    })
  }

  return (
    <>
      <HotelContainer> 
        <Progressbar msgCount={msgCount} goalCount={goalCount}/>
        <br/>
        <TitleDiv style={{marginBottom:'10px'}}>진저호텔에서 보내는 25일간의 휴일</TitleDiv>
        <HotelName userObj={userObj} displayName={displayName}/>
        <br/>
        <TitleDiv2 style={{marginBottom:'10px'}}>{description}</TitleDiv2>
          {/* <HotelName userObj={userObj} /> */}
          <Hotel/>
          { 
          
          id === (userObj ? userObj.uid : 0) ?  
          <>
            <RedButton onClick={onClickOpenModal}>오늘의 편지</RedButton>
            <br/>
            <RedButton onClick={copyUrl}>호텔 링크 복사하기</RedButton>
            <br/>
            <WhiteButton onClick={onLogOutClick}>로그아웃</WhiteButton>
            <Footer />
          </>
          :  
          <>
            <br/>
            <RedButton onClick={toWrite}>편지 보내기</RedButton>
            <br/>
          </>
          }          
          {isModalOpen && <Modal closeModal={onClickCloseModal}>
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
                          </Modal>}
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
  top: 10pxpx;
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