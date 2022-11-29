import { MessageCard } from "./styles";
import { CardLayout } from './styles';
import Nweet from '../Nweet';
import { useState } from 'react';
import { dbService } from 'fbase';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const MessageModal = ({userObj}) => {
    const {id} = useParams(); // hetelOwnerId
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);

    let uid = 0;

  useEffect(() => {

    if (userObj) uid = userObj.uid;     

    //dbService.collection("nweets").where("creatorId", "==", userObj.uid).onSnapshot((snapshot) => {
    dbService.collection(id).onSnapshot((snapshot) => {
      const newArray = snapshot.docs.map((document) => ({
          id: document.id,
          ...document.data(),
      }))
      setNweets(newArray);
    })
  }, []);

  return (
    <>
        <h1>도착한 편지</h1>
        <CardLayout>
        {nweets.map((nweet) => (
            <MessageCard>
                <Nweet 
                    key={nweet.id} 
                    nweetObj={nweet}
                    isOwner={nweet.creatorId === userObj.uid}
                />
                </MessageCard>
                ))}
                </CardLayout>
    </>
  )
}

export default MessageModal