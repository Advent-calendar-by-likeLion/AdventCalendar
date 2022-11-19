import { authService  } from "fbase";
import { useHistory } from "react-router-dom";
import { WhiteButton } from "./styles/buttonstyle";

const Profile = () => {
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };
    const history = useHistory();
    return (
        <>
            <div style={{textAlign: 'center', marginTop: '450px'}}>
                <WhiteButton onClick={onLogOutClick} justify-content='flex'>Log Out</WhiteButton>
            </div>
            
        </>
    )
}

export default Profile;