import { authService  } from "fbase";
import { useHistory } from "react-router-dom";
const Profile = () => {
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };
    const history = useHistory();
    return (
        <>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    )
}

export default Profile;