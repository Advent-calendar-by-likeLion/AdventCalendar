import { dbService, storageService} from "fbase";
import { useState } from "react";
import styled from 'styled-components';


const Nweet = ({ nweetObj }) => {
    return (
        <div>
            {nweetObj.writerNickname && (
                <WriterNickname>from. {nweetObj.writerNickname}</WriterNickname>
            )}
            <h4>{nweetObj.text}</h4>
            {nweetObj.attachmentUrl && (
                <img width="100%" src={nweetObj.attachmentUrl} />
            )}
        </div>
    )
}

export default Nweet;

const WriterNickname = styled.p`
    margin-bottom: 10px;
    font-size: 12px;
    color: #6E6E6E;
`