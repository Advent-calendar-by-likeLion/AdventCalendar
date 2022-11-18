import { authService, firebaseInstance } from "fbase";
import { useState } from "react";
import Title from '../assets/Welcome.svg';
import { Container, InputStyle, TitleDiv } from "../routes/styles/style";
import { RedButton } from "../routes/styles/buttonstyle";
import { useHistory } from "react-router-dom";

const HotelName = ({ userObj }) => {
    const [editing, setEditing] = useState(false);
    const [hotelName, setHotelName] = useState(userObj.displayName);
    const toggleEditing = () => setEditing((prev) => !prev);

    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setHotelName(value);
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
                        <input onChange={onChange} value={hotelName} required />
                        <input type="submit" value="update" />
                    </form>
                    <button onClick={toggleEditing}>Cancel</button>
                </>
            ) : (
                <>
                    <div style={{fontSize: '30px', fontWeight: "bold"}}>{hotelName}의 진저호텔</div>
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
export default HotelName;