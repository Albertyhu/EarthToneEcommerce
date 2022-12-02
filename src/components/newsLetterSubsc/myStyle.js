import styled from 'styled-components';


export const Container = styled.div`
`

export const EmailInput = styled.input`
min-width: 100px; 
resize: none; 
outline: none;
border: none;
padding: 5px;
background-color: rgba(0,0,0,0);
`

export const InputCont = styled.div`
display: flex; 

`

export const InputField = styled.div`
display: flex; 
border: 1px solid #000; 
box-shadow: inset 0px 0px 5px 5px rgba(0,0,0,0.3); 
background-color: #ffffff;
`

export const Title = styled.h3``

export const TextBlock = styled.div`
text-align: left;
color: #fff;
`

export const ConfirmationMessage = styled.div`
display: ${props => props.display};
color: #ffffff;
`
export const ConfirmMessCont = styled.div`
min-height: 30px;
resize: none; 
`

export const TanButton = styled.div`
    padding: 10px;
    background-color: #D19C4C;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
    font-size: 25px;
    user-select: none;

    font-size: 20px; 
    border-radius: 15px;
    width: auto;
    text-transform: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-left: 10px; 
&:active{
    background-color: #D19C4C;
    transform: translate(4px, 4px)
}
&:hover{
    background-color: #bc8d45;
}
`