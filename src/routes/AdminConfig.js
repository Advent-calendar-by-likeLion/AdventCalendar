import { dbService, authService } from "fbase";

import styled from 'styled-components';
import { InputStyle } from './styles/style';
import { RedButton, WhiteButton } from './styles/buttonstyle';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";

const AdminConfig = ({userObj}) => {

    const {id} = useParams(); // hetelOwnerId

    const [goalCount, setGoalCount] = useState(userObj.displayName);
    const [windowCount, setWindowCount] = useState(2);
    const [windowInfoIndex, setWindowInfoIndex] = useState(0);
    const history = useHistory();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {

        if (userObj.uid == "sksKvNWFPBe5ZmJtNCdbGUh5jYk1") {
            setIsAdmin(true);
        }

        /*dbService.collection("AdminConfig").doc("AdminConfig").get()
        .then((doc) => {
          setDescription(doc.data().description === "" ? "" : doc.data().description)
        });*/

    }, []);

    const onChangeWindowInfoIndex = (event) => {
        const {
          target: { value },
        } = event;
        setWindowInfoIndex(value);
    };
    const onChangeWindowCount = (event) => {
        const {
          target: { value },
        } = event;
        setWindowCount(value);
    };
    const onChange = (event) => {
        const {
          target: { value },
        } = event;
        setGoalCount(value);
    };


    const onSubmitWindowInfo = async (event) => {
        event.preventDefault();

        // dbService.collection("hotelOwner").doc(id).onSnapshot((doc) => {
        //     setWindowInfo(doc.data().windowInfo);
        // });

        await dbService.collection("hotelOwner").doc(id).update({
            [`windowInfo.${windowInfoIndex}`] : true,
           //  windowCount : i,
        });

        alert(`info index ${windowInfoIndex}개 로 변경`);
        //history.push("/hotel/" + userObj.uid);
    }
    // 창문을 닫아 버리자!
    const onSubmitWindowClose = async (event) => {
        event.preventDefault();

        await dbService.collection("hotelOwner").doc(id).update({
            [`windowInfo.${windowInfoIndex}`] : false,
           //  windowCount : i,
        });

        alert(`info index ${windowInfoIndex}개 로 변경`);
        //history.push("/hotel/" + userObj.uid);
    }
    
    const onSubmit = async (event) => {
        event.preventDefault();

        await dbService.collection("AdminConfig").doc("AdminConfig").update({
            goalCount: goalCount,
        });

        alert(`오늘의 편지 갯수 ${goalCount}개 로 변경`);
        //history.push("/hotel/" + userObj.uid);
    }
    const onSubmitWindowCount = async (event) => {
        event.preventDefault();

        await dbService.collection("hotelOwner").doc(id).update({
            windowCount : windowCount,
        });

        alert(`오늘의 편지 갯수 ${windowCount}개 로 변경`);
        //history.push("/hotel/" + userObj.uid);
    }
    const createTableCookieInfo = async (event) => {
        event.preventDefault();
        // collection = table

        /* 진저맨 추가방법 
           1. 진저맨이 추가 되면은 title과 content 입력
           2. 날짜에 대한 데이터를 doc("숫자") 입력
           3. Home2.js 19Line에 존재하는 쿠키 관련 모음에, 기존에 추가하던 방식대로 svg를 추가하면 됌. 
           4. 그리고 cookies array에 날짜 순서대로 컴포넌트 데이터를 넣어주면 됌.
        */
        await dbService.collection("CookieInfo").doc("0").set({
            gingerTitle : "??? 진저맨",
            gingerContent : "내가 누구게~?\n흐흐흐~\n편지를 모으면 볼 수 있지롱!",
        });

        await dbService.collection("CookieInfo").doc("1").set({
            gingerTitle : "벨보이 진저맨",
            gingerContent : "진저호텔에 온 걸 환영한다!\n크리스마스에 진저호텔이라...\n탁월한 선택!",
        });

        await dbService.collection("CookieInfo").doc("2").set({
            gingerTitle : "잠꾸러기 진저맨",
            gingerContent : "지금 몇시야..?\n5분만 더 잘게... 5분만...\n흠냐... Zzz",
        });

        await dbService.collection("CookieInfo").doc("3").set({
            gingerTitle : "아기 진저맨",
            gingerContent : "뭐?! 내가 귀엽다고??\n어.. 어쩔티비산타코털3미터!!\n당장 그 말 취..취소해!!",
        });

        await dbService.collection("CookieInfo").doc("4").set({
            gingerTitle : "해적 진저맨",
            gingerContent : "여기 진저호텔 스위트룸에\n보석이 잔뜩 있다는 소문을 들었지..\n다 내가 가져갈거야~!!!",
        });

        await dbService.collection("CookieInfo").doc("5").set({
            gingerTitle : "위대한 진저맨",
            gingerContent : "오늘 밤 라운지에서 파티를 열거야\n유명인사들을 잔뜩 초청했지!\n시간 있으면 들리라구 친구~",
        });

        await dbService.collection("CookieInfo").doc("6").set({
            gingerTitle : "밀크온천 진저맨",
            gingerContent : "흐아~ 역시 호캉스엔\n온천이 빠질 수 없지!\n1등급 우유! 따땃해~~",
        });

        await dbService.collection("CookieInfo").doc("7").set({
            gingerTitle : "탐정 진저맨",
            gingerContent : "뭐? 너 편지가 사라졌다고?\n.......\n그냥 안 온 것 같은데?",
        });

        await dbService.collection("CookieInfo").doc("8").set({
            gingerTitle : "클래식 진저맨",
            gingerContent : "다섯살 때부터 난 플룻을 불었어\n영재였지~\n내 연주 한번 들어볼래?",
        });

        await dbService.collection("CookieInfo").doc("9").set({
            gingerTitle : "킹받는 진저맨",
            gingerContent : "응 편지 내가 먼저 다봤쥬~\n킹받쥬? 할말없쥬? 당황했~쥬?\n열받는데 아무말 못하겠쥬?",
        });

        await dbService.collection("CookieInfo").doc("10").set({
            gingerTitle : "해맑은 진저맨",
            gingerContent : "나는 비가 오는 날이 좋아!\n첨벙첨벙~",
        });

        await dbService.collection("CookieInfo").doc("11").set({            
            gingerTitle : "겁쟁이 진저맨",
            gingerContent : "그 얘기 들었어?\n무시무시한 진저호텔 악령 괴담!\n아직 여기 있을지도 몰라..",
        });
        
        await dbService.collection("CookieInfo").doc("12").set({
            gingerTitle : "대학생 진저맨",
            gingerContent : "레포트.. 이제 2개만 더 쓰면 돼..\n남은 전공 시험 5개...\n졸업해야지... 졸업해야지..",
        });

        await dbService.collection("CookieInfo").doc("13").set({
            gingerTitle : "드라큘라 진저맨",
            gingerContent : "내가 사는 성보다는 아니지만\n진저호텔도 봐줄 만하구나\n흠!",
        });

        await dbService.collection("CookieInfo").doc("14").set({
            gingerTitle : "군인 진저맨",
            gingerContent : "충성! 병장 진! 저! 맨!\n 진저호텔에 오신 겁니까?\n 반갑습니다!",
        });
        
        await dbService.collection("CookieInfo").doc("15").set({
            gingerTitle : "쉐프 진저맨",
            gingerContent : "나는 진저호텔 주방장!\n진저호텔의 요리는 모두 내가 지휘하지",
        });
        
        await dbService.collection("CookieInfo").doc("16").set({
            gingerTitle : "눈사람 진저맨",
            gingerContent : "눈이 오는 날에는 나를 만날 수 있어\n사실 눈이 오는 날에만 날 만날 수 있지!\n난 눈사람일까? 진저맨일까?",
        });
        
        await dbService.collection("CookieInfo").doc("17").set({
            gingerTitle : "론 진저맨",
            gingerContent : "이게 뭐냐고?\n온갖 맛이 나는 젤리!\n조지는 코딱지 맛 젤리도 먹어봤대",
        });
        
        await dbService.collection("CookieInfo").doc("18").set({
            gingerTitle : "차가운 도시 진저맨",
            gingerContent : "차가운 도시 진저맨인 나도\n크리스마스에는 쉬어야 돼\n바쁘다 바빠 현대사회",
        });

        await dbService.collection("CookieInfo").doc("19").set({
            gingerTitle : "치어리더 진저맨",
            gingerContent : "GO!\nG! I! N! G! E! R!\n고! 진저 고!",
        });
        await dbService.collection("CookieInfo").doc("20").set({
            gingerTitle : "하이틴 진저맨",
            gingerContent : "안녕?\n너가 이번에 새로 온 전학생이구나\n나랑 친구할래?",
        });
        await dbService.collection("CookieInfo").doc("21").set({
            gingerTitle : "",
            gingerContent : "",
        });
        await dbService.collection("CookieInfo").doc("22").set({
            gingerTitle : "",
            gingerContent : "",
        });
        await dbService.collection("CookieInfo").doc("23").set({
            gingerTitle : "",
            gingerContent : "",
        });
        await dbService.collection("CookieInfo").doc("24").set({
            gingerTitle : "",
            gingerContent : "",
        });
        await dbService.collection("CookieInfo").doc("25").set({
            gingerTitle : "",
            gingerContent : "",
        });


        alert(`진저맨쿠키 DB 삽입`);
        //history.push("/hotel/" + userObj.uid);
    }
    const toHome = () => {
        history.push("/");
    }

    // 기본 로그인 테스트 
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const onChangeEmailAndPassword = (event) => {
        const {target: {name, value}} = event;
        if (name === "email") {
          setEmail(value)
        } else if (name === "password1") {
          setPassword1(value)
        } else if (name === "password2") {
          setPassword2(value)
        }
    }
    
    const onSubmitSignUpTest = async (event) => {
        event.preventDefault();
        
        try {
            if (password1 == password2) {
                await authService.createUserWithEmailAndPassword(email, password1);
                alert("회원가입 성공!");
                history.push("/AdminConfig");
              } else if (password1 == "" || password2 == "") {
                alert("비밀번호를 입력해주세요.");
              } else if (password1 != password2) {
                alert("비밀번호가 일치하지 않습니다.");
            }
        } catch (error) {
            alert(error.message);
        }
    }
    

  return (
        isAdmin ?
        (
            <>
                <Container>

                    <div style={{marginTop: "141px", fontSize: '30px', fontWeight: "bold"}}>관리자페이지</div>
                    <br/>
                    
                    <br/>
                    <div style={{
                        height: "29px",
                        fontSize: "20px",  
                        fontWeight: "500px",

                    }}>창문 열기</div>
                    <NicknameInput>
                        <InputStylenick type="text" placeholder='일자 입력' onChange={onChangeWindowInfoIndex}/>
                    </NicknameInput>
                    <br/>
                    <form onSubmit={onSubmitWindowInfo}>
                        <RedButton>창문 열기</RedButton>
                    </form>

                    <br/>
                    <div style={{
                        height: "29px",
                        fontSize: "20px",  
                        fontWeight: "500px",

                    }}>창문 닫기</div>
                    <NicknameInput>
                        <InputStylenick type="text" placeholder='일자 입력' onChange={onChangeWindowInfoIndex}/>
                    </NicknameInput>
                    <br/>
                    <form onSubmit={onSubmitWindowClose}>
                        <RedButton>창문 닫기</RedButton>
                        
                    </form>
                    <div style={{
                    height: "29px",
                    fontSize: "20px",  
                    fontWeight: "500px",

                    }}>오늘의 편지 최대 갯수</div>
                    <HotelGuide>사용자가 받을 수 있는 최대 편지 수</HotelGuide>

                    <NicknameInput>
                        <InputStylenick type="text" placeholder='숫자 입력' onChange={onChange}/>
                    </NicknameInput>
                    <br/>
                    <form onSubmit={onSubmit}>
                        <RedButton>편지 갯수 변경</RedButton>
                    </form>
                    <br/>
                    <br/>
                    <div style={{
                        height: "29px",
                        fontSize: "20px",  
                        fontWeight: "500px",

                    }}>X일차 창문 컨트롤</div>
                    <HotelGuide>사용자가 오류로 인해, 날짜가 하루 지나도 다음 창문으로 카운팅 되지않을때 사용</HotelGuide>
                    <HotelGuide>사용법: url에 AdventCalendar#/adminConfig/(ID) 를 삽입</HotelGuide>
                    <HotelGuide>예시: 1일차에 10개를 쌓았으나, 2일차에도 10개에 계속 이어간다면, 숫자를 2를 주면 2번째 창문으로 넘어감.</HotelGuide>
                    <NicknameInput>
                        <InputStylenick type="text" placeholder='일자 입력' onChange={onChangeWindowCount}/>
                    </NicknameInput>
                    <br/>
                    <form onSubmit={onSubmitWindowCount}>
                        <RedButton>창문 일자 변경</RedButton>
                    </form>

                    <br/>
                    <form onSubmit={createTableCookieInfo}>
                        <RedButton>진저맨DB삽입</RedButton>
                    </form>
                    <br/>
                    <br/>
                    <br/>
                    <Container>
                        <form onSubmit={onSubmitSignUpTest}>
                            <h1 style={{fontFamily: "humanbeomseok", fontSize: "25px"}}>회원가입 테스트</h1>
                            <InputLayout2>
                                <InputStyle placeholder='이메일' name="email" type="email" required value={email} onChange={onChangeEmailAndPassword} />
                                <InputStyle placeholder='비밀번호' name="password1" type="password" required value={password1} onChange={onChangeEmailAndPassword} />
                                <InputStyle placeholder='비밀번호 확인' name="password2" type="password" required value={password2} onChange={onChangeEmailAndPassword}/>
                            </InputLayout2>
                            <ButtonLayout>
                                <RedButton type="submit">회원가입 테스트</RedButton>
                            </ButtonLayout>
                        </form>
                    </Container>
                    <br/>
                    <br/>
                    <br/>
                    <WhiteButton onClick={ () => {
                        history.push("/");
                    } } >시작화면</WhiteButton>
                </Container>
            </>
        )
        :
        (
            <>
                <Container>
                    <HotelGuide style={{marginTop:'250px', fontSize:"30px", fontFamily:"humanbeomseok"}}>
                        저희 서비스를 사용해주셔서 감사합니다.
                    </HotelGuide>
                    <HotelGuide style={{marginTop:'30px', fontSize:"30px", fontFamily:"humanbeomseok"}}>
                        아쉽게 이 주소는 회원님이 접근할 수 없는 주소입니다.
                    </HotelGuide>
                    <HotelGuide style={{marginTop:'30px', fontSize:"30px", fontFamily:"humanbeomseok"}}>
                        아직 호텔이 없으시다면 호텔을 만들어서 서비스를 이용해보세요!
                    </HotelGuide>
                    <RedButton style={{marginTop:'70px'}} onClick={toHome}>호텔 만들러가기</RedButton>
                </Container>
            </>
        )
  )
}

