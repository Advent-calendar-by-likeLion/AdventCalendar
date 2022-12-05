import "./styles.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { dbService, authService } from "fbase"
import { Container } from "./styles/style";
import { RedButton, WhiteButton } from "./styles/buttonstyle";
import styled from "styled-components";
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";

const MyPage = ({userObj}) => {
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [activeDeleteButton, setActiveDeleteButton] = useState(false);
    
    // useEffect(() => {
    //     dbService.collection("hotelOwner").doc(authService.currentUser.uid).onSnapshot((doc) => {
    //         setUsername(doc.data().nickname);
    //     })
    // }, []);

    const DeleteHotel = () => {
        if (!activeDeleteButton) {
            alert("다시 한번 누르면 정말 회원이 삭제됩니다. 신중히 고민 후 삭제해주세요. 삭제된 정보를 복구할 수 없습니다.");
            setActiveDeleteButton(true);
        }

        if (activeDeleteButton) {
            authService.currentUser.delete();
            alert("그동안 저희 진저호텔을 사용해주셔서 감사합니다.");
            history.push("/");
        }
    }

    const onclickPasswordReset = () => {
        authService.sendPasswordResetEmail(window.prompt("진저호텔에 가입한 이메일을 입력해 주세요. 가입한 이메일이 실존하지 않는 이메일인 경우 비밀번호를 재설정할 수 없습니다.", "예시) ginger@naver.com")).then(function() {
            alert("입력한 이메일로 메일을 전송했습니다.");
        }).catch(function(error) {
            if (error.message == "The email address is badly formatted.") {
                alert("올바른 형식의 이메일을 입력해주세요.")
            }
            if (error.message == "There is no user record corresponding to this identifier. The user may have been deleted.") {
                alert("진저호텔에 가입된 기록이 없는 이메일입니다.");
            }
        })
    }

    return (
        <>
            <Container>
                <TitleDiv>{username}의 마이페이지</TitleDiv>
                <GuideDiv>삭제된 데이터는 복구할 수 없습니다</GuideDiv>
                <GuideDiv>신중하게 생각하고 눌러주세요!</GuideDiv>
                <br/>
                {/* 아직 서비스 적용 안됐기 때문에 버튼 비활성화 */}
                <RedButton disabled={true} onClick={DeleteHotel}>내 호텔 삭제하기</RedButton>
                <br/>
                <WhiteButton onClick={onclickPasswordReset}>비밀 번호 재설정</WhiteButton>
            </Container>
        </>
    );
}

export default MyPage;

const GuideDiv = styled.div`
    text-align: center; 
    font-weight: 500;
    font-size: 12px;
    margin-bottom: 10px;
    font-family: humanbeomseok;
`

const TitleDiv = styled.div`
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    width: 100%;
    height: 66px;
    margin-bottom: 30px;
    font-family: humanbeomseok;
`