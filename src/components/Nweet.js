import { dbService, storageService} from "fbase";
import { useState } from "react";
import styled from 'styled-components';


const Nweet = ({ nweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text); // for editing state

    const onDeleteClick = async () => {
        const ok = window.confirm("삭제?");
        if (ok) {
            await dbService.doc(`nweets/${nweetObj.id}`).delete();
            if (nweetObj.attachmentUrl !== "") {
                await storageService.refFromURL(nweetObj.attachmentUrl).delete();
            }
        }
    }

    const toggleEditing = () => setEditing((prev) => !prev);
    
    const onChange = (event) => {
        const {
            target: {value},
        } = event;
        setNewNweet(value);
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.doc(`nweets/${nweetObj.id}`).update({ text:newNweet});
        setEditing(false);
    }

    return (
        <div>
            {editing ? (
                <>
                    <form onSubmit={onSubmit}>
                        <input onChange={onChange} value={newNweet} required />
                        <input type="submit" value="Update Nweet"/>
                    </form>
                    <button onClick={toggleEditing}>Cancel</button>
                </>
            ):(
                <>
                   <h4>{nweetObj.text}</h4>
                   {nweetObj.attachmentUrl && (
                     <img width="100%" src={nweetObj.attachmentUrl} />
                   )}

                   {isOwner && (
                       <>
                           <button onClick={onDeleteClick}>Delete Nweet</button>
                           <button onClick={toggleEditing}>Edit Nweet</button>
                       </>
                   )}
                </>
            )}



        </div>
    )
}

export default Nweet;

const postImg = styled.img`
    object-fit: cover; 
    width: 100%; 
    max-height: 20rem; 
`