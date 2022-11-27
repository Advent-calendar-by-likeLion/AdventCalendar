import { GridBox, Hotelbg, HotelContainer } from '../routes/styles/HotelStyle';
import Hotel2 from '../assets/Hotel2.svg';
import styled from 'styled-components';
import OpenWindow from './Window/OpenWindow';
import Door from './Window/Door';
import TopWindow from './Window/TopWindow';
import Window from './Window/Window';

const Hotel = () => {


    const openModalPost = () => console.log("btn event");

    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ,22 , 23, 24, 25];
    return (
        <HotelContainer>
          <Hotelbg src={Hotel2} />
          <GridBox>
            {items.map((item, key) => (
                <div
                  key={key}
                  className={`div${item}`}
                >
                  {
                  item == 1 ?
                  <Btn onClick={openModalPost}>
                    <OpenWindow/>
                  </Btn>
                 : 
                  
                  item == 24 ? 
                    <Door/>
                  :
                  item == 25 ?
                    <TopWindow/>
                  :
                    <Window/>
                  }
                </div>
                
              ))}
          </GridBox>
        </HotelContainer>
    );
}

export default Hotel

export const Btn = styled.button`
  background-color: transparent !important;
  background-image: none !important;
  border-color: transparent;
  border: none;
  color: #FFFFFF;
`