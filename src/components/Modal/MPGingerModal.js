import WhatGinger from '../../assets/WhoGinger.svg';
import Belboy from '../../assets/cookie/BellBoyCookie.svg';
import Sleepy from '../../assets/cookie/SleepyheadCookie.svg';
import Baby from '../../assets/cookie/babyCookie.svg';
import Pirate from '../../assets/cookie/PirateCookie.svg';
import Great from '../../assets/cookie/GreatCookie.svg';
import Milk from '../../assets/cookie/MilkHotSpringCookie.svg';
import Detect from '../../assets/cookie/DetectiveCookie.svg';
import Classic from '../../assets/cookie/ClassicCookie.svg';
import King from '../../assets/cookie/KingCookie.svg';
import Happy from '../../assets/cookie/HappyCookie.svg';
import Scared from '../../assets/cookie/ScaredCookie.svg';
import styled from 'styled-components';

const MPGingerModal = (item) => {
  return (
    // item ?
    // <>
    // <GingerTitle>??? 진저맨</GingerTitle>
    // <br/>
    // <GingerContent>내가 누구게~?
    //                 <br/>
    //                 흐흐흐~
    //                 <br/>
    //                 편지를 모으면 볼 수 있지롱!
    // </GingerContent>
    // <GingerCookie src={WhatGinger}/>
    // </>
    // :
    item == 1 ?
    <>
    <GingerTitle>벨보이 진저맨</GingerTitle>
    <br/>
    <GingerContent>진저호텔에 온 걸 환영한다!
                    <br/>
                    크리스마스에 진저호텔이라...
                    <br/>
                    탁월한 선택!
    </GingerContent>
    <GingerCookie src={Belboy}/>
    </>
    :
    item == 2 ?
    <>
    <GingerTitle>잠꾸러기 진저맨</GingerTitle>
    <br/>
    <GingerContent>지금 몇시야..?
                    <br/>
                    5분만 더 잘게... 5분만...
                    <br/>
                    흠냐... Zzz
    </GingerContent>
    <GingerCookie src={Sleepy}/>
    </>
    :
    <>
    <GingerTitle>아기 진저맨</GingerTitle>
    <br/>
    <GingerContent>뭐?! 내가 귀엽다고??
                    <br/>
                    어.. 어쩔티비산타코털3미터!!
                    <br/>
                    당장 그 말 취..취소해!!
    </GingerContent>
    <GingerCookie src={Baby}/>
    </>
  )
}

export default MPGingerModal

const GingerTitle = styled.div`
  position: absolute;

  top: 10%;
  bottom: 18.26%;

  font-family: 'humanbeomseok';
  font-style: normal;
  font-weight: 900;
  font-size: 25px;
  line-height: 29px;

  text-align: center;

  color: #000000;
`
const GingerContent = styled.div`
  position: absolute;

  top: 26%;
  bottom: 12.8%;

  font-family: 'humanbeomseok';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  
  color: #000000;
`
const GingerCookie = styled.img`
    width: 150px;
    height: 188px;

    margin: 0 auto;
    margin-top: 130px;
`