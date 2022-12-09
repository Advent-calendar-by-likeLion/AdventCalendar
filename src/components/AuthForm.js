import { authService, firebaseInstance } from "fbase";
import { useState } from "react";
import Title from '../assets/Welcome.svg';
import MainTitle from '../assets/WelcomeAddedFont.svg';
import DisLoginBar from '../assets/DisLoginBar.svg';
import LoginBar from '../assets/LoginBar.svg';
import styled from "styled-components";
import { Container, InputStyle, TitleDiv } from "../routes/styles/style";
import { RedButton, WhiteButton } from "../routes/styles/buttonstyle";
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

    const onclickPasswordReset = () => {
        authService.sendPasswordResetEmail(window.prompt("진저호텔에 가입할 때 사용한 이메일을 입력해 주세요.\n\n가입한 이메일이 실존하지 않는 이메일인 경우 비밀번호를 재설정할 수 없습니다.\n\n소셜로그인을 사용하여 회원가입하신 경우 이 기능을 절대 사용하지 마세요.", "예시) ginger@naver.com")).then(function() {
            alert("입력한 이메일로 메일을 전송했습니다.\n(보내드린 메일이 스팸메일함에 있을 수도 있으니 잘 확인해주세요.)");
        }).catch(function(error) {
            if (error.message == "The email address is badly formatted.") {
                alert("올바른 형식의 이메일을 입력해주세요.")
            }
            if (error.message == "There is no user record corresponding to this identifier. The user may have been deleted.") {
                alert("진저호텔에 가입된 기록이 없는 이메일입니다.");
            }
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await authService.signInWithEmailAndPassword(email, password); 
            const id = authService.currentUser.uid;
            history.push("/hotel/" + id);
        } catch (error) {
            if (error.message == "The password is invalid or the user does not have a password.") {
                alert("잘못된 비밀번호 또는 이메일입니다. 다시 확인하고 입력해주세요.");
            }
            if (error.message == "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.") {
                alert("연속으로 비밀번호 또는 이메일을 틀리셨습니다. 나중에 다시 로그인해주세요.");
            }
            if (error.message == "There is no user record corresponding to this identifier. The user may have been deleted.") {
                alert("입력된 이메일을 가진 등록된 사용자가 없습니다. 회원가입 후 이용해주세요.");
            }
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
                        <br/>
                        <WhiteButton onClick={onclickPasswordReset}>비밀번호를 잊어버리셨나요?</WhiteButton>
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