import { useEffect, useRef, useState } from "react";
import {v4 as uuidv4} from "uuid";
import { dbService, storageService } from "fbase";
import styled from "styled-components";
import { Container, WriteTitleDiv, ButtonLayout } from "./styles/style";
import LoginBar from '../assets/LoginBar.svg';
import { RedButton } from "./styles/buttonstyle";

const Write = ({ userObj }) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [attachment, setAttachment] = useState("");

    const [value, setValue] = useState("")
    const ref = useRef();
  
    
    useEffect(() => {
      // textarea scroll height 설정
      ref.current.style.height = "0px";
      const scrollHeight = ref.current.scrollHeight;
      ref.current.style.height = scrollHeight + "px";
    }, [value]);
    
    const onSubmit = async (event) => {
        
        event.preventDefault();
        let attachmentUrl = "";
        if (attachment !== "") {
            // file 
            const attRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
            const response = await attRef.putString(attachment, "data_url");
            attachmentUrl = await response.ref.getDownloadURL();
        }
        // text by db
        await dbService.collection("nweets").add({
        text: nweet,
        createdAt: Date.now(),
        creatorId: userObj.uid,
        attachmentUrl
        });

        setNweet("");
        setAttachment("");
    };

    const onChange = (event) => {
        event.preventDefault();
        const {
          target: { value },
        } = event;
        setNweet(value);


        const v = event.target.value
        setValue(v)

      };

    const onFileChange = (event) => {
        const {
            target: { files },
        } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {
            currentTarget: { result },
            } = finishedEvent;
            setAttachment(result);
        }
        reader.readAsDataURL(theFile);
    }

    const onClearAttachment = () => setAttachment("");

    return (
        <>
        <Container>
                <div>편지위치</div>
                <WriteTitleDiv>친구의 호텔에 <br/>편지를 보내주세요!</WriteTitleDiv>
                <Textarea 
                    ref={ref} 
                    value={nweet}
                    type="text"
                    onChange={onChange} 
                    placeholder="친구에게 전하고 싶은 말을 적어주세요!"
                    maxLength={1000}
                />

            <Input
             type="text"
             placeholder="닉네임을 입력하세요 (10자 이하)" />

            <form onSubmit={onSubmit}>
                <RedButton type="submit" value="Nw">보내기</RedButton>
            </form>

            <input type="file" accept="image/*" onChange={onFileChange}/>
            {attachment && (
                <div>
                <img src={attachment} width="50px" height="50px" />
                <button onClick={onClearAttachment}>Clear</button>
                </div>
            )}
        </Container>
        </>
    )
}

export default Write;

const Textarea = styled.textarea`
    overflow: hidden;

    box-sizing: border-box;
    min-height: 183px;
    width: 293px;


    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    border-radius: 7px;

`
const Input = styled.input`
    box-sizing: border-box;

    width: 293px;
    height: 39px;

    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    border-radius: 7px;
    margin : 20px;
`;