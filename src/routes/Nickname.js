import { dbService } from "fbase";

import styled from 'styled-components';
import Hotel from '../components/Hotel';
import { RedButton, WhiteButton } from './styles/buttonstyle';
import HotelSnow from '../assets/SnowHotel.svg';
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

const Nickname = ({userObj, refreshUser}) => {

    //const [nickname, setNickname] = useState("");
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const history = useHistory();

    useEffect(() => {
        addHotelOwner();
    }, []);

    const onChange = (event) => {
        const {
          target: { value },
        } = event;
        setNewDisplayName(value);
      };

    const addHotelOwner = async () => {
        let data = "";
        //await dbService.collection("hotelOwner").doc(userObj.uid).set({nickname : null});
        // await dbService.collection("hotelOwner").doc(userObj.uid).get()
        // .then((doc) => {data = doc.data()});
        // console.log(data);
        // console.log(data["nickname"]);
        // setNewDisplayName(data["nickname"]);

        await dbService.collection("hotelOwner").doc(userObj.uid).set({
            nickname: userObj.displayName,
            doorInfo: {
                1 : false,
                2 : false,
                3 : false,
                4 : false,
                5 : false,
                6 : false,
                7 : false,
                8 : false,
                9 : false,
                10 : false,
                11 : false,
                12 : false,
                13 : false,
                14 : false,
                15 : false,
                16 : false,
                17 : false,
                18 : false,
                19 : false,
                20 : false,
                21 : false,
                22 : false,
                23 : false,
                24 : false,
                25 : false,
            }
        });
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        //await dbService.collection("hotelOwner").doc(userObj.uid).update({nickname : nickname});
        if (userObj.displayName !== newDisplayName) {
            await userObj.updateProfile({
                displayName : newDisplayName
            }).then(function() {
                var displayName = userObj.displayName;
            }, function(error) {
                alert(error);
            });
        }

        await dbService.collection("hotelOwner").doc(userObj.uid).update({
            nickname: newDisplayName
        });

        history.push("/hotel/" + userObj.uid);
    }
    

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
                <InputStylenick type="text" placeholder='닉네임' 
                defaultValue={userObj.displayName ? userObj.displayName : ''}
                onChange={onChange}/>
                    <h1 style={{
                        fontSize: "22px",
                    }}
                    >의 진저호텔</h1>
            </NicknameInput>
            <form onSubmit={onSubmit}>
                <RedButton>완성하기</RedButton>
            </form>

            <br/>
            <WhiteButton onClick={ () => {
            history.goBack();
            } } >뒤로 가기</WhiteButton>
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