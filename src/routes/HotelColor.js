import { dbService } from "fbase";

import styled from 'styled-components';
import Hotel from '../components/Hotel';
import { RedButton, CircleButton } from './styles/buttonstyle';
import HotelSnow from '../assets/SnowHotel.svg';
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

const HotelColor = ({userObj}) => {
    const history = useHistory();

    const changeRoof1 = () => {
        document.getElementById("roof1").style.fill="#AF2010";
        document.getElementById("roof2").style.fill="#AF2010";
    }

    const changeRoof2 = () => {
        document.getElementById("roof1").style.fill="#FF9494";
        document.getElementById("roof2").style.fill="#FF9494";
    }

    const changeRoof3 = () => {
        document.getElementById("roof1").style.fill="#FFD372";
        document.getElementById("roof2").style.fill="#FFD372";
    }

    const changeRoof4 = () => {
        document.getElementById("roof1").style.fill="#829460";
        document.getElementById("roof2").style.fill="#829460";
    }

    const changeRoof5 = () => {
        document.getElementById("roof1").style.fill="#0E5E6F";
        document.getElementById("roof2").style.fill="#0E5E6F";
    }

    const changeRoof6 = () => {
        document.getElementById("roof1").style.fill="#005452";
        document.getElementById("roof2").style.fill="#005452";
    }

    const changeRoof7 = () => {
        document.getElementById("roof1").style.fill="#B4CDE6";
        document.getElementById("roof2").style.fill="#B4CDE6";
    }

    const changeRoof8 = () => {
        document.getElementById("roof1").style.fill="#30475E";
        document.getElementById("roof2").style.fill="#30475E";
    }

    const changeRoof9 = () => {
        document.getElementById("roof1").style.fill="#A4688F";
        document.getElementById("roof2").style.fill="#A4688F";
    }

    const changeRoof10 = () => {
        document.getElementById("roof1").style.fill="#4C243C";
        document.getElementById("roof2").style.fill="#4C243C";
    }


    const changeBody1 = () => {
        document.getElementById("body").style.fill="#AF2010";
    }

    const changeBody2 = () => {
        document.getElementById("body").style.fill="#FF9494";
    }

    const changeBody3 = () => {
        document.getElementById("body").style.fill="#FFD372";
    }
    
    const changeBody4 = () => {
        document.getElementById("body").style.fill="#829460";
    }

    const changeBody5 = () => {
        document.getElementById("body").style.fill="#0E5E6F";
    }

    const changeBody6 = () => {
        document.getElementById("body").style.fill="#005452";
    }

    const changeBody7 = () => {
        document.getElementById("body").style.fill="#B4CDE6";
    }

    const changeBody8 = () => {
        document.getElementById("body").style.fill="#30475E";
    }

    const changeBody9 = () => {
        document.getElementById("body").style.fill="#A4688F";
    }

    const changeBody10 = () => {
        document.getElementById("body").style.fill="#4C243C";
    }

  return (
      <>
        <Container>
            <div style={{
                marginTop: "141px",
                height: "29px",
                fontSize: "20px",
                fontWeight: "500px",
            }}>
                내 호텔은 무슨 색인가요?
            </div>

            <svg width="169" height="56" viewBox="0 0 169 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="roof1" d="M1.03595 40.5715L17.3368 20.0576H84.3598H151.384L167.81 40.5715H1.03595Z" fill="white" stroke="black"/>
            <path id="roof2" d="M49.6453 40.8164L84.2627 0.764626L118.88 40.8164H49.6453Z" fill="white" stroke="black"/>
            </svg>
        <br/>


            <svg width="169" height="235" viewBox="0 0 169 235" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect id="body" x="0.5" y="0.5" width="167.851" height="233.045" fill="white" stroke="black"/>
            </svg>
        <br/>
        지붕
                <CircleButton onClick={changeRoof1} style={{background: '#AF2010'}}></CircleButton>
                <CircleButton onClick={changeRoof2} style={{background: '#FF9494'}}></CircleButton>
                <CircleButton onClick={changeRoof3} style={{background: '#FFD372'}}></CircleButton>
                <CircleButton onClick={changeRoof4} style={{background: '#829460'}}></CircleButton>
                <CircleButton onClick={changeRoof5} style={{background: '#0E5E6F'}}></CircleButton>
                <CircleButton onClick={changeRoof6} style={{background: '#005452'}}></CircleButton>
                <CircleButton onClick={changeRoof7} style={{background: '#B4CDE6'}}></CircleButton>
                <CircleButton onClick={changeRoof8} style={{background: '#30475E'}}></CircleButton>
                <CircleButton onClick={changeRoof9} style={{background: '#A4688F'}}></CircleButton>
                <CircleButton onClick={changeRoof10} style={{background: '#4C243C'}}></CircleButton>
            <br/>
            호텔
                <CircleButton onClick={changeBody1} style={{background: '#AF2010'}}></CircleButton>
                <CircleButton onClick={changeBody2} style={{background: '#FF9494'}}></CircleButton>
                <CircleButton onClick={changeBody3} style={{background: '#FFD372'}}></CircleButton>
                <CircleButton onClick={changeBody4} style={{background: '#829460'}}></CircleButton>
                <CircleButton onClick={changeBody5} style={{background: '#0E5E6F'}}></CircleButton>
                <CircleButton onClick={changeBody6} style={{background: '#005452'}}></CircleButton>
                <CircleButton onClick={changeBody7} style={{background: '#B4CDE6'}}></CircleButton>
                <CircleButton onClick={changeBody8} style={{background: '#30475E'}}></CircleButton>
                <CircleButton onClick={changeBody9} style={{background: '#A4688F'}}></CircleButton>
                <CircleButton onClick={changeBody10} style={{background: '#4C243C'}}></CircleButton>

            </Container>
      </>
  )
}

export default HotelColor

const Container = styled.div`
    margin: 0 auto;
    align-items: center;
    text-align: center;
`
const NicknameInput = styled.form`
    display: flex;
    flex-direction: row;
    justify-items: center;
    justify-content: center;
    align-items: center;

    margin-top: 92.84px;
    margin-bottom: 63px;
`
const InputStylenick = styled.input`
    width: 115px;
    height: 35px;
    background-color: #FCF4E9;
    color:  #000000;

    border-color: transparent;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #BAB8B5;
    padding-left: 10px;
    text-align: center;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;

    ::placeholder {
        color: #BAB8B5;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 33px;
        text-align: center; 
    }

    :focus {
        outline: none;
    }
`
const HotelSubCon = styled.div`
    margin: 0 auto;
`
const HotelImg = styled.img`
    width: 210px;
    height: 315.16px;
    margin-top: 27px;
`