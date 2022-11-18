import React from "react";
import "./styles.css";
import styled from "styled-components";
import Hotel2 from '../assets/Hotel2.svg';
import { GridBox, Hotelbg, HotelContainer } from './styles/HotelStyle';
import { Container } from "./styles/style";
import Progressbar from "./Progressbar";
import Hotel from "../components/Hotel";

const Home2 = ({ userObj }) => {
  return (
    <>
    <HotelContainer> 
      <Progressbar />
      <Hotel />
    </HotelContainer>
    </>
  );
}

export default Home2;