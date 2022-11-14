import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle,faGithub, faArtstation } from "@fortawesome/free-brands-svg-icons";

import { authService, firebaseInstance } from "fbase";
import AuthForm from "components/AuthForm";

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
        <div className="authContainer">
            <FontAwesomeIcon
                icon={faArtstation}
                color={"#04AAFF"}
                size="3x"
                style={{marginBottom: 30}}
            />
            <AuthForm />
            <div className="authBtns">
                <button onClick={onSocialClick} name="google" className="authBtn">Continue With Google <FontAwesomeIcon icon={faGoogle}/></button>
                <button onClick={onSocialClick} name="github" className="authBtn">Continue With Github <FontAwesomeIcon icon={faGithub}/></button>
            </div>
        </div>
    )



};



export default Auth;