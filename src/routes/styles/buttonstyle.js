import styled from "styled-components"

export const RedButton = styled.button`
    width: 281px;
    height: 29px;
    border-width: 1.5px;
    border-style: dashed;
    border-color: white;
    border-radius: 1px;
    background-color: #AF2010;
    outline-width: 9px;
    outline-color:  #AF2010;
    outline-style: solid;

    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: white;
    
    margin-top: 9px;
    margin-bottom: 9px;
    :disabled {
        background-color: rgba(175, 32, 16, 0.5);
        outline-color:  rgba(175, 32, 16, 0.5);
    }

`

export const WhiteButton = styled.button`
    width: 281px;
    height: 29px;

    box-shadow:  0 0 0 10px #AF2010;

    border: 1.5px dashed #AF2010;
    outline:  solid white;
    box-shadow: 0 0 0 8px white, 0 0 0 9px #AF2010;

    border-radius: 2px;
    background-color: white; 

    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #AF2010;
    
    margin-top: 9px;
    margin-bottom: 9px;
`