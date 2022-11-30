import { dbService } from "fbase";
import styled from 'styled-components';
import Hotel from '../components/Hotel';
import { RedButton, CircleButton } from './styles/buttonstyle';
import HotelSnow from '../assets/SnowHotel.svg';
import { useHistory, Link } from "react-router-dom";
import NoRoofwall from '../assets/NoRoofWall.svg';
import "./styles.css";
import ColorPickerRoof from "../components/ColorPickerRoof";
import ColorPickerBody from "../components/ColorPickerBody";

const HotelColor = ({userObj}) => {
    const history = useHistory();
    let roofColor = "";
    let bodyColor = "";
    
    const colors = ["#AF2010", "#FF9494", "#c07c0f", "#829460", "#0E5E6F", "#005452", "#B4CDE6", "#30475E", "#A4688F", "#4C243C"];

    const setRoofColor = (name) => {
        document.getElementById("roof1").style.fill = name;
        document.getElementById("roof2").style.fill = name;
    }
    
    const changeRoof = (event) => {
        const {target: {value}} = event;
        setRoofColor(value);
        roofColor = value;
    }
    
    const setBodyColor = (name) => {
        document.getElementById("body").style.fill=name;
    }

    const changeBody = (event) => {
        const {target: {value}} = event;
        setBodyColor(value);
        bodyColor = value;
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("hotelOwner").doc(userObj.uid).update({
            roofColor : roofColor,
            bodyColor : bodyColor,
        });
        history.push("/hotel/" + userObj.uid);
    }

    const dbEx = async (event) => {
        await dbService.collection("hotelOwner").doc(userObj.uid).update({
            roofColor : roofColor,
            bodyColor : bodyColor,
        });
        history.push("/Nickname");
    }
    

    /* const onSubmit = async (event) => { // Todo: Need to connect DB
        // event.preventDefault();
        // await dbService.collection("hotelOwner").doc(userObj.uid).update({nickname : nickname});
        // history.push("/hotel/" + userObj.uid);
    } */

  return (
      <>
        <Container>
            <div style={{
                marginTop: "141px",
                height: "29px",
                fontSize: "22px",
                fontWeight: "bold",
                position:"relative",
                fontFamily: "humanbeomseok"
            }}>
                내 호텔은 무슨 색인가요?
            </div>
            
            <ColorHotelLayout>
                <RoofLayout>
                    <svg width="169" height="56" viewBox="0 0 169 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="roof1" d="M1.03595 40.5715L17.3368 20.0576H84.3598H151.384L167.81 40.5715H1.03595Z" fill="white" stroke="black"/>
                    <path id="roof2"  d="M49.6453 40.8164L84.2627 0.764626L118.88 40.8164H49.6453Z" fill="white" stroke="black"/>
                    </svg>
                    <WallLayout>
                    <svg width="169" height="235" viewBox="0 0 169 235" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect id="body" x="0.5" y="0.5" width="167.851" height="233.045" fill="white" stroke="black"/>
                    </svg>
                    </WallLayout>
                </RoofLayout>
                <NoRoofWall src={NoRoofwall} />
            </ColorHotelLayout>
        <PalleteLayout>
        <PalleteBox>
        <TextStyle>지붕</TextStyle>
            <PalleteFlex>
                <div class="custom-radios">
                    {colors.map((value) => <ColorPickerRoof changeRoof={changeRoof} color={value} type="roof"/>)}
                </div>
            </PalleteFlex>
            <br/>
        <TextStyle>호텔</TextStyle>
            <PalleteFlex>
                <div class="custom-radios">
                    {colors.map((value) => <ColorPickerBody changeBody={changeBody} color={value} type="body"/>)}
                </div>
            </PalleteFlex>
        </PalleteBox>
        </PalleteLayout>
        <br/>
        <br/>
        <br/>
        <form onSubmit={onSubmit}>
                <RedButton>완성하기</RedButton>
        </form>
    </Container>
    </>
  )
}

export default HotelColor

const Container = styled.div`
    margin: 0 auto;
    align-items: center;
    text-align: center;
`
const RoofLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 5px;
`

const NoRoofWall = styled.img`
    width: 330px;
    height: 318.16px;
    position: absolute;
`

const WallLayout = styled.div` 
    margin: -15px;
`
const ColorHotelLayout = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 27px;
`
const PalleteLayout = styled.div`
    margin-top: 100px;
`
const TextStyle = styled.div`
    font-size: 18px;
    font-weight: 600px;
    font-family: "humanbeomseok";
    padding-bottom: 5px;
`
const PalleteFlex = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3px;
    margin: 0 auto;
    justify-content: center;
`
const PalleteBox = styled.div`

`