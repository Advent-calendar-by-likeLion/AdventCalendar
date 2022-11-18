import styled from 'styled-components';
import Hotel from '../components/Hotel';
import { RedButton } from './styles/buttonstyle';
import HotelSnow from '../assets/SnowHotel.svg';
import { useState } from 'react';

const Nickname = () => {

  return (
      <>
        <Container>
            <div style={{
                marginTop: "141px",
                height: "29px",
                fontSize: "20px",
                fontWeight: "500px",

            }}>누구의 진저호텔인가요?</div>
            <HotelSubCon>
                <HotelImg src={HotelSnow} />
            </HotelSubCon>
            <NicknameInput>
                <InputStylenick type="text" placeholder='낙네임'/>
                    <h1 style={{
                        fontSize: "22px",
                    }}
                    >의 진저호텔</h1>
            </NicknameInput>
            <RedButton>완성하기</RedButton>
        </Container>
      </>
  )
}

export default Nickname

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