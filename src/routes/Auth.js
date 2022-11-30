
import { authService, firebaseInstance } from "fbase";
import AuthForm from "components/AuthForm";
import Google from '../assets/GoogleLogin.svg';
import Facebook from '../assets/FacebookLogin.svg';
import Github from '../assets/GithubLogin.svg';
import { Container } from './styles/style';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { dbService } from "fbase";

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
            <Container>
                <AuthForm userObj={userObj}/>
                <ButtonStyle>
                    <img src={Google} onClick={onSocialClick} name="google" />
                    <img src={Facebook} onClick={onSocialClick} name="facebook" />
                    <img src={Github} onClick={onSocialClick} name="github" />
                </ButtonStyle>
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