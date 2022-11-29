import { dbService } from "fbase";

import styled from 'styled-components';
import { RedButton, WhiteButton } from './styles/buttonstyle';
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

const AdminConfig = ({userObj}) => {

    const [goalCount, setGoalCount] = useState(userObj.displayName);
    const history = useHistory();

    useEffect(() => {

        /*dbService.collection("AdminConfig").doc("AdminConfig").get()
        .then((doc) => {
          setDescription(doc.data().description === "" ? "" : doc.data().description)
        });*/

    }, []);

    const onChange = (event) => {
        const {
          target: { value },
        } = event;
        setGoalCount(value);
    };


    const onSubmit = async (event) => {
        event.preventDefault();

        await dbService.collection("AdminConfig").doc("AdminConfig").update({
            goalCount: goalCount,
        });

        alert(`오늘의 편지 갯수 ${goalCount}개 로 변경`);
        //history.push("/hotel/" + userObj.uid);
    }
    

  return (
      <>
        <Container>

            <div style={{marginTop: "141px", fontSize: '30px', fontWeight: "bold"}}>관리자페이지</div>
            <br/>
            <div style={{
                height: "29px",
                fontSize: "20px",  
                fontWeight: "500px",

            }}>오늘의 편지 최대 갯수</div>

            <NicknameInput>
                <InputStylenick type="text" placeholder='숫자 입력'
                onChange={onChange}/>
            </NicknameInput>
            <br/>
            <form onSubmit={onSubmit}>
                <RedButton>편지 갯수 변경</RedButton>
            </form>

            <br/>
            <WhiteButton onClick={ () => {
                history.push("/");
            } } >시작화면</WhiteButton>
        </Container>
      </>
  )
}

export default AdminConfig

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
    font-family: none;
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
