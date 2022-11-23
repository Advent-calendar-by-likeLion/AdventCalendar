import { dbService, storageService} from "fbase";
import { useState } from "react";
import styled from 'styled-components';


const Nweet = ({ nweetObj, isOwner }) => {
    return (
        <div>
            <h4>{nweetObj.text}</h4>
            {nweetObj.attachmentUrl && (
                <img width="100%" src={nweetObj.attachmentUrl} />
            )}
        </div>
    )
}

export default Nweet;