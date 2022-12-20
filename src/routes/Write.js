import { useEffect, useRef, useState } from "react";
import {v4 as uuidv4} from "uuid";
import { dbService, storageService } from "fbase";
import styled from "styled-components";
import { Container, WriteTitleDiv, ButtonLayout, LetterStyle } from "./styles/style";
import LoginBar from '../assets/LoginBar.svg';
import { RedButton, WhiteButton, GreenButton } from "./styles/buttonstyle";
import Letter from '../assets/Letter.svg';
import { useParams, useHistory } from 'react-router-dom';

// image resizing
import imageCompression from "browser-image-compression";
import { ColorRing } from 'react-loader-spinner';


// Don't write badwords to someone. When you did it or even you are going to do it, you are so bad person.
import { badwordexam } from "../components/BadWords";
import axios from "axios";

// 희찬짱
const style = {
    badwordstyle: {
    fontFamily: 'Noto sans kr',
    fontSize: '12px',
    color: '#AF2010',
    textAlign: 'center',
    marginLeft: '20px',
    marginTop: '5px',
    marginBottom: '15px',
    },
};


const Write = ({ match, userObj }) => {
    const {id} = useParams(); // hetelOwnerId

    const [nweet, setNweet] = useState("");
    const [attachment, setAttachment] = useState("");
    const [loading, setLoading] = useState(false);

    const [value, setValue] = useState("")
    const [displayName, setDisplayName] = useState("")
    const ref = useRef();
    const history = useHistory();
    let uid = 0;

    // image resizing 관련
    /* const [file, setFile] = useState(null);
    const [fileUrl, setFileUrl] = useState(""); */

    const [goalCount, setGoalCount] = useState(0)
    const [windowCount, setWindowCount] = useState(1)
    const [lastDate, setLastDate] = useState("");
    
    const tableId = `${id}_${windowCount}`;
    const [ ip , setIp ] = useState("0.0.0.0");

    useEffect(() => {
        dbService.collection("hotelOwner").doc(id).get()
        .then((doc) => {
            setWindowCount(doc.data().windowCount);
            setLastDate(doc.data().lastDate);
        });

        dbService.collection("AdminConfig").doc("AdminConfig").get()
        .then((doc) => {
          setGoalCount(doc.data().goalCount);
        });

        
        axios.get('https://geolocation-db.com/json/').then((res) => {
            setIp(res.data.IPv4);
        })
    }, []);


    useEffect(() => {
      // textarea scroll height 설정
        ref.current.style.height = "0px";
        const scrollHeight = ref.current.scrollHeight;
        ref.current.style.height = scrollHeight + "px";

        if (userObj && displayName == "") {
            setDisplayName(userObj.displayName); 
            uid = userObj.uid; 
        }

      

    }, [value]);
    
    const onSubmit = async (event) => {
        event.preventDefault();
        
        // Valdating the bad word.
        for (let i = 0; i < badwordexam.length; i++) {
            if (nweet.includes(badwordexam[i])) {
                window.alert(
                    `욕설, 성희롱, 비속어, 비방 내용의 입력을 금지합니다.\n금지어 : ${badwordexam[i]}`,
                );
                return;
            }
        }
        
        setLoading(true);
        
        let attachmentUrl = "";
        if (attachment !== "") {
            // file 
            const attRef = storageService.ref().child(`${id}/${uuidv4()}`);
            const response = await attRef.putString(attachment, "data_url");
            attachmentUrl = await response.ref.getDownloadURL();
        }

        let date = new Date();
        let offset = date.getTimezoneOffset() * 60000; //ms단위라 60000곱해줌
        let dateOffset = new Date(date.getTime() - offset);
        let dateFormat = dateOffset.toISOString().slice(2, 10)
        // set the last date to db.
        setLastDateToDB(dateFormat);
        // 날짜가 다르면(다음날이 되면 window count가 올라간다)? 봐야할듯
        await dbService.collection(tableId).add({
            text: nweet,
            timestamp: new Date(),
            dateFormat:dateFormat,
            creatorId: uid,
            attachmentUrl,
            hotelOwnerId: id,
            writerNickname: displayName,
            ip : ip,
        });
        
        checkVisible();
        setNweet("");
        setAttachment("");
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

    /* const onFileChange = async (event) => {
        const {
            target: { files },
        } = event;
        const theFile = files[0];

        // image resize 옵션 설정
        const options = {
            maxSizeMB: 2,
            maxWidthOrHeight: 100
        }

        try {
            const compressedFile = await imageCompression(theFile, options);
            setFile(compressedFile);

            // resize된 이미지의 url을 받아 fileUrl에 저장
            const promise = imageCompression.getDataUrlFromFile(compressedFile);
            promise.then(result => {
                setFileUrl(result);
            })
        } catch (error) {
            console.log(error);
        }

        console.log("f : " +fileUrl);

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
    } */

    const getCurrentDate = () => { // ex : 22-04-17
        let date = new Date();
        let offset = date.getTimezoneOffset() * 60000; //ms단위라 60000곱해줌
        let dateOffset = new Date(date.getTime() - offset);
        
        return dateOffset.toISOString().slice(2, 10);
    }
        
    const onClearAttachment = () => setAttachment("");

    const setLastDateToDB = async (dateFormat) => {

        dbService.collection("hotelOwner").doc(id).get()
        .then((doc) => {
          setLastDate(doc.data().lastDate);
        });
        let isAddable = false;
        if (new Date("20" + lastDate) < new Date("20" + getCurrentDate())) {
            isAddable = true;
        }

        await dbService.collection("hotelOwner").doc(id).update({
          lastDate : dateFormat,
          windowCount : isAddable ? Number(windowCount) + 1 : Number(windowCount),
        });
      }

    const checkVisible = () => {
        dbService.collection(tableId).get().then(snap => {
            if ( snap.size == goalCount ) {
                changeVisible();
            }
        });
      };

    const changeVisible = () => {
        dbService.collection("hotelOwner").doc(id).get().then((doc) => {
        let i = 1; // window day count
        while (true) {
            if (doc.data().windowCount > i || doc.data().windowInfo[i]) {
                i++;
                continue;
            }
            changeVisible2(i)
            break;
        }

        });
    }

    const changeVisible2 = async (i) => { // 날짜 체크도 필요할지 생각.
        await dbService.collection("hotelOwner").doc(id).update({
             [`windowInfo.${i}`] : true,
            //  windowCount : i,
        });
    }

    return (
        loading ?            
        (<>
            <Container>
                <WriteSuccessTitle>잠시만 기다려주세요...</WriteSuccessTitle>
                <br/>
                <br/>
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#F05454', '#AF2010', '#B4CDE6', '#FFD372', '#F0B3B0']}
                />
            </Container>
        </>) :
        <Container>
            <>
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
            <div style={style.badwordstyle}>
                ※ 경고 ※
                <br/>욕설, 성희롱, 비방 편지를 작성할 경우{' '}
                <div></div>형사 처벌의 대상이 될 수 있습니다.
            </div>
            <br/>
            <form onSubmit={onSubmit}>
                <RedButton
                    type="submit"
                    value="Nw"
                >보내기</RedButton>
            </form>
            </>
        </Container>
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
    font-family: humanbeomseok;
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
    font-family: humanbeomseok;
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

const WriteSuccessTitle = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    font-family: humanbeomseok;
    width: 280px;
    height: 29px;
`