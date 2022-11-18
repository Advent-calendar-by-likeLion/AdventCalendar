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

const Home2 = ({ userObj, match }) => {
  const history = useHistory();
  const {id} = useParams(); // hetelOwnerId
  const toWrite = () => {
    history.push("/write/" + id);
  }
    
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  const [attachment, setAttachment] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    //dbService.collection("nweets").where("creatorId", "==", userObj.uid).onSnapshot((snapshot) => {
    dbService.collection("nweets").onSnapshot((snapshot) => {
      const newArray = snapshot.docs.map((document) => ({
          id: document.id,
          ...document.data(),
      }))
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


  return (
    <>
      <HotelContainer> 
        <Progressbar />
        <TitleDiv style={{marginBottom:'10px'}}>진저호텔에서 보내는 25일간의 휴일</TitleDiv>
          <HotelName userObj={userObj} />
          <Hotel />

          <RedButton onClick={toWrite}>편지 보내기</RedButton>
          <WhiteButton onClick={onLogOutClick}>로그아웃</WhiteButton>
          <button onClick={onClickOpenModal}>모달창 테스트</button>
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