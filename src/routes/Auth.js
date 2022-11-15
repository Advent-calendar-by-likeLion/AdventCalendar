import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle,faGithub, faArtstation } from "@fortawesome/free-brands-svg-icons";

import { authService, firebaseInstance } from "fbase";
import AuthForm from "components/AuthForm";
import Google from '../assets/Google.svg';
import Github from '../assets/Github.svg';
import { Container } from './styles/style';
import styled from 'styled-components';

const Auth = () => {
    const onSocialClick = async (event) => {
        //console.log(event.target.name);
        const {
            target: {name},
        } = event;
        let provider;
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }

        const data = await authService.signInWithPopup(provider);
        console.log(data);
    }

    return (
            <Container>
                <AuthForm />
                <ButtonStyle>
                    <img src={Google} onClick={onSocialClick} name="google" />
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