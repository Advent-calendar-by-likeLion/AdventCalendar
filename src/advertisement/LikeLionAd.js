import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

function LikeLionAd() {

  // 최초 1회만 광고를 불러오기 위한 변수
  const adRef = useRef(false);

  useEffect(() => {
    // 로딩된 광고가 있으면, 추가 로딩 X
    // if (adRef.current) {
    //   return;
    // }

    const ins = document.createElement('img');
    const script = document.createElement('script');

    ins.className = 'kakao_ad_area';

    // 윈도우 사이즈에 따라 광고 사이즈 조정(사이즈마다 해당 광고 단위 ID 적용)
    const windowSize = window.innerWidth;
    if (windowSize < 1024) {
      ins.style.width = "100%";
      ins.src= "https://firebasestorage.googleapis.com/v0/b/kw-yon.appspot.com/o/likeLion.jpg?alt=media&token=e5b1fe99-d696-4cff-99b2-db08028cfe37"
    } else {
      ins.style.marginLeft = "12px";
      ins.style.width = "728px";
      ins.style.height = "100px";
      ins.src= "https://firebasestorage.googleapis.com/v0/b/kw-yon.appspot.com/o/likeLion.jpg?alt=media&token=e5b1fe99-d696-4cff-99b2-db08028cfe37"
    
    }


    document.querySelector('.aside__kakaoAdFit')?.appendChild(ins);
    
    // 광고 로딩 여부 상태 변경
    adRef.current = true;
  }, []);
  return (
    <>
      <a target="_blank" href='https://techit.education/?utm_source=TC&utm_medium=DA&utm_campaign=univ_sponsorship&utm_content=ginger_hotel'>
        <Aside className="aside__kakaoAdFit"></Aside>
      </a>
    </>
  );
}

export default React.memo(LikeLionAd);

const Aside = styled.div`
  position: fixed;
  bottom: 0;
`