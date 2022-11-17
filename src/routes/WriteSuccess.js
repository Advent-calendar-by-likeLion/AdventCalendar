import { LetterStyle, WriteSubTitle } from "./styles/style"
import Letter from '../assets/Letter.svg';
import styled from 'styled-components';
import { RedButton, WhiteButton } from './styles/buttonstyle';

const WriteSuccess= () => {
  return (
      <Container>
          <LetterStyle src={Letter} />
          <WriteSuccessTitle>편지를 보냈어요!</WriteSuccessTitle>
          <WriteSubTitle>아직 내 호텔이 없나요?</WriteSubTitle>
          <WriteSubTitle>내 호텔을 만들면</WriteSubTitle>
          <WriteSubTitle>친구에게 편지를 받을 수 있어요.</WriteSubTitle>
          <ButtonLayout>
            <RedButton>내 호텔 만들기</RedButton>
            <WhiteButton>로그인</WhiteButton>
          </ButtonLayout>
      </Container>
  )
}

export default WriteSuccess

const WriteSuccessTitle = styled.div`
    text-align: center;
    width: 141px;
    height: 29px;
`
const ButtonLayout = styled.div`
    text-align: center;
    margin-top: 64px;

    display: flex;
    flex-direction: column;
    gap: 16px;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 224px;
`