import {GridBox, Hotelbg, HotelContainer} from '../routes/styles/HotelStyle';
import Hotel2 from '../assets/Hotel2.svg';
import styled from 'styled-components';
import Door from './Window/Door';
import TopWindow from './Window/TopWindow';
import Window from './Window/Window';
import { useState } from 'react';
import {dbService } from "fbase"
import { useParams } from 'react-router-dom';
import Modal from './Modal/Modal';
import { CardLayout, MessageCard } from './Modal/styles';
import Nweet from './Nweet';

const Hotel = (isFull) => {


    const [isModalOpen, setModalOpen] = useState(false);
    const [msgSize, setMsgSize] = useState(0);
    const [nweets, setNweets] = useState([]);

    const {id} = useParams(); // hetelOwnerId


    const getPost = () => {

    }

    const openModalPost = () => console.log("btn event");
    
    const onClickOpenModal = () => {
      dbService.collection(id).onSnapshot((snapshot) => {
        const newArray = snapshot.docs.map((document) => ({
            id: document.id,
            ...document.data(),
        }))
        setMsgSize(newArray.length);
        setNweets(newArray);
      })
      setModalOpen(true);
    }
  
    const onClickCloseModal = () => {
      setModalOpen((prev) => !prev);
    }

    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ,22 , 23, 24, 25];
    return (
        <HotelContainer>
            <Hotelbg src={Hotel2}/>
            <GridBox> {
                items.map((item, key) => (
                    <div key={key} className={`div${item}`}>
                        {
                        item == 1 ? 
                          <Btn onClick={onClickOpenModal}>
                              <Window isFull={isFull}/>
                          </Btn>
                        : 
                        item == 24 ? 
                          <Btn onClick={onClickOpenModal}>
                            <Door/>
                          </Btn>
                        : 
                        item == 25 ? 
                          <Btn onClick={onClickOpenModal}>
                            <TopWindow/>
                          </Btn>
                        : 
                          <Btn onClick={onClickOpenModal}>
                            <Window isFull={isFull}/>
                          </Btn>
                        } 
                    </div>

                ))
            } </GridBox>
                      {isModalOpen && <Modal closeModal={onClickCloseModal}>
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
