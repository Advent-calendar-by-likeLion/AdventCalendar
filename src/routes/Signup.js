import Title from '../assets/Welcome.svg';
import { Container, InputStyle, TitleDiv } from './styles/style';
import DisSignup from '../assets/DisSignup.svg';
import styled from 'styled-components';
import { RedButton, WhiteButton } from './styles/buttonstyle';
import { useState } from 'react';
import { authService } from 'fbase';
import { useHistory } from 'react-router-dom';

const Signup = ({userObj}) => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const history = useHistory();

  const onChange = (event) => {
    const {target: {name, value}} = event;
    if (name === "email") {
      setEmail(value)
    } else if (name === "password1") {
      setPassword1(value)
    } else if (name === "password2") {
      setPassword2(value)
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (password1 == password2) {
        await authService.createUserWithEmailAndPassword(email, password1);
        history.push("/InitConfigData");
      } else if (password1 == "" || password2 == "") {
        alert("비밀번호를 입력해주세요.");
      } else if (password1 != password2) {
        alert("비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
      <>
      <Container>
        <img src={Title} />
        <TitleDiv>진저호텔에서 보내는 25일간의 휴일</TitleDiv>
        <form onSubmit={onSubmit}>
          <InputLayout2>
              <InputStyle placeholder='이메일' name="email" type="email" required value={email} onChange={onChange} />
              <InputStyle placeholder='비밀번호' name="password1" type="password" required value={password1} onChange={onChange} />
              <InputStyle placeholder='비밀번호 확인' name="password2" type="password" required value={password2} onChange={onChange}/>
          </InputLayout2>
          <ButtonLayout>
            <RedButton disabled={false} type="submit">내 호텔 만들기</RedButton>
            <br/>
            <WhiteButton onClick={ () => {
              history.goBack();
            }}>뒤로 가기</WhiteButton>
          </ButtonLayout>
        </form>
      </Container>
      </>
  )
}

export default Signup

const InputLayout2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    margin-top: 72px;
    margin-bottom: 39px;
`

const ButtonLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12.57px;
    margin-top: 62.02px;
    margin-bottom: 142px;
    align-items: center;
`