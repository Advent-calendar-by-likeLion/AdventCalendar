import { ModalLayout, Background, ModalButton, ModalCloseButton } from "./styles";
import Stamp from '../../assets/Stamp.svg';
import { useRef } from 'react';
import styled from 'styled-components';

const Modal = ({ dateFormat, closeModal, children }) => {

    const outside = useRef();

    return (
        <Background
          ref={outside}
          onClick={ (e) => { if(e.target == outside.current) closeModal(false) } }
        >
            <ModalLayout>
              <StampLayout src={Stamp} />
              <TimeTitleLayout>
                <div>{dateFormat}</div>
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
  left: 207.5px;
  top: -25px
`

const TimeTitleLayout = styled.div`
  position: absolute;
  font-family: "Noto Sans KR";
  left: 223px;
  top: 5px;
  font-size: 12px;
  line-height: 17px;
`