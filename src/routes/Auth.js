
import { authService, firebaseInstance } from "fbase";
import AuthForm from "components/AuthForm";
import Google from '../assets/GoogleLogin.svg';
import Facebook from '../assets/FaceBookLogin.svg';
import Github from '../assets/GithubLogin.svg';
import { Container } from './styles/style';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { dbService } from "fbase";
import LandingInsta from '../assets/LandingPage/LandingInsta.svg';

const Auth = ( {userObj} ) => {
    const history = useHistory();

    const onSocialClick = async (event) => {
        const {
            target: {name},
        } = event;
        let provider;
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "facebook") {
            provider = new firebaseInstance.auth.FacebookAuthProvider();
        } else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        try {
            await authService.signInWithPopup(provider);
            const id = authService.currentUser.uid;
            dbService.collection("hotelOwner").doc(id).get()
            .then((doc) => {
                try {
                    const userNickname = doc.data().nickname;
                    history.push("/hotel/" + id);
                } catch (error) {
                    history.push("/InitConfigData");
                }
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
            <Container style={{marginBottom: "100px"}}>
                <AuthForm userObj={userObj}/>
                <HotelGuide style={{fontFamily: "humanbeomseok"}}>
                <br/>   
                    * 소셜로그인은 삼성/크롬 브라우저를 이용해 주세요! *
                </HotelGuide>
                <ButtonStyle>
                    <img src={Google} onClick={onSocialClick} name="google" />
                    <img src={Facebook} onClick={onSocialClick} name="facebook" />
                    <img src={Github} onClick={onSocialClick} name="github" />
                </ButtonStyle>
                <HotelGuide style={{fontFamily: "humanbeomseok"}}>
                <br/><br/>
                계속 진행하면 진저호텔 <a href="https://puffy-mum-94e.notion.site/814bde5a30de4059b00d0c416e1eba96" target="_blank">서비스 이용약관</a>에 동의하고 <br/><br/>
                <a href="https://puffy-mum-94e.notion.site/3feab163a1034d5a8a9ba69390854301" target="_blank">개인정보 처리방침</a>을 읽었음을 인정하는 것으로 간주됩니다.
                </HotelGuide>
            </Container>
    )


};

export default Auth;

const ButtonStyle = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`


const HotelGuide = styled.div`
    text-align: center; 
    font-weight: 500;
    font-size: 12px;
`

const InstaLink = styled.a`
  background-color: transparent !important;
  background-image: none !important;
  border-color: transparent;
  border: none;
  color: #FFFFFF;
`

const InstaImage = styled.span`
    position: relative;
    height: 10px;
    width: 10px;
`