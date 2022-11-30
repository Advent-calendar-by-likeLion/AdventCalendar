import styled from 'styled-components';

export const HotelContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const Hotelbg = styled.img`
    width: 319.37px;
    height: 466.9px;

    margin: 0 auto;
    margin-top: 20px;
`
export const GridBox = styled.div `
    position: absolute;
    display: grid;
    grid-template-columns: repeat(5, 45px);
    grid-template-rows: repeat(6, 1fr);

    width: 235px;
    height: 358.8px;

    margin-top: 28px;
    margin-left: 11px;
    justify-items: center;
`