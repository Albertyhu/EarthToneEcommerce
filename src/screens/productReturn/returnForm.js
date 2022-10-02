import React, { useState } from 'react'; 
import styled from 'styled-components';

const RenderReturnForm = props => {
    const [displayInput, setDisplayInput] = useState(false);  

    const { setOtherFeedback,
        OtherFeedback,
        setChoice, 
    } = props;

    const handleChange = e => {
        const { value } = e.target
        setChoice(value); 
    }

    const closeDispplayOther = () => {
        setDisplayInput(false)
    }

    const openDispplayOther = () => {
        setDisplayInput(true)
    }

    const toggleVal = (val, dispatch) => {
        dispatch(!val)
    }

    const handleTextChange = event => {
        setOtherFeedback(event.target.value)
    }
    var OtherCat = null

    return (
        <FormContainer>
            <InnerContainer >
                <Line><InputRadio type='radio' value={"1"} name="reason" onClick={closeDispplayOther} onChange={handleChange} /><Text>The product didn't meet my expectations.</Text></Line>
                <Line><InputRadio type='radio' value={"2"} name="reason" onClick={closeDispplayOther} onChange={handleChange} /><Text>I am sent the wrong product.</Text></Line>
                <Line><InputRadio type='radio' value={"3"} name="reason" onClick={closeDispplayOther} onChange={handleChange} /><Text>The product never arrived to my doorstep.</Text></Line>
                <Line><InputRadio type='radio' value={"4"} name="reason" onClick={closeDispplayOther} onChange={handleChange} /><Text>I got the same product as a gift.</Text></Line>
                <Line><InputRadio type='radio' value={"5"} name="reason" onClick={closeDispplayOther} onChange={handleChange} /><Text>I found a cheaper alternative somewhere else.</Text></Line>
                <Line><InputRadio type='radio' value={"6"} name="reason" onClick={closeDispplayOther} onChange={handleChange} /><Text>I found better prices somewhere else.</Text></Line>
                <Line><InputRadio
                    type='radio'
                    value={"Other"}
                    onClick={openDispplayOther}
                    name="reason"
                    id="OtherCat"
                    onChange={handleChange}
                /><Text>Other.</Text></Line>
            </InnerContainer>
            {displayInput ?
                <TextArea
                    placeholder="Care to elaborate?"
                    onChange={handleTextChange}
                    value={OtherFeedback}
                 //   cols="50"
                    rows="7"
                />
                :
                null}
    </FormContainer>)
}

export default RenderReturnForm; 

const FormContainer = styled.div`
width: 70%; 
margin-left: auto; 
margin-right: auto; 
border-radius: 15px; 
border: 1px solid rgba(0,0,0,0.3); 
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
padding-top: 15px;

@media screen and (max-width: 540px){
    width: 92%; 
}
`

const InnerContainer = styled.form`
width: 40%; 
text-align: left;
margin-left: auto; 
margin-right: auto;
@media screen and (max-width: 540px){
 width: 90%;
}
`

const InputRadio = styled.input`
display: inline-block; 
`

const Text = styled.div`
display: inline-block; 

`

const Line = styled.div`
margin-bottom: 10px;
`

const TextArea = styled.textarea`
    margin-top: 10px; 
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    font-family: inherit;
    padding:10px; 
    resize: none;
    border-radius: 15px;
    width: 95%;  
@media screen and (max-width: 540px){
width: 80%;  
}
`