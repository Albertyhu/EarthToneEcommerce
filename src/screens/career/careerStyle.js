import styled from 'styled-components'

export const Paragraph = styled.p`   
`

export const InputField = styled.div`
display: flex; 
 margin-left: auto;
margin-right: auto;
justify-content: center; 

`

export const InlineBlock = styled.div`
display: inline-block; 
margin-left: 24px; 
margin-right: 24px;
width: 100%; 
`

export const InputText = styled.input`
border: 1px solid rgba(0,0,0,0.3); 
border-radius: 15px; 
margin-top: 10px;
margin-bottom:10px; 
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display: block; 
margin-left: auto;
margin-right: auto;
width: 90%;
padding: 5px;
`

export const Textbox = styled.textarea`
    margin-top: 30px; 
margin-left: auto;
margin-right: auto;
font-family: inherit;
padding:10px; 
resize: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
width: 90%;

@media screen and (max-width: 540px){
width: 89%; 
}
`

export const FormDiv = styled.div`
margin-left: auto;
margin-right: auto;
width: 60%;
@media screen and (max-width: 540px){
width: 90%; 
}
`