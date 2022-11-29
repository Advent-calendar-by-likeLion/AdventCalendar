import { HotelImg, LetterStyle, WriteSubTitle } from "./styles/style"
import Letter from '../assets/Letter.svg';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { RedButton, WhiteButton, GreenButton } from './styles/buttonstyle';
import { useState, useEffect } from 'react';
import Hotel from '../assets/SnowHotel.svg';
import { ColorRing } from  'react-loader-spinner'

const WriteSuccess= ({userObj}) => {

    let id = userObj ? userObj.uid : 0;
    const history = useHistory();
    const onclickLoginBar = () => {
        history.push("/login");
    }
    const onclickSignupBar = () => {
        history.push("/signup");
    }
    const onclickMyHotelBar = () => {
        history.push("/hotel/" + id);
    }
    const onclickWriteLetterBar = () => {
        history.push("/"); // 경로 설정 추후에 다시 할 예정
    }

    const [loading, setLoading] = useState(true);

//     useEffect(()=>{        

//         setTimeout(()=>{               

//             (id === 0) ?  
//             <>
//                     <Container>
//                     <LetterStyle src={Letter} />
//                         <WriteSuccessTitle>편지를 보냈어요!</WriteSuccessTitle>
//                         <br/>
//                         <WriteSubTitle>아직 내 호텔이 없나요?</WriteSubTitle>
//                         <WriteSubTitle>내 호텔을 만들면</WriteSubTitle>
//                         <WriteSubTitle>친구에게 편지를 받을 수 있어요.</WriteSubTitle>
//                         <ButtonLayout>
//                             {
                    
//                             }
//                             <RedButton onClick={onclickSignupBar}>내 호텔 만들기</RedButton>
//                             <WhiteButton onClick={onclickLoginBar}>로그인</WhiteButton>
//                         </ButtonLayout>
//                     </Container>
//             </> :
//             <>
//                     <Container>
//                     <LetterStyle src={Letter} />
//                         <WriteSuccessTitle>편지를 성공적으로 보냈어요!</WriteSuccessTitle>
//                         <br/>
//                         <WriteSubTitle>이젠 어떤 걸 해볼까요?</WriteSubTitle>
//                         <ButtonLayout>
//                             {
        
//                             }
//                             <RedButton onClick={onclickWriteLetterBar}>편지 더 쓰러 가기</RedButton>
//                             <WhiteButton onClick={onclickMyHotelBar}>내 호텔 보러 가기</WhiteButton>
//                         </ButtonLayout>
//                     </Container>
//             </>
//             setLoading(false)     

//         },1000)          
   
//    },[]) 

    return (
    //     loading?
            // (<>
            // <Container>
            //     <WriteSuccessTitle>잠시만 기다려주세요...</WriteSuccessTitle>
            //     <br/>
            //     <br/>
            //     <ColorRing
            //         visible={true}
            //         height="80"
            //         width="80"
            //         ariaLabel="blocks-loading"
            //         wrapperStyle={{}}
            //         wrapperClass="blocks-wrapper"
            //         colors={['#F05454', '#AF2010', '#B4CDE6', '#FFD372', '#F0B3B0']}
            //     />
            // </Container>
            // </>) :
    (id === 0) ?  
    <>
            <Container>
            <LetterStyle src={Letter} />
                <WriteSuccessTitle>편지를 보냈어요!</WriteSuccessTitle>
                <br/>
                <WriteSubTitle>아직 내 호텔이 없나요?</WriteSubTitle>
                <WriteSubTitle>내 호텔을 만들면</WriteSubTitle>
                <WriteSubTitle>친구에게 편지를 받을 수 있어요.</WriteSubTitle>
                <ButtonLayout>
                    {
            
                    }
                    <RedButton onClick={onclickSignupBar}>내 호텔 만들기</RedButton>
                    <WhiteButton onClick={onclickLoginBar}>로그인</WhiteButton>
                </ButtonLayout>
            </Container>
    </> :
    <>
            <Container>
            <LetterStyle src={Letter} />
                <WriteSuccessTitle>편지를 성공적으로 보냈어요!</WriteSuccessTitle>
                <br/>
                <WriteSubTitle>이젠 어떤 걸 해볼까요?</WriteSubTitle>
                <ButtonLayout>
                    {

                    }
                    <RedButton onClick={onclickWriteLetterBar}>편지 더 쓰기</RedButton>
                    <GreenButton onClick={onclickMyHotelBar}>내 호텔 가기</GreenButton>
                </ButtonLayout>
            </Container>
    </>
    )
}

export default WriteSuccess

const WriteSuccessTitle = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    width: 280px;
    height: 29px;
`
const ButtonLayout = styled.div`
    text-align: center;
    margin-top: 64px;

    display: flex;
    flex-direction: column;
    gap: 16px;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 224px;
`