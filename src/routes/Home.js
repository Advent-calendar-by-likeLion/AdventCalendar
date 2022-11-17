import { dbService, storageService } from "fbase";
import Nweet from "../components/Nweet";

import styled from 'styled-components';
import Hotel from '../assets/Hotel.svg';
import LoginBar from '../assets/LoginBar.svg';
import SignupBar from '../assets/SignupBar.svg';
import Title from '../assets/Welcome.svg';
import { useHistory } from 'react-router-dom';
import { Container, HotelImg, TitleDiv, ButtonLayout } from './styles/style';
import { useEffect, useState } from 'react';
import { RedButton } from "./styles/buttonstyle";
import Modal from '../components/Modal/Modal';
import { CardLayout, MessageCard } from "../components/Modal/styles";

const Home = ({ userObj }) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [attachment, setAttachment] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {
      dbService.collection("nweets").onSnapshot((snapshot) => {
        const newArray = snapshot.docs.map((document) => ({
            id: document.id,
            ...document.data(),
        }))
        setNweets(newArray);
      })
    }, []);


    const history = useHistory();
    const toWrite = () => {
        history.push("/write");
    }

    const onClickOpenModal = () => {
      setModalOpen(true);

    }
    const onClickCloseModal = () => {
      setModalOpen((prev) => !prev);
    }

  return (
      <>
        <Container>
          <img src={Title} />
          <TitleDiv>진저호텔에서 보내는 25일간의 휴일</TitleDiv>
          <HotelImg src={Hotel} />
          <RedButton onClick={toWrite}>편지 보내기</RedButton>
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
        </Container>
        {/* <div>
              {
              nweets.map((nweet) => (
                  <Nweet 
                  key={nweet.id} 
                  nweetObj={nweet}
                  isOwner={nweet.creatorId === userObj.uid}
                  />
              ))}
        </div> */}
      </>
  )
}

export default Home;