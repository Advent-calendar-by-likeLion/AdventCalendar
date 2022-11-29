import { Background, LandingPageModalLayout } from "./styles";
import { useRef } from 'react';
import styled from 'styled-components';

const LandingModal = ({ closeModal, children }) => {

    const outside = useRef();

    return (
        <Background
            ref={outside}
            onClick={ (e) => { if(e.target == outside.current) closeModal(false) } }
        >
            <LandingPageModalLayout>
                {children}
            </LandingPageModalLayout>
        </Background>
    );
};

export default LandingModal;
