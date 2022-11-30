
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { dbService } from "fbase";


const InitConfigData = ({userObj}) => {
    const history = useHistory();
    useEffect(() => {
        HotelOwnerDBInit()
        history.push("/nickname");
    }, []);

    const getCurrentDate = () => { // ex : 22-04-17
        let date = new Date();
        let offset = date.getTimezoneOffset() * 60000; //ms단위라 60000곱해줌
        let dateOffset = new Date(date.getTime() - offset);
        
        return dateOffset.toISOString().slice(2, 10);
      }

    const HotelOwnerDBInit = async () => {
        await dbService.collection("hotelOwner").doc(userObj.uid).set({
            description : "",
            nickname: "",
            lastDate: getCurrentDate(),
            roofColor : "#005452",
            bodyColor : "#AF2010",
            windowCount : 1,
            windowInfo: {
                1 : false,
                2 : false,
                3 : false,
                4 : false,
                5 : false,
                6 : false,
                7 : false,
                8 : false,
                9 : false,
                10 : false,
                11 : false,
                12 : false,
                13 : false,
                14 : false,
                15 : false,
                16 : false,
                17 : false,
                18 : false,
                19 : false,
                20 : false,
                21 : false,
                22 : false,
                23 : false,
                24 : false,
                25 : false,
            }
        });
    }

    return (<></>)

}

export default InitConfigData;
