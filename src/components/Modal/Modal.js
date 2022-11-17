import { ModalLayout, Background, ModalButton, ModalCloseButton } from "./styles";
import Stamp from '../../assets/Stamp.svg';
import { useRef } from 'react';
import styled from 'styled-components';

const TimeTitle = () => {
  const todayTime = () => {
    let now = new Date();
    let todayYear = now.getFullYear();
    let todayMonth = now.getMonth() + 1;
    let todayDate = now.getDate();

    return todayYear + '.' + todayMonth + '.' + todayDate;
  }

  return (
    <div>{todayTime().slice(0, 9)}
      <span>{todayTime().slice(9, 12)}</span>
      <span>{todayTime().slice(12, 19)}</span>
    </div>
  )
}


const Modal = ({ closeModal, children }) => {

    const outside = useRef();

    return (
        <Background
          ref={outside}
          onClick={ (e) => { if(e.target == outside.current) closeModal(false) } }
        >
            <ModalLayout>
              <StampLayout src={Stamp} />
              <TimeTitleLayout>
                <TimeTitle />
              </TimeTitleLayout>
                {/* <ModalCloseButton onClick={() => closeModal(false)} /> */}
                {children}
                {/* <ModalButton onClick={() => closeModal(true)}>{buttonText}</ModalButton> */}
            </ModalLayout>
        </Background>
    );
};

export default Modal;

const StampLayout = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 210px;
  top: -28px
`

const TimeTitleLayout = styled.div`
  position: absolute;
  left: 225px;
  top: 3px;
  font-size: 12px;
  line-height: 17px;
`