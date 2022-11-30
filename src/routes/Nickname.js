import { dbService } from "fbase";

import styled from 'styled-components';
import Hotel from '../components/Hotel';
import { RedButton, WhiteButton, GreenButton } from './styles/buttonstyle';
import HotelSnow from '../assets/SnowHotel.svg';
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { faWeight } from "@fortawesome/free-solid-svg-icons";

const Nickname = ({userObj}) => {

    const [description, setDescription] = useState("");
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const history = useHistory();

    useEffect(() => {

        dbService.collection("hotelOwner").doc(userObj.uid).get()
        .then((doc) => {
          setDescription(doc.data().description === "" ? "" : doc.data().description)
        });

    }, []);

    const onChange = (event) => {
        const {
          target: { value },
        } = event;
        setNewDisplayName(value);
    };

    const onChangeDesc = (event) => {
        const {
          target: { value },
        } = event;
        setDescription(value);
    };

    const clickHotelColorButton = () => {
        saveNicknameAndDescription();
        history.push("/hotelcolor");
    }

    const saveNicknameAndDescription = async () => {
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
            nickname: newDisplayName,
            description: description.replaceAll("\r\n", "<br>") 
        });
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        //await dbService.collection("hotelOwner").doc(userObj.uid).update({nickname : nickname});
        saveNicknameAndDescription();
        history.push("/hotel/" + userObj.uid);
    }
    

  return (
      <>
        <Container>
            <div style={{
                marginTop: "95px",
                height: "29px",
                fontSize: "22px",  
                fontWeight: "bold",
                fontFamily: "humanbeomseok"

            }}>누구의 진저호텔인가요?</div>
            <HotelSubCon>
                <HotelImg src={HotelSnow} />
            </HotelSubCon>
            <NicknameInput>
                <InputStylenick style={{fontWeight:"bold", fontFamily: "humanbeomseok"}} type="text" placeholder='닉네임' defaultValue={userObj.displayName ? userObj.displayName : ''}
                onChange={onChange}/>
                    <h1 style={{fontSize: "20px", fontWeight: "bold", fontFamily: "humanbeomseok"}} >의 진저호텔</h1>
            </NicknameInput>
            <TxtAreaDesc maxLength={1000} type="text" placeholder='내 호텔을 소개해 주세요!' onChange={onChangeDesc}
            defaultValue={description ? description : ''}
            />
            <br/>
            <br/>
            <br/>
            <GreenButton onClick={clickHotelColorButton}>호텔 색상 정하기</GreenButton>
            <br/>
            <br/>
            <HotelGuide>* 호텔 이름과 색상은 나중에도 수정할 수 있어요!</HotelGuide>
            <br/>
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

    margin-top: 22.84px;
    margin-bottom: 20px;
`
const TxtAreaDesc = styled.textarea`
    width: 230px;
    min-height: 93px;
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
    font-family: "humanbeomseok";
    resize: none;
    white-space: pre-wrap;
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
const InputStylenick = styled.input`
    width: 115px;
    height: 25px;
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
const HotelGuide = styled.div`
    text-align: center; 
    font-weight: 500;
    font-size: 12px;
`