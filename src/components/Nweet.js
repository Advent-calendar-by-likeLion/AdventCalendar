import { dbService, storageService} from "fbase";
import { useState } from "react";
import styled from 'styled-components';
import { useParams } from 'react-router-dom';


const Nweet = ({ nweetObj, tableNm }) => {

    const {id} = useParams()

    const onDeleteClick = async () => {
        const ok = window.confirm("편지를 삭제하시겠습니까? 삭제된 편지는 다시 복구할 수 없습니다.");
        console.log(ok);

        if(ok) {
            console.log(nweetObj.id);
            const data = await dbService.doc(`${tableNm}/${nweetObj.id}`).delete();
            console.log(data);
            if (nweetObj.attachmentUrl !== "") {
                await storageService.refFromURL(nweetObj.attachmentUrl).delete();
            }
        }
    }

    
    return (
        <div>
            {nweetObj.writerNickname && (
                <WriterNickname>from. {nweetObj.writerNickname}</WriterNickname>
            )}
            <h4>{nweetObj.text}</h4>
            {nweetObj.attachmentUrl && (
                <img width="100%" src={nweetObj.attachmentUrl} />
            )}
            {/* <DelteLayout>
                <DeleteStyle onClick={onDeleteClick}>삭제</DeleteStyle>
            </DelteLayout> */}
        </div>
    )
}

export default Nweet;

const WriterNickname = styled.p`
    margin-bottom: 10px;
    font-size: 12px;
    color: #6E6E6E;
`
const DelteLayout = styled.div`
    display: flex;
    flex-direction: row-reverse;
`
const DeleteStyle = styled.button`
    font-family: 'humanbeomseok';
    box-sizing: border-box;
    background: #FCF4E9;
    border: 1px solid #DF6F6F;
    border-radius: 10px;

    width: 48px;
    height: 26px;

    margin-top: 10px;
    padding-top: 1px;
`