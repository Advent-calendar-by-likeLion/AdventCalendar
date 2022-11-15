import styled from 'styled-components';
import Hotel from '../assets/Hotel.svg';
import LoginBar from '../assets/LoginBar.svg';
import SignupBar from '../assets/SignupBar.svg';
import Title from '../assets/Welcome.svg';
import { useHistory } from 'react-router-dom';
import { Container, HotelImg, TitleDiv } from './styles/style';

const Start = () => {
    const history = useHistory();
    const onclickLoginBar = () => {
        history.push("/login");
    }
    const onclickSignupBar = () => {
        history.push("/signup");
    }
  return (
      <>
      <Container>
        <img src={Title} />
        <TitleDiv>진저호텔에서 보내는 25일간의 휴일</TitleDiv>
        <HotelImg src={Hotel} />
        <ButtonLayout>
            <img src={LoginBar} onClick={onclickLoginBar} />
            <img src={SignupBar} onClick={onclickSignupBar} />
        </ButtonLayout>
      </Container>
      </>
  )
}

export default Start;

const ButtonLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12.57px;
    margin-top: 62.02px;
    margin-bottom: 142px;
`
