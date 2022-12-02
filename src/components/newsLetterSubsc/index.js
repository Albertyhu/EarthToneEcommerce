import React, { useState, useEffect } from 'react'; 
import { checkEmail } from '../hooks/checkEmail.js'
import { FiCheckCircle } from "react-icons/fi";
import {
    Container, 
    EmailInput,
    InputCont,
    InputField,
    Title,
    TextBlock,
    ConfirmationMessage,
    ConfirmMessCont,
    TanButton
} from './myStyle.js';
const RenderNewLetterSubsc = props => {
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
        <Container>
            <TextBlock>
                <Title>Get the latest news about our offers</Title> 
                <div>Subscribe to our newsletter. </div>
            </TextBlock>
            <InputCont> 
                <InputField>
                    <EmailInput value={email} placeholder="Type your email here" onChange={handleInput} />
                    {validEmail ? ValidIcon() : InvalidIcon()}
                </InputField>
                <TanButton id="ContinueButton" onClick={handleSubmit}>Subscribe</TanButton>
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