export default AdminConfig

const Container = styled.div`
    margin: 0 auto;
    align-items: center;
    text-align: center;
`
const NicknameInput = styled.form`
    display: flex;
    flex-direction: row;
    justify-items: center;
    justify-content: center;
    align-items: center;

    margin-top: 22.84px;
    margin-bottom: 20px;
`
const TxtAreaDesc = styled.textarea`
    width: 230px;
    min-height: 93px;
    background-color: #FCF4E9;
    color:  #000000;

    border-color: transparent;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #BAB8B5;
    padding-left: 10px;
    text-align: center;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    font-family: none;
    resize: none;
    white-space: pre-wrap;
    ::placeholder {
        color: #BAB8B5;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 33px;
        text-align: center; 
    }

    :focus {
        outline: none;
    }
`
const InputStylenick = styled.input`
    width: 115px;
    height: 25px;
    background-color: #FCF4E9;
    color:  #000000;

    border-color: transparent;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #BAB8B5;
    padding-left: 10px;
    text-align: center;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;

    ::placeholder {
        color: #BAB8B5;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 33px;
        text-align: center; 
    }

    :focus {
        outline: none;
    }
`
const HotelGuide = styled.div`
    text-align: center; 
    font-weight: 500;
    font-size: 12px;
`

const InputLayout2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    margin-top: 72px;
    margin-bottom: 39px;
    align-items: center;
`

const ButtonLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12.57px;
    margin-top: 62.02px;
    margin-bottom: 142px;
    align-items: center;
`