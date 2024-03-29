import WhatGinger from '../../assets/WhoGinger.svg';
import Belboy from '../../assets/cookie/BellBoyCookie.svg';
import Sleepy from '../../assets/cookie/SleepyheadCookie.svg';
import Baby from '../../assets/cookie/Baby_Cookie.svg';
import Pirate from '../../assets/cookie/PirateCookie.svg';
import Great from '../../assets/cookie/GreatCookie.svg';
import Milk from '../../assets/cookie/MilkHotSpringCookie.svg';
import Detect from '../../assets/cookie/DetectiveCookie.svg';
import Classic from '../../assets/cookie/ClassicCookie.svg';
import King from '../../assets/cookie/KingCookie.svg';
import Happy from '../../assets/cookie/HappyCookie.svg';
import Scared from '../../assets/cookie/ScaredCookie.svg';
import College from "../../assets/cookie/CollegeCookie.svg";
import Dracula from '../../assets/cookie/DraculaCookie.svg';
import Soldier from '../../assets/cookie/SoldierCookie.svg';
import Chef from '../../assets/cookie/ChefCookie.svg';
import Snowman from '../../assets/cookie/SnowmanCookie.svg';
import Ronald from '../../assets/cookie/RonaldCookie.svg';
import ColdMan from '../../assets/cookie/ColdManCookie.svg';
import Cheer from '../../assets/cookie/CheerleaderCookie.svg';
import Teen from '../../assets/cookie/TeenCookie.svg';
import Mountain from '../../assets/cookie/MountainCookie.svg';
import Seja from '../../assets/cookie/SejaCookie.svg';
import Snowboarder from '../../assets/cookie/SnowboarderCookie.svg';
import Rudolf from '../../assets/cookie/RudolfCookie.svg';
import Santa from '../../assets/cookie/SantaCookie.svg';
import styled from 'styled-components';

const GingerWindow = ({info, item}) => {
  return (
    !info[item] ? 
    <>
    <GingerTitle>??? 진저맨</GingerTitle>
    <GingerContent>
        <div>내가 누구게~?</div>
        <div>흐흐흐~</div>
        <div>편지를 모으면 볼 수 있지롱!</div>
    </GingerContent>
    <img src={WhatGinger} style={{width:"70px"}}/>
    </>
    :
    item == 1 ?
    <>
    <GingerTitle>벨보이 진저맨</GingerTitle>
    <GingerContent>
        <div>진저호텔에 온 걸 환영한다!</div>
        <div>크리스마스에 진저호텔이라...</div>
        <div>탁월한 선택!</div>
    </GingerContent>
    <img src={Belboy} style={{width:"70px"}}/>
    </> 
    : 
    item == 2 ?
    <>
    <GingerTitle>잠꾸러기 진저맨</GingerTitle>
    <GingerContent>
        <div>지금 몇시야..?</div>
        <div>5분만 더 잘게... 5분만...</div>
        <div>흠냐... Zzz</div>
    </GingerContent>
    <img src={Sleepy} style={{width:"70px"}}/>
    </>
    :
    item == 3 ?
    <>
    <GingerTitle>아기 진저맨</GingerTitle>
    <GingerContent>
        <div>뭐?! 내가 귀엽다고??</div>
        <div>어.. 어쩔티비산타코털3미터!!</div>
        <div>당장 그 말 취..취소해!!</div>
    </GingerContent>
    <img src={Baby} style={{width:"70px"}}/>
    </>
    :
    item == 4 ?
    <>
    <GingerTitle>헤적 진저맨</GingerTitle>
    <GingerContent>
        <div>여기 진저호텔 스위트룸에</div>
        <div>보석이 잔뜩 있다는 소문을 들었지..</div>
        <div>다 내가 가져갈거야~!!!</div>
    </GingerContent>
    <img src={Pirate} style={{width:"70px"}}/>
    </>
    :
    item == 5 ?
    <>
    <GingerTitle>위대한 진저맨</GingerTitle>
    <GingerContent>
        <div>오늘 밤 라운지에서 파티를 열거야</div>
        <div>유명인사들을 잔뜩 초청했지!</div>
        <div>시간 있으면 들리라구 친구~</div>
    </GingerContent>
    <img src={Great} style={{width:"70px"}}/>
    </>
    :
    item == 6 ?
    <>
    <GingerTitle>밀크온천 진저맨</GingerTitle>
    <GingerContent>
        <div>흐아~ 역시 호캉스엔</div>
        <div>온천이 빠질 수 없지!</div>
        <div>1등급 우유! 따땃해~~</div>
    </GingerContent>
    <img src={Milk} style={{width:"70px"}}/>
    </>
    :
    item == 7 ?
    <>
    <GingerTitle>탐정 진저맨</GingerTitle>
    <GingerContent>
        <div>뭐? 너 편지가 사라졌다고?</div>
        <div>.......</div>
        <div>그냥 안 온 것 같은데?</div>
    </GingerContent>
    <img src={Detect} style={{width:"70px"}}/>
    </>
    :
    item == 8 ?
    <>
    <GingerTitle>클래식 진저맨</GingerTitle>
    <GingerContent>
        <div>다섯살 때부터 난 플룻을 불었어</div>
        <div>영재였지~</div>
        <div>내 연주 한번 들어볼래?</div>
    </GingerContent>
    <img src={Classic} style={{width:"70px"}}/>
    </>
    :
    item == 9 ?
    <>
    <GingerTitle>킹받는 진저맨</GingerTitle>
    <GingerContent>
        <div>응 편지 내가 먼저 다봤쥬~</div>
        <div>킹받쥬? 할말없쥬? 당황했~쥬?</div>
        <div>열받는데 아무말 못하겠쥬?</div>
    </GingerContent>
    <img src={King} style={{width:"70px"}}/>
    </>
    :
    item == 10 ?
    <>
    <GingerTitle>해맑은 진저맨</GingerTitle>
    <GingerContent>
        <div>나는 비가 오는 날이 좋아!</div>
        <div>첨벙첨벙~</div>
    </GingerContent>
    <img src={Happy} style={{width:"70px"}}/>
    </> 
    :
    item == 11 ?
    <>
    <GingerTitle>겁쟁이 진저맨</GingerTitle>
    <GingerContent>
        <div>그 얘기 들었어?</div>
        <div>무시무시한 진저호텔 악령 괴담!</div>
        <div>아직 여기 있을지도 몰라..</div>
    </GingerContent>
    <img src={Scared} style={{width:"70px"}}/>
    </>
    :
    item == 12 ?
    <>
    <GingerTitle>대학생 진저맨</GingerTitle>
    <GingerContent>
        <div>레포트.. 이제 2개만 더 쓰면 돼..</div>
        <div>남은 전공 시험 5개...</div>
        <div>졸업해야지... 졸업해야지..</div>
    </GingerContent>
    <img src={College} style={{width:"70px"}}/>
    </>
    :
    item == 13 ?
    <>
    <GingerTitle>드라큘라 진저맨</GingerTitle>
    <GingerContent>
        <div>내가 사는 성보다는 아니지만</div>
        <div>진저호텔도 봐줄 만하구나</div>
        <div>흠!</div>
    </GingerContent>
    <img src={Dracula} style={{width:"70px", height:"90px"}}/>
    </>
    :
    item == 14 ?
    <>
    <GingerTitle>군인 진저맨</GingerTitle>
    <GingerContent>
        <div>충성! 병장 진! 저! 맨!</div>
        <div>진저호텔에 오신 겁니까?</div>
        <div>반갑습니다!</div>
    </GingerContent>
    <img src={Soldier} style={{width:"70px"}}/>
    </>
    :
    item == 15 ?
    <>
    <GingerTitle>쉐프 진저맨</GingerTitle>
    <GingerContent>
        <div>나는 진저호텔 주방장!</div>
        <div>진저호텔의 요리는 모두 내가 지휘하지</div>
    </GingerContent>
    <img src={Chef} style={{width:"70px"}}/>
    </>
    :
    item == 16 ?
    <>
    <GingerTitle>눈사람 진저맨</GingerTitle>
    <GingerContent>
        <div>눈이 오는 날에는 나를 만날 수 있어</div>
        <div>사실 눈이 오는 날에만 날 만날 수 있지!</div>
        <div>난 눈사람일까? 진저맨일까?</div>
    </GingerContent>
    <img src={Snowman} style={{width:"65px"}}/>
    </>
    :
    item == 17 ?
    <>
    <GingerTitle>론 진저맨</GingerTitle>
    <GingerContent>
        <div>이게 뭐냐고?</div>
        <div>온갖 맛이 나는 젤리!</div>
        <div>조지는 코딱지 맛 젤리도 먹어봤대</div>
    </GingerContent>
    <img src={Ronald} style={{width:"70px"}}/>
    </>
    :
    item == 18 ?
    <>
    <GingerTitle>차가운 도시 진저맨</GingerTitle>
    <GingerContent>
        <div>차가운 도시 진저맨인 나도</div>
        <div>크리스마스에는 쉬어야 돼</div>
        <div>바쁘다 바빠 현대사회</div>
    </GingerContent>
    <img src={ColdMan} style={{width:"70px"}}/>
    </>
    :
    item == 19 ?
    <>
    <GingerTitle>치어리더 진저맨</GingerTitle>
    <GingerContent>
        <div>GO!</div>
        <div>G! I! N! G! E! R!</div>
        <div>고! 진저 고!</div>
    </GingerContent>
    <img src={Cheer} style={{width:"85px"}}/>
    </>
    :
    item == 20 ?
    <>
    <GingerTitle>하이틴 진저맨</GingerTitle>
    <GingerContent>
        <div>안녕?</div>
        <div>너가 이번에 새로 온 전학생이구나</div>
        <div>나랑 친구할래?</div>
    </GingerContent>
    <img src={Teen} style={{width:"70px"}}/>
    </>
    :
    item == 21 ?
    <>
    <GingerTitle>산악 진저맨</GingerTitle>
    <GingerContent>
        <div>뭐? 벌써 힘들다고?</div>
        <div>30분만 더 가면 정상이야</div>
        <div>조금만 더 힘을 내~</div>
    </GingerContent>
    <img src={Mountain} style={{width:"70px"}}/>
    </>
    :    
    item == 22 ?
    <>
    <GingerTitle>세자 진저맨</GingerTitle>
    <GingerContent>
        <div>진저호텔에 놀러온 것이냐?</div>
        <div>그래.. 성탄절까지 안녕하거라</div>
    </GingerContent>
    <img src={Seja} style={{width:"70px"}}/>
    </>
    :
    item == 23 ?
    <>
    <GingerTitle>스노보더 진저맨</GingerTitle>
    <GingerContent>
        <div>뭐? 초급자 코스를 타겠다고?</div>
        <div>나랑 같이 상급자 코스 타기로 했잖아!</div>
        <div>싫어 난 거기 안 가</div>
    </GingerContent>
    <img src={Snowboarder} style={{width:"70px"}}/>
    </>
    :
    item == 24 ?
    <>
    <GingerTitle>루돌프 진저맨</GingerTitle>
    <GingerContent>
        <div>크리스마스 이브다!</div>
        <div>썰매? 진저호텔에 주차해놨지~</div>
    </GingerContent>
    <img src={Rudolf} style={{width:"70px"}}/>
    </>
    :
    item == 25 ?
    <>
    <GingerTitle>산타 진저맨</GingerTitle>
    <GingerContent>
        <div>진저호텔! 올해도 스위트룸을 내어 줘서 고맙소</div>
        <div>덕분에 푹 쉬다가 선물을 주러 갈 수 있게 되었어</div>
        <div>모두들 메리 크리스마스~! 호호호!</div>
    </GingerContent>
    <img src={Santa} style={{width:"70px"}}/>
    </>
    :
    <>
    <GingerTitle>??? 진저맨</GingerTitle>
    <GingerContent>
        <div>내가 누구게~?</div>
        <div>흐흐흐~</div>
        <div>편지를 모으면 볼 수 있지롱!</div>
    </GingerContent>
    <img src={WhatGinger} style={{width:"70px"}}/>
    </>
  )
}

export default GingerWindow

const SmallGingerCardLayout = styled.div`
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const GingerTitle = styled.div`
  font-family: 'humanbeomseok';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 11px; 

  text-align: center;
  margin-bottom: 9px;

  color: #000000;
`
const GingerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-family: 'humanbeomseok';
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 9px;
  text-align: center;
  
  margin-bottom: 15px;
  
  color: #000000;
  `