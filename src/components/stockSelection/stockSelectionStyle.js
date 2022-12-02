import styled from 'styled-components'

export const StockSelection = styled.div`
    display: block;
    align-self: center;
    text-align: center;
    margin-top:5px;
    margin-bottom: 5px;
@media screen and (max-width: 378px){
    margin: 5px auto;
}

`

export const StockSelectionElement = styled.select`

display: block;
border-radius: 10px; 
border: none;
outline: none;
background-color: #cbcbcb;
padding: 5px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
@media screen and (max-width: 378px){
    margin: 5px auto;
}
`

export const CustomStockInput = styled.input`
width: 100px; 
display: inline-block;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
margin-right: 20px;
padding: 10px;
`

export const CustomStock = styled.div`
display: flex; 
width: 100%;
height: 40px;
max-height: 40px;
margin-left: auto;
margin-right: auto;
text-align: center;
margin-top: 10px;
`

export const GreenButton = styled.div`
    margin-left: auto;
    margin-right: 30px;
    margin-top: auto; 
    margin-bottom: auto;
    border-radius: 15px;
    padding: 10px;
    background-color: #10C135;
    max-width: 60px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
    user-select: none;
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

&:active{
    background-color: #b8b8b8;
    transform: translate(4px, 4px)
}
`