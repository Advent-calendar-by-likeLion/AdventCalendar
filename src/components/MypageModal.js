import { useRef } from 'react';
import styled from 'styled-components';
import { Background, ModalLayout } from './Modal/styles';

const MypageModal = ({ dateFormat, closeModal, children }) => {

    const outside = useRef();

    return (
        <Background
          ref={outside}
          onClick={ (e) => { if(e.target == outside.current) closeModal(false) } }
        >
            <ModalLayout>
                {/* <ModalCloseButton onClick={() => closeModal(false)} /> */}
                {children}
                {/* <ModalButton onClick={() => closeModal(true)}>{buttonText}</ModalButton> */}
            </ModalLayout>
        </Background>
    );
};

export default MypageModal;