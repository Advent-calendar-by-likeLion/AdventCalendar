import { useEffect, useRef, useState } from "react";
import {v4 as uuidv4} from "uuid";
import { dbService, storageService } from "fbase";
import styled from "styled-components";
import { Container, WriteTitleDiv, ButtonLayout, LetterStyle } from "./styles/style";
import LoginBar from '../assets/LoginBar.svg';
import { RedButton, WhiteButton } from "./styles/buttonstyle";
import Letter from '../assets/Letter.svg';
import { useParams, useHistory } from 'react-router-dom';

const Write = ({ match, userObj }) => {
    const {id} = useParams(); // hetelOwnerId

    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [attachment, setAttachment] = useState("");

    const [value, setValue] = useState("")
    const [displayName, setDisplayName] = useState("")
    const ref = useRef();
    const history = useHistory();
    let uid = 0;

    const [goalCount, setGoalCount] = useState(0)
    
    useEffect(() => {
        dbService.collection("AdminConfig").doc("AdminConfig").get()
        .then((doc) => {
          setGoalCount(doc.data().goalCount);
        });
    }, []);


    useEffect(() => {
      // textarea scroll height 설정
      ref.current.style.height = "0px";
      const scrollHeight = ref.current.scrollHeight;
      ref.current.style.height = scrollHeight + "px";

      if (userObj) {
        setDisplayName(userObj.displayName); 
        uid = userObj.uid; 
      }

      

    }, [value]);
    
    const onSubmit = async (event) => {
        
        event.preventDefault();
        let attachmentUrl = "";
        if (attachment !== "") {
            // file 
            const attRef = storageService.ref().child(`${id}/${uuidv4()}`);
            const response = await attRef.putString(attachment, "data_url");
            attachmentUrl = await response.ref.getDownloadURL();
        }
        // text by db
        await dbService.collection(id).add({
            text: nweet,
            timestamp: new Date(),
            creatorId: uid,
            attachmentUrl,
            hotelOwnerId: id,
            writerNickname: displayName
        });

        setNweet("");
        setAttachment("");
        checkVisible();
        history.push("/writesuccess");

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

    const onChangeNm = (event) => {
        event.preventDefault();
        const {
          target: { displayName },
        } = event;
        setDisplayName(displayName);


        const v = event.target.value;
        setDisplayName(v);

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
        if (Boolean(theFile)) {
            reader.readAsDataURL(theFile);
        }
    }

    const onClearAttachment = () => setAttachment("");

    const checkVisible = () => {

        let msgCount = 0;
        dbService.collection(id).onSnapshot((snapshot) => {
            const newArray = snapshot.docs.map((document) => ({
                id: document.id,
                ...document.data(),
            }))
            if ( newArray.length == goalCount ) {
              changeVisible();
            }
            console.log(msgCount);
        })

      };

    const changeVisible = () => {
        dbService.collection("hotelOwner").doc(id).get()
        .then((doc) => {
          //console.log(doc.data().windowInfo);


        let i = 1;
        let text = "";
        while (true) {
            if (doc.data().windowInfo[i]) continue;
            /*console.log("doc.data().windowInfo - start")
            console.log(doc.data().windowInfo)
            console.log(doc.data().windowInfo[i])
            doc.data().windowInfo[i] = true;*/
            changeVisible2(doc.data().windowInfo)
            break;
        }

        });
    }

    const changeVisible2 = async (windowInfoP) => { // Todo: Need to connect DB
        console.log(windowInfoP);
        // event.preventDefault();
        // await dbService.collection("hotelOwner").doc(userObj.uid).update({nickname : nickname});
        await dbService.collection("hotelOwner").doc(userObj.uid).update({
            "windowInfo.1" : true, 
        });
        //history.push("/Nickname");
    }



    

    return (
        <>
        <Container>
                <LetterStyle src={Letter}/>
                <WriteTitleDiv>친구의 호텔에 <br/>편지를 보내주세요!</WriteTitleDiv>
                <Textarea 
                    ref={ref} 
                    value={nweet}
                    type="text"
                    onChange={onChange} 
                    placeholder="친구에게 전하고 싶은 말을 &#13;적어주세요!"
                    maxLength={1000}
                />
            <Input
            onChange={onChangeNm}
            placeholder = "닉네임"
            type="text"
            value={displayName}
            />
            <br/>
            <form onSubmit={onSubmit}>
                <RedButton
                    type="submit"
                    value="Nw"
                >보내기</RedButton>
            </form>
            <br/>
            <WhiteButton onClick={ () => {
            history.goBack();
            } } >뒤로 가기</WhiteButton>

            <>
                <br/>
                <div class="upload-btn-wrapper">
                    <RedButton>이미지 업로드</RedButton>
                    <input type="file" accept="image/*" onChange={onFileChange}/>
                    {attachment && (
                        <ImgDiv>
                            <br/>
                            <img src={attachment} width="100%" />
                            <br/>
                            <br/> 
                            <WhiteButton style={{width: 60, height: 22, marginLeft: 105}} onClick={onClearAttachment}>취소</WhiteButton>
                        </ImgDiv>
                    )}
                </div>
            </>
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
    margin-top: 33px;
    padding: 25px;

    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    border-radius: 7px;

    text-align: center;
    font-size: 13px;
    line-height: 19px;  
    resize: none;

    :focus::placeholder {
        color: transparent;
    }

    ::placeholder {
        color: #BAB8B5;
        font-size: 13px;
        line-height: 19px;
        text-align: center;
    }
`
const Input = styled.input`
    box-sizing: border-box;

    width: 293px;
    height: 39px;

    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    border-radius: 7px;
    margin : 20px;

    text-align: center;
    font-size: 13px;
    line-height: 19px;  

    :focus::placeholder {
        color: transparent;
    }

    ::placeholder {
        font-size: 13px;
        line-height: 19px;
        color: #BAB8B5;
        text-align: center;
    }
`;

const ImgDiv = styled.div`
    position: absolute;
    align-items: center;
`