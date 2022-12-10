import WhatGinger from '../../assets/WhoGinger.svg';
import Belboy from '../../assets/cookie/BellBoyCookie.svg';
import Sleepy from '../../assets/cookie/SleepyheadCookie.svg';
import Baby from '../../assets/cookie/BabyCookie.svg';
import Pirate from '../../assets/cookie/PirateCookie.svg';
import Great from '../../assets/cookie/GreatCookie.svg';
import Milk from '../../assets/cookie/MilkHotSpringCookie.svg';
import Detect from '../../assets/cookie/DetectiveCookie.svg';
import Classic from '../../assets/cookie/ClassicCookie.svg';
import King from '../../assets/cookie/KingCookie.svg';
import Happy from '../../assets/cookie/HappyCookie.svg';
import Scared from '../../assets/cookie/ScaredCookie.svg';
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