import { authService, firebaseInstance } from "fbase";
import { useState } from "react";
import Title from '../assets/Welcome.svg';
import MainTitle from '../assets/WelcomeAddedFont.svg';
import DisLoginBar from '../assets/DisLoginBar.svg';
import LoginBar from '../assets/LoginBar.svg';
import styled from "styled-components";
import { Container, InputStyle, TitleDiv } from "../routes/styles/style";
import { RedButton } from "../routes/styles/buttonstyle";
import { useHistory } from "react-router-dom";
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";

const AuthForm = (userObj) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();

    const onChange = (event) => {
        const {
            target: {name, value},
        } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await authService.signInWithEmailAndPassword(email, password); 
            const id = authService.currentUser.uid;
            history.push("/hotel/" + id);
        } catch (error) {
            if (error.message == "The password is invalid or the user does not have a password.") {
                alert("잘못된 비밀번호 또는 이메일 입니다. 다시 확인하고 입력해주세요.")
            }
            if (error.message == "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.") {
                alert("연속으로 비밀번호를 틀리셨습니다. 5분 뒤에 다시 로그인해주세요.")
            }
            setError(error.message);
        } 
    }

    const buttonDisabled = email && password;

    return (
        <>
            <img src={MainTitle} />
            {/* <TitleDiv>진저호텔에서 보내는 25일간의 휴일</TitleDiv> */}
                <form onSubmit={onSubmit}>
                    <LoginFormStyle>
                        <InputLayout>
                            <InputStyle name="email" type="email" placeholder="이메일" required value={email} onChange={onChange}/>
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