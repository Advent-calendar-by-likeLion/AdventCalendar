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

const Home = ({ userObj }) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [attachment, setAttachment] = useState("");

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
  return (
      <>
        <Container>
          <img src={Title} />
          <TitleDiv>진저호텔에서 보내는 25일간의 휴일</TitleDiv>
          <HotelImg src={Hotel} />
          <RedButton onClick={toWrite}>편지 보내기</RedButton>
        </Container>
        <div>
              {
              nweets.map((nweet) => (
                  <Nweet 
                  key={nweet.id} 
                  nweetObj={nweet}
                  isOwner={nweet.creatorId === userObj.uid}
                  />
              ))}
        </div>
      </>
  )
}

export default Home;