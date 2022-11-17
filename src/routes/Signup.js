import React from "react";
import "./styles.css";
import styled from "styled-components";

function Signup() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ,22 , 23, 24, 25];
  return (
    <div
      style={{
        margin: "50px",
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gridTemplateRows: "repeat(5, 1fr)",
        gridColumnGap: "0px",
        gridRowGap: "0px"
      }}
    >
      {items.map((item, key) => (
        <div
          key={key}
          style={{ margin: "5px", backgroundColor: "white", height: "90px" }}
          className={`div${item}`}
        >
          <svg width="34" height="55" viewBox="0 0 34 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33.2838 15.1359C33.2838 15.9705 33.1693 16.5414 32.9884 16.9247C32.816 17.2899 32.5794 17.4956 32.2777 17.6109C31.9561 17.7339 31.524 17.7675 30.9547 17.7037C30.3888 17.6402 29.7288 17.4857 28.9734 17.2702C28.3568 17.0944 27.6825 16.8788 26.9586 16.6474C24.1779 15.7584 20.6666 14.6359 16.8919 14.6359C13.1172 14.6359 9.60588 15.7584 6.82516 16.6474C6.10132 16.8788 5.42699 17.0944 4.8104 17.2702C4.05497 17.4857 3.39496 17.6402 2.82913 17.7037C2.25976 17.7675 1.82765 17.7339 1.50605 17.6109C1.20438 17.4956 0.96774 17.2899 0.795345 16.9247C0.614444 16.5414 0.5 15.9705 0.5 15.1359C0.5 11.8424 2.28469 8.82198 5.24689 6.60766C8.20918 4.39327 12.3247 3.00879 16.8919 3.00879C21.4591 3.00879 25.5746 4.39327 28.5369 6.60766C31.4991 8.82198 33.2838 11.8424 33.2838 15.1359Z" fill="white" stroke="black"/>
              <path d="M30.6079 17.9748C30.6079 19.6987 30.2083 20.2697 29.7895 20.4611C29.5525 20.5694 29.2223 20.6047 28.7608 20.5429C28.3015 20.4813 27.7597 20.3304 27.1299 20.1158C26.6219 19.9427 26.0635 19.7293 25.4621 19.4995C23.1351 18.6102 20.164 17.4748 16.9756 17.4748C13.7872 17.4748 10.8161 18.6102 8.48908 19.4995C7.88766 19.7293 7.32926 19.9427 6.82126 20.1158C6.19152 20.3304 5.64965 20.4813 5.19042 20.5429C4.72885 20.6047 4.39866 20.5694 4.16166 20.4611C3.74286 20.2697 3.34326 19.6987 3.34326 17.9748C3.34326 11.3312 9.39206 5.85205 16.9756 5.85205C24.5591 5.85205 30.6079 11.3312 30.6079 17.9748Z" fill="white" stroke="black"/>
              <rect x="0.5" y="15.2178" width="32.7838" height="38.4702" fill="white" stroke="black"/>
              <rect x="3.17578" y="18.228" width="27.4319" height="32.4493" fill="white" stroke="black"/>
              <line x1="21.3667" y1="33.4922" x2="30.9409" y2="33.4922" stroke="black"/>
              <line x1="16.4331" y1="29.436" x2="16.4331" y2="17.7278" stroke="black"/>
              <line x1="16.5591" y1="51.0103" x2="16.5591" y2="38.4668" stroke="black"/>
              <line x1="2.67578" y1="33.6182" x2="12.3761" y2="33.6182" stroke="black"/>
              <rect x="12.9161" y="33.9985" width="5.68986" height="5.68986" transform="rotate(-45 12.9161 33.9985)" fill="white" stroke="black"/>
              <path d="M15.8151 9.86928L14.3016 0.5H19.5015L18.2996 9.86928H15.8151Z" fill="white" stroke="black"/>
              <rect y="0.467285" width="34" height="54" fill="black" fill-opacity="0.3"/>
              </svg>


        </div>
      ))}
    </div>
  );
}

export default Signup;


const doorFront = styled.div`
  width: 170px;
  height:270px;
  overflow: hidden;
  transform-origin: left;
  box-shadow: 30px 0 50px rgba(0,0,0,0.2);
  position: absolute;
  background-color: #924500;
  z-index:1;
  transition: .5s;
`