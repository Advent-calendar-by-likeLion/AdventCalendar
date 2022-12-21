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
import BackIcon from "../assets/BackIc.svg";

const GingerPage = ({userObj}) => {
    const {id} = useParams();
    const [username, setUsername] = useState("");
    const history = useHistory();
    // const [isModalOpen, setModalOpen] = useState(false);

    const [info, setInfo] = useState([]);
    const todayDate = new Date().getDate();

    useEffect(() => {
        dbService.collection("hotelOwner").doc(authService.currentUser.uid).onSnapshot((doc) => {
            setUsername(doc.data().nickname);
            setInfo(doc.data().windowInfo);
            
            /* 25일 모든 창문 일괄 Open과 관련된 코드입니다. 일단 비활성화 합니다.
            if (todayDate < 25) {
                setInfo(doc.data().windowInfo);
            }
            if (todayDate >= 25) {
                try {
                    setInfo(doc.data().gingerManInfo);
                } catch (error) {
                    setInfo(doc.data().windowInfo); // 혹시 모를 오류를 대비해서...아예 쿠키가 없는거보다는 모든 쿠키가 다 있는 것이...
                }
            }
            */
        })
    }, []);

    // const onClickOpenModal = (item) => {
    //     setModalOpen(true);
    //     console.log("click");
    // }
    // const onClickCloseModal = (item) => {
    //     setModalOpen((prev) => !prev);
    //     console.log("click");
    //   }
    
    const onClickBack = () => {
        history.push("/hotel/" + id);
    }

    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ,22 , 23, 24, 25];
    
    return (
        <>
            <Container>
                <div>
                <BackIcStyle onClick={onClickBack}><img src={BackIcon} style={{position:"relative", left:"-80px", top:"-10px"}}></img></BackIcStyle>
                <TitleDiv>{username}의 진저맨 앨범</TitleDiv>
                </div>
                <GingerBoxLayout>
                    <GingerGrid>
                    {items.map((item) => (
                        <>
                        <FlexGingerCard>
                        {/* <GingerManCard item={item} onClick={() => onClickOpenModal(item)}> */}
                        <GingerManCard item={item}>
                        <SmallGingerCardLayout>
                            <GingerWindow item={item} info={info} />
                        </SmallGingerCardLayout>
                        </GingerManCard>
                        <GingerDate item={item} info={info}/>
                        </FlexGingerCard>
                        </>
                    ))}
                    </GingerGrid>
                    {/* {isModalOpen && <MypageModal item={items.item} closeModal={onClickCloseModal}>
                        <GingerCardLayout>
                            <MPGingerModal info={info}/>
                        </GingerCardLayout>
                        </MypageModal>} */}
                </GingerBoxLayout>
            </Container>
        </>
    );
}

export default GingerPage;

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
    height: auto;
    /* margin-bottom: 30px; */
    font-family: humanbeomseok;
`
const GingerBoxLayout = styled.div`
    margin-top: 50px;
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
const BackIcStyle = styled.button`

    background-color: transparent;
    border: none;
`