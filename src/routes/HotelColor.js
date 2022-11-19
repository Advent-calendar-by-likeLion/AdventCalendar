import { dbService } from "fbase";
import styled from 'styled-components';
import Hotel from '../components/Hotel';
import { RedButton, CircleButton } from './styles/buttonstyle';
import HotelSnow from '../assets/SnowHotel.svg';
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import DefaultHotel from '../components/DefaultHotel';

const HotelColor = ({userObj}) => {
    const history = useHistory();
    let roofColor = "";
    let bodyColor = "";

    const setRoofColor = (name) => {
        document.getElementById("roof1").style.fill=name;
        document.getElementById("roof2").style.fill=name;
    }

    const changeRoof = (event) => {
        const {target: {name}} = event;
        setRoofColor(name);
        roofColor = name;
    }

    const setBodyColor = (name) => {
        document.getElementById("body1").style.fill=name;
        document.getElementById("body2").style.fill=name;
    }

    const changeBody = (event) => {
        const {target: {name}} = event;
        setBodyColor(name);
        bodyColor = name;
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

            <DefaultHotel />
            <br/>
            <div>
                <div style={{marginTop:'10px'}}>
                    <p style={{marginBottom:'10px'}}>지붕 색깔</p>
                    <CircleButton onClick={changeRoof} style={{background: '#AF2010'}} name="#AF2010"></CircleButton>
                    <CircleButton onClick={changeRoof} style={{background: '#FF9494'}} name="#FF9494"></CircleButton>
                    <CircleButton onClick={changeRoof} style={{background: '#FFD372'}} name="#FFD372"></CircleButton>
                    <CircleButton onClick={changeRoof} style={{background: '#829460'}} name="#829460"></CircleButton>
                    <CircleButton onClick={changeRoof} style={{background: '#0E5E6F'}} name="#0E5E6F"></CircleButton>
                    <CircleButton onClick={changeRoof} style={{background: '#005452'}} name="#005452"></CircleButton>
                    <CircleButton onClick={changeRoof} style={{background: '#B4CDE6'}} name="#B4CDE6"></CircleButton>
                    <CircleButton onClick={changeRoof} style={{background: '#30475E'}} name="#30475E"></CircleButton>
                    <CircleButton onClick={changeRoof} style={{background: '#A4688F'}} name="#A4688F"></CircleButton>
                    <CircleButton onClick={changeRoof} style={{background: '#4C243C'}} name="#4C243C"></CircleButton>
                </div>
                <br/>
                <div>
                    <p style={{marginBottom:'10px'}}>호텔 색깔</p>
                    <CircleButton onClick={changeBody} style={{background: '#AF2010'}} name="#AF2010"></CircleButton>
                    <CircleButton onClick={changeBody} style={{background: '#FF9494'}} name="#FF9494"></CircleButton>
                    <CircleButton onClick={changeBody} style={{background: '#FFD372'}} name="#FFD372"></CircleButton>
                    <CircleButton onClick={changeBody} style={{background: '#829460'}} name="#829460"></CircleButton>
                    <CircleButton onClick={changeBody} style={{background: '#0E5E6F'}} name="#0E5E6F"></CircleButton>
                    <CircleButton onClick={changeBody} style={{background: '#005452'}} name="#005452"></CircleButton>
                    <CircleButton onClick={changeBody} style={{background: '#B4CDE6'}} name="#B4CDE6"></CircleButton>
                    <CircleButton onClick={changeBody} style={{background: '#30475E'}} name="#30475E"></CircleButton>
                    <CircleButton onClick={changeBody} style={{background: '#A4688F'}} name="#A4688F"></CircleButton>
                    <CircleButton onClick={changeBody} style={{background: '#4C243C'}} name="#4C243C"></CircleButton>
                </div>
            </div>
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