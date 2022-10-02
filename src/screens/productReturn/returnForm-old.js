import React, { useState } from 'react'; 
import styled from 'styled-components';

const RenderReturnForm = props => {
    const [displayInput, setDisplayInput] = useState(false);  

    const { setOtherFeedback,
        OtherFeedback,
        reason1,
        reason2,
        reason3,
        reason4,
        reason5,
        reason6,
        setReason1,
        setReason2,
        setReason3,
        setReason4,
        setReason5,
        setReason6,
    } = props;
    const toggleDisplayOther = () => {
        setDisplayInput(!displayInput)
    }

    const toggleVal = (val, dispatch) => {
        dispatch(!val)
    }

    const handleTextChange = event => {
        setOtherFeedback(event.target.value)
    }
    return (
        <FormContainer>
            <InnerContainer >
                <Line><InputRadio type='checkbox' value={reason1} onChange={() => toggleVal(reason1, setReason1)} /><Text>The product didn't meet my expectations.</Text></Line>
                <Line><InputRadio type='checkbox' value={reason2} onChange={() => toggleVal(reason2, setReason2)} /><Text>I am sent the wrong product.</Text></Line>
                <Line><InputRadio type='checkbox' value={reason3} onChange={() => toggleVal(reason3, setReason3)} /><Text>The product never arrived to my doorstep.</Text></Line>
                <Line><InputRadio type='checkbox' value={reason4} onChange={() => toggleVal(reason4, setReason4)} /><Text>I got the same product as a gift.</Text></Line>
                <Line><InputRadio type='checkbox' value={reason5} onChange={() => toggleVal(reason5, setReason5)} /><Text>I found a cheaper alternative somewhere else.</Text></Line>
                <Line><InputRadio type='checkbox' value={reason6} onChange={() => toggleVal(reason6, setReason6)} /><Text>I found better prices somewhere else.</Text></Line>
                <Line><InputRadio type='checkbox' value={displayInput} onChange={toggleDisplayOther} /><Text>Other.</Text></Line>
            </InnerContainer>
            {displayInput ?
                <TextArea
                    placeholder="Care to elaborate?"
                    onChange={handleTextChange}
                    value={OtherFeedback}
                    cols="50"
                    rows="7"
                />
                :
                null}
    </FormContainer>)
}

export default RenderReturnForm; 

const FormContainer = styled.div`
width: 60%; 
margin-left: auto; 
margin-right: auto; 
border-radius: 15px; 
border: 1px solid rgba(0,0,0,0.3); 
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
padding-top: 15px;
`

const InnerContainer = styled.div`
width: 40%; 
text-align: left;
margin-left: auto; 
margin-right: auto; 
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
   
`