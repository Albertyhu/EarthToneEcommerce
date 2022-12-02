import React, { useState, useCallback, useEffect, useContext } from 'react';
import PageTemplate from '../../PageTemplate.js';
import { PageTemplateContext } from '../../context/contextItem.js';
import { SecondInnerCont } from '../../style/globalStyledComp.js'
import { WhiteButton } from '../../style/styledButton.js';
import { useNavigate } from 'react-router-dom';
import { checkEmail } from '../../hooks/checkEmail.js'; 
import {
    Paragraph,
    InputField, 
    InlineBlock,
    InputText,
    Textbox, 
    FormDiv,
} from './contactStyle.js'; 

const ContactUs = props => {
    const {
        openHamburger,
        openPanel,
        accountPanel,
    } = props;

    return (<PageTemplate MainContent={MainContent}
        openHamburger={openHamburger}
        openPanel={openPanel}
        accountPanel={accountPanel}
    />)
}

export default ContactUs;

const MainContent = props => {
    const { makePageAuto, makePageInherit } = useContext(PageTemplateContext);
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('')
    const [letter, setLetter] = useState('')
    const [displayForm, setDisplayForm] = useState(true); 

    const handleFirst = event => {
        setFirst(event.target.value)
    }

    const handleLast = event => {
        setLast(event.target.value)
    }
    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handleInput = event => {
        setLetter(event.target.value);
    }
    const reset = () => {
        setFirst('');
        setLast('');
        setEmail('');
        setLetter('')
    }

    const navigate = useNavigate();
    const goSubmissionPage = useCallback(() => navigate('/resume_submitted', {}), [navigate])
    const resizeEvent = e => {
        if (window.innerWidth > 540)
            makePageAuto()
        else
            makePageInherit();
    }
    const handleSubmission = () => {
        var errMess = "Please, correct the following before submitting: \n"; 
        var isValid = true; 
        if (first === '') {
            errMess += "You must leave us with your first name. \n";
            isValid = false; 
        }
        if (email === '') {
            errMess += "You must leave us with your email address so that we can reply back to you. \n";
            isValid = false; 
        }
        if (!checkEmail(email)) {
            errMess += "The format of your email address is incorrect. It must in the form of john@email.com \n";
            isValid = false; 
        }
        if (letter === '') {
            errMess += "The comment section is empty. \n";
            isValid = false; 
        }

        if (isValid) {
            setDisplayForm(false);
            reset();
            setTimeout(() => { setDisplayForm(true) }, 5000)
        }
        else {
            alert(errMess)
        }
    }

    resizeEvent();
    document.addEventListener("resize", resizeEvent)

    useEffect(() => {

        return () => { document.removeEventListener("resize", resizeEvent) }
    }, [])

    return (
        <SecondInnerCont>
            {displayForm ?
                <div>
                    <h2>Contact Us</h2>
                    <Paragraph>Let Us know what's on your mind.</Paragraph>
                    <FormDiv id="FormDiv">
                        <InputField>
                            <InlineBlock>
                                <h3>First Name</h3>
                                <InputText value={first} onChange={handleFirst} />
                            </InlineBlock>
                            <InlineBlock>
                                <h3>Last Name</h3>
                                <InputText value={last} onChange={handleLast} />
                            </InlineBlock>
                        </InputField>
                        <h3>Email</h3>
                        <InputText value={email} onChange={handleEmail} />
                        <h3>Attach any file that is relevant to your post.</h3>
                        <form enctype="multipart/form-data" action="/upload/image" method="post">
                            <input id="image-file" type="file" />
                        </form>
                        <Textbox autocorrect="on"
                            placeholder="Say Something"
                            onChange={handleInput}
                            value={letter}
                            rows="5"
                        />
                        <WhiteButton id="CareerPageSubmit" onClick={handleSubmission}>Submit</WhiteButton>
                    </FormDiv>
                </div>
                :
                <PostSubmission />
                }
        </SecondInnerCont>
    )

}

const PostSubmission = () => {
    return (
        <Paragraph>
            Thank you for submitting your comments. We will contact you shortly. 
        </Paragraph>
        )
}

