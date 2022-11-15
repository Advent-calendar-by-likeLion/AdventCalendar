import { authService, firebaseInstance } from "fbase";
import { useState } from "react";
import Title from '../assets/Welcome.svg';
import DisLoginBar from '../assets/DisLoginBar.svg';
import LoginBar from '../assets/LoginBar.svg';
import styled from "styled-components";
import { Container, InputStyle, TitleDiv } from "../routes/styles/style";
import { RedButton } from "../routes/styles/buttonstyle";

const AuthForm = () => {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onChange = (event) => {
        const {
            target: {name, value},
        } = event;
        if (name === "id") {
            setId(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
              data = await authService.signlnWithEmailAndPassword(id, password);  
            console.log(data);
        } catch (error) {
            setError(error.message);
        } 
    }

    const buttonDisabled = id && password;

    return (
        <>
            <img src={Title} />
            <TitleDiv>진저호텔에서 보내는 25일간의 휴일</TitleDiv>
                <form onSubmit={onSubmit}>
                    <LoginFormStyle>
                        <InputLayout>
                            <InputStyle name="id" type="text" placeholder="아이디" required value={id} onChange={onChange}/>
                            <InputStyle name="password" type="password" placeholder="비밀번호" required value={password} onChange={onChange}/>
                        </InputLayout>
                        <RedButton disabled={buttonDisabled? false : true} type="submit">로그인</RedButton>
                        {error && <Errorspan className="authError">{error}</Errorspan>}
                    </LoginFormStyle>
                </form>
        </>
    );

}

export default AuthForm;

const InputLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    margin-top: 72px;
    margin-bottom: 45px;
`
const LoginFormStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Errorspan = styled.span`
    margin-top: 5px;
    width: 281px;
    font-size: 10px;
    line-height: 15px;
    align-items: center;
    text-align: center;
    word-break: break-all;
    color: #AF2010;
`