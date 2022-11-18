import React from "react";
import "./styles.css";
import styled from "styled-components";
import Hotel2 from '../assets/Hotel2.svg';
import { GridBox, Hotelbg, HotelContainer } from './styles/HotelStyle';
import { Container } from "./styles/style";
import Progressbar from "./Progressbar";
import Hotel from "../components/Hotel";
import { RedButton } from "./styles/buttonstyle";
import { useHistory, useParams } from "react-router-dom";

const Home2 = ({ userObj, match }) => {
  const history = useHistory();
  const {id} = useParams(); // hetelOwnerId
  const toWrite = () => {
    history.push("/write/" + id);
  }

  return (
    <>
      <HotelContainer> 
        <Progressbar />
        <Hotel />
        <RedButton onClick={toWrite}>편지 보내기</RedButton>
      </HotelContainer>
    </>
  );
}

export default Home2;