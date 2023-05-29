import styled from 'styled-components';

const ProductContainer = styled.div`
    text-align: center; 
`

const Image = styled.img`
width: 200px; 
height: 200px; 
`

const Textbox = styled.textarea`
    margin-top: 30px; 
margin-left: auto;
margin-right: auto;
font-family: 'Raleway-Light';
padding:10px; 
resize: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`
const ButtonContainer = styled.div`
display: flex; 
width: 80%; 
margin-left: auto;
margin-right: auto;
margin-top: 30px; 
`

export {
    ProductContainer, 
    Image, 
    Textbox, 
    ButtonContainer, 
}