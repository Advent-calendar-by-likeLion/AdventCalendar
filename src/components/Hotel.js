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

const Hotel = () => {


    const [isModalOpen, setModalOpen] = useState(false);
    const [msgSize, setMsgSize] = useState("");
    const [dateFormat, setDateFormat] = useState("");
    const [nweets, setNweets] = useState([]);
    const [info, setInfo] = useState([]);


    const {id} = useParams(); // hetelOwnerId

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
      dbService.collection("hotelOwner").doc(id).onSnapshot((doc) => {
          setInfo(doc.data().windowInfo);
      });
    }

    const openModalPost = () => console.log("btn event");
    
    const onClickOpenModal = (item) => {
      if (!info[item]) { 
        alert("창문이 닫혀 있습니다!");
        return;
      }
      dbService.collection(`${id}_${item}`).onSnapshot((snapshot) => {
        const newArray = snapshot.docs.map((document) => ({
            id: document.id,
            ...document.data(),
        }))
        setMsgSize(newArray.length);
        setNweets(newArray);
        setDateFormat(newArray[0].dateFormat);
      })
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
                            <Door/>
                          </Btn>
                        : 
                        item == 25 ? 
                          <Btn onClick={() => onClickOpenModal(item)}>
                            <TopWindow/>
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
