import React, { useState, useEffect, useContext } from 'react'; 
import styled from 'styled-components';
import { checkEmail } from '../../hooks/checkEmail.js'
import { FiCheckCircle } from "react-icons/fi";
import { MyContext } from '../../context/contextItem.js'; 

const RenderNewLetterSubsc = props => {
    const {desktopView} = useContext(MyContext)
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false); 
    const [displayConf, setDisplayConf] = useState(false)
    const handleInput = event => {
        setEmail(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        var errMessage = "Please, type your email in the correct format. \n For exampe: John@gmail.com \n";
      
        if (validEmail) {
            setEmail('')
            setDisplayConf(true)
            setTimeout(()=>setDisplayConf(false), 5000)
        }
        else {
            alert(errMessage); 
        }

    }

    useEffect(() => {
        if (checkEmail(email)) {
            setValidEmail(true);
        }
        else {
            setValidEmail(false)
        }
    }, [email])

    return (
        <Container id = "SubscriptionCont">
            <TextBlock>
                <Title>Get the latest news about our offers</Title> 
                <div>Subscribe to our newsletter. </div>
            </TextBlock>
            <InputCont Display={ desktopView ? "flex" : "grid"} id = "footer_InputCont"> 
                <InputField>
                    <EmailInput value={email} placeholder="Type your email here" onChange={handleInput} />
                    {validEmail ? ValidIcon() : InvalidIcon()}
                </InputField>
                <TanButton id="NewsLetterSubscribeButton" onClick={handleSubmit}>Subscribe</TanButton>
            </InputCont> 
            <ConfirmMessCont>
                <ConfirmationMessage display={displayConf ? "block" : "none"}>
                    Your subscription has been confirmed! 
                </ConfirmationMessage>
            </ConfirmMessCont>
        </Container>
        )
}

export default RenderNewLetterSubsc; 

export const ValidIcon = () => {
    return (
        <FiCheckCircle style={{
            marginTop: "auto",
            marginBottom: "auto", 
            marginRight: "10px",
            padding: "auto",
            color: "#25963E",
            width: "20px",
            height: "20px",
        }} />
    )
}

export const InvalidIcon = () => {
    return (
        <FiCheckCircle style={{
            marginTop: "auto",
            marginBottom: "auto",
            marginRight: "10px",
            padding: "auto",
            color: "#bfbfbf",
            width: "20px",
            height: "20px",
        }} />
    )
}

const Container = styled.div`
margin-left: 10px;
@media screen and (max-width: 540px){
width: 85%; 
margin-left: auto;
margin-right: auto;
}
`

const EmailInput = styled.input`
min-width: 100px; 
resize: none; 
outline: none;
border: none;
padding: 5px;
background-color: rgba(0,0,0,0);
@media screen and (max-width: 1086px){
min-width: 50px;
resize: auto;
} 
`

const InputCont = styled.div`
display: flex; 
@media screen and (max-width: 1000px){
    display: grid;
} 


`

const InputField = styled.div`
display: grid; 
grid-template-columns: 85% 15%;
border: 1px solid #000; 
box-shadow: inset 0px 0px 5px 5px rgba(0,0,0,0.3); 
background-color: #ffffff;
@media screen and (max-width: 1140px){
    
} 
@media screen and (max-width: 540px){
    display:grid;
grid-template-columns: 93% 7%;
}
`
const IconCont = styled.div`

`

const Title = styled.h3`
@media screen and (max-width: 540px){
    text-align: center;
    margin-top: 50px;
}
`

const TextBlock = styled.div`
text-align: left;
color: #fff;
@media screen and (max-width: 1000px){
& > div{
    text-align: center;
}
}

`

const ConfirmationMessage = styled.div`
display: ${props => props.display};
color: #ffffff;
`
const ConfirmMessCont = styled.div`
min-height: 30px;
resize: none; 
`


const TanButton = styled.div`
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
@media screen and (max-width: 1140px){
    font-size: 15px;
} 
@media screen and (max-width: 1000px){
    margin: 5px auto;
}
@media screen and (max-width: 540px){
margin-left: auto; 
margin-right: auto; 
}
`