import "./styles.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { dbService, authService } from "fbase"
import { Container, GingerCookie } from "./styles/style";
import { RedButton, WhiteButton } from "./styles/buttonstyle";
import styled from "styled-components";
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";
import { GingerCardLayout } from "../components/Modal/styles";
import DetectiveCookie from '../assets/cookie/DetectiveCookie.svg';
import SmallGingerCard from "../components/SmallGingerCard";
import MypageModal from '../components/MypageModal';
import { useParams } from "react-router-dom";
import GingerWindow from '../components/Window/GingerWindow';
import GingerDate from "../components/Window/GingerDate";
import MPGingerModal from "../components/Modal/MPGingerModal";

const MyPage = ({userObj}) => {
    const {id} = useParams();
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [activeDeleteButton, setActiveDeleteButton] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    const [info, setInfo] = useState([]);
    const [date, setDate] = useState("");

    useEffect(() => {
        dbService.collection("hotelOwner").doc(authService.currentUser.uid).onSnapshot((doc) => {
            setUsername(doc.data().nickname);
            setInfo(doc.data().windowInfo);
            
        })
    }, []);

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

    const onClickOpenModal = (item) => {
        setModalOpen(true);
        console.log("click");
    }
    const onClickCloseModal = (item) => {
        setModalOpen((prev) => !prev);
        console.log("click");
      }
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ,22 , 23, 24, 25];
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
                <GingerBoxLayout>
                    <GingerGrid>
                    {items.map((item) => (
                        <>
                        <FlexGingerCard>
                        <GingerManCard item={item} onClick={() => onClickOpenModal(item)}>
                        <SmallGingerCardLayout>
                            <GingerWindow item={item} info={info} />
                        </SmallGingerCardLayout>
                        </GingerManCard>
                        <GingerDate item={item} info={info}/>
                        </FlexGingerCard>
                        </>
                    ))}
                    </GingerGrid>

                </GingerBoxLayout>
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
const GingerBoxLayout = styled.div`
    margin-top: 35px;
    margin-bottom: 35px;

    padding-top: 25px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 40px;

    box-sizing: border-box;
    background-color: white;
    border: 1px dashed #DF6F6F;
    border-radius: 20px;
    box-shadow: 0 0 0 11px white, 0 0 0 12px #DF6F6F;

    width: 316px;

    height: fit-content;
`
const GingerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    row-gap: 15px;
    column-gap: 20px;
    justify-items: center;
`
const GingerManCard = styled.div`
    width: 130px;
    height: 202.69px;
    background: white;
    border-radius: 5px;
    text-align: center;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;
    border: 3px solid #A4D6CB;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    font-weight: 400;
    font-size: 15px;
    line-height: 22px;

    margin-bottom: 15px;
`
const FlexGingerCard = styled.div`
    display: flex;
    flex-direction: column;
`
const SmallGingerCardLayout = styled.div`
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;

`