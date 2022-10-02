import React from 'react'; 
import styled from 'styled-components'; 



export const Title = styled.h1``

export const MenuOptions = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px; 
    margin-bottom: 20px; 
    cursor: pointer; 
    &:active{
    background-color: #bfbfbf ; 
    border-radius: 5px;
}
`

export const Shell = styled.div`
    font-family: inherit;
    border: 1px solid rgba(0,0,0, 0.3); 
    border-radius: 10px; 
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    &#rightPanel{
        width: 20%;
    }
`