import React, { useEffect, useState } from "react";
import {authService} from "fbase"
import "./styles.css";
import styled from "styled-components";
import Hotel2 from '../assets/Hotel2.svg';
import { GridBox, Hotelbg, HotelContainer } from './styles/HotelStyle';
import { Container, TitleDiv } from "./styles/style";
import Progressbar from "./Progressbar";
import Hotel from "../components/Hotel";
import { RedButton, WhiteButton } from "./styles/buttonstyle";
import { useHistory, useParams } from "react-router-dom";
import { dbService } from "fbase";

import HotelName from "../components/HotelName";
import Modal from "../components/Modal/Modal";
import { CardLayout, MessageCard } from "../components/Modal/styles";
import Nweet from "../components/Nweet";

const Home2 = ({ userObj }) => {
  const history = useHistory();
  const {id} = useParams(); // hetelOwnerId
  const toWrite = () => {
    history.push("/write/" + id);
  }
    
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  const [attachment, setAttachment] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  let uid = 0;
  let msgSize1 = 0;

  const [msgSize, setMsgSize] = useState(0);


  useEffect(() => {

    if (userObj) {
      uid = userObj.uid;
    }     

    //dbService.collection("nweets").where("creatorId", "==", userObj.uid).onSnapshot((snapshot) => {
    dbService.collection(id).onSnapshot((snapshot) => {
      const newArray = snapshot.docs.map((document) => ({
          id: document.id,
          ...document.data(),
      }))
      setMsgSize(newArray.length);
      setNweets(newArray);
    })
  }, []);

  const onClickOpenModal = () => {
    setModalOpen(true);
  }

  const onClickCloseModal = () => {
    setModalOpen((prev) => !prev);
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
        <Progressbar msgCount={msgSize}/>
        <TitleDiv style={{marginBottom:'10px'}}>진저호텔에서 보내는 25일간의 휴일</TitleDiv>
          {/* <HotelName userObj={userObj} /> */}
          <Hotel />
          { 
          
          id === (userObj ? userObj.uid : 0) ?  
          <>
            <RedButton onClick={onClickOpenModal}>오늘의 편지</RedButton>
            <br/>
            <RedButton onClick={copyUrl}>호텔 링크 복사하기</RedButton>
            <br/>
            <WhiteButton onClick={onLogOutClick}>로그아웃</WhiteButton>
          </>
          :  
          <>
            <RedButton onClick={toWrite}>편지 보내기</RedButton>
            <br/>
            <WhiteButton onClick={onLogOutClick}>로그아웃</WhiteButton>
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


