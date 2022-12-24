import {GridBox, Hotelbg, HotelContainer} from '../routes/styles/HotelStyle';
import Hotel2 from '../assets/Hotel2.svg';
import styled from 'styled-components';
import Door from './Window/Door';
import TopWindow from './Window/TopWindow';
import Window from './Window/Window';
import { useState, useEffect } from 'react';
import {dbService } from "fbase"
import { useParams } from 'react-router-dom';
import Modal from './Modal/Modal';
import { ReactComponent as MainHotel } from '../assets/Component3434.svg';
import { CardLayout, MessageCard } from './Modal/styles';
import Nweet from './Nweet';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';

const Hotel = ({userObj}) => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [msgSize, setMsgSize] = useState("");
    const [lastWindowItemCount, setLastWindowItemCount] = useState("");
    const [dateFormat, setDateFormat] = useState("");
    const [nweets, setNweets] = useState([]);
    const [info, setInfo] = useState([]);


    const {id} = useParams(); // hetelOwnerId
    const todayDate = new Date().getDate();

    useEffect(async () => {
      await dbService.collection("hotelOwner").doc(id).get()
      .then((doc) => {
        document.getElementById("roof1").style.fill = doc.data().roofColor;
        document.getElementById("roof2").style.fill = doc.data().roofColor;
        document.getElementById("body").style.fill = doc.data().bodyColor;
        document.getElementById("circle").style.fill = doc.data().bodyColor;
      });

      initWindowInfo();
    }, []);
    

    const initWindowInfo = () => {
      // 25일 이전에는 기존 방식대로 운영
      if (todayDate < 25) {
        dbService.collection("hotelOwner").doc(id).onSnapshot((doc) => {
          setInfo(doc.data().windowInfo);
        });
      }
      // 25일 이후부터는 모든 창문을 개방
      if (todayDate >= 25) {
        setInfo({
          1 : true, 2 : true, 3 : true, 4 : true, 5 : true, 6 : true, 7 : true, 8 : true, 9 : true,
          10 : true, 11 : true, 12 : true, 13 : true, 14 : true, 15 : true, 16 : true, 17 : true,
          18 : true, 19 : true, 20 : true, 21 : true, 22 : true, 23 : true, 24 : true, 25 : true
        });
      }
    }
    
    const onClickOpenModal = (item) => {

      
      const windowOpen = sessionStorage.getItem('windowOpen');

      if (id !== (userObj ? userObj.uid : 0)) {
        if (!windowOpen){
          alert("자신의 호텔만 열람할 수 있습니다!");
          return;
        }
      } 
      if (!info[item]) { 
        alert("창문이 닫혀 있습니다!");
        return;
      }
      dbService.collection(`${id}_${item}`).onSnapshot((snapshot) => {
        const newArray = snapshot.docs.map((document) => ({
            id: document.id,
            ...document.data(),
        }))
        console.log(newArray);
        setMsgSize(newArray.length);
        setNweets(newArray);
        if (newArray.length == 0) {
          setDateFormat("22-12-00");
        } else {
          setDateFormat(newArray[0].dateFormat);
        }
      })
      setLastWindowItemCount(item);
      setModalOpen(true);
    }
  
    const onClickCloseModal = () => {
      setModalOpen((prev) => !prev);
    }

    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ,22 , 23, 24, 25];
    return (
        <HotelContainer>
            {/* <Hotelbg src={Hotel2}/> */}
            <MainHotel />
            <GridBox> {
                items.map((item, key) => (
                    <div key={key} className={`div${item}`}>
                        {
                        item == 24 ? 
                          <Btn onClick={() => onClickOpenModal(item)}>
                            <Door info={info} /> 
                          </Btn>
                        : 
                        item == 25 ? 
                          <Btn onClick={() => onClickOpenModal(item)}>
                            <TopWindow info={info} />
                          </Btn>
                        : 
                          <Btn onClick={() => onClickOpenModal(item)}>
                            <Window info={info} item={item}/>
                          </Btn>
                        } 
                    </div>

                ))
            } </GridBox>
                      {isModalOpen && <Modal dateFormat={dateFormat} closeModal={onClickCloseModal}>
                            <h1>도착한 편지</h1>
                            <CardLayout>
                            {nweets.map((nweet) => (
                            <MessageCard>
                                <Nweet 
                                  key={nweet.id} 
                                  nweetObj={nweet}
                                  tableNm={`${id}_${lastWindowItemCount}`}
                                />
                            </MessageCard>
                            ))}
                            </CardLayout>
                          </Modal>}
        </HotelContainer>
    );
}

export default Hotel

export const Btn = styled.button `
  background-color: transparent !important;
  background-image: none !important;
  border-color: transparent;
  border: none;
  color: #FFFFFF;
  padding: 0px 0px;
`