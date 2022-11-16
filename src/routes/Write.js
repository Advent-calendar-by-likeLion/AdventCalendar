import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import { dbService, storageService } from "fbase";

const Write = ({ userObj }) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [attachment, setAttachment] = useState("");
    
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
            <form onSubmit={onSubmit}>
            <input
                value={nweet}
                onChange={onChange}
                type="text"
                placeholder="What's on your mind?"
                maxLength={120}
            />
            <input type="file" accept="image/*" onChange={onFileChange}/>
            <input type="submit" value="Nweet" />
            {attachment && (
                <div>
                <img src={attachment} width="50px" height="50px" />
                <button onClick={onClearAttachment}>Clear</button>
                </div>
            )}
            </form>
        </>
    )
}

export default Write;