import React from 'react'; 
import styled from 'styled-components'; 



export const Title = styled.h1``

export const MenuOptions = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    cursor: pointer; 
    width: 100%;
    &:hover{
       background-color: #C7C7C7; 
    }
    &:active{
     background-color: #ffffff; 
     border-radius: 5px;
    }
}
`
export const OptionsContainer = styled.div`
     margin-top: 30px;
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

export const ImageLogo = styled.img`
    margin: auto;
    width: 150px;
    height: 150px;
`