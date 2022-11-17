import { authService, firebaseInstance } from "fbase";
import { useState } from "react";
import Title from '../assets/Welcome.svg';
import { Container, InputStyle, TitleDiv } from "../routes/styles/style";
import { RedButton } from "../routes/styles/buttonstyle";
import { useHistory } from "react-router-dom";

const HomeData = ({ userObj }) => {
    const [editing, setEditing] = useState(false);
    const [homeData, setHomeData] = useState("Welcome to " + authService.currentUser.displayName + " Ginger Hotel");
    const toggleEditing = () => setEditing((prev) => !prev);

    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setHomeData(value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setEditing(false);
    }

    return (
        <div>
            {editing ? (
                <>
                    <form onSubmit={onSubmit}>
                        <input onChange={onChange} value={homeData} required />
                        <input type="submit" value="update" />
                    </form>
                    <button onClick={toggleEditing}>Cancel</button>
                </>
            ) : (
                <>
                    <div style={{fontSize: '30px', fontWeight: "bold"}}>{homeData}</div>
                    {userObj && (
                        <>
                            <button onClick={toggleEditing}>수정</button>
                        </>
                    )}
                </>
            )}
        </div>
    );

}        
export default HomeData;