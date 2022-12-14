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
    InputText,
    InlineBlock,
    Textbox,
    FormDiv
} from './careerStyle.js';

const CareerPage = props => {
    const {
        openHamburger,
        openPanel,
        accountPanel,
    } = props;

    return (<PageTemplate MainContent={MainContent}
        openHamburger={openHamburger}
        openPanel={openPanel}
        accountPanel={accountPanel}
        onDynamicPage={false}
        numberOfDyamicItems={1}
    />)
}

export default CareerPage;

const MainContent = props => {
    const { makePageAuto, makePageInherit, getProductID } = useContext(PageTemplateContext);
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('')
    const [coverletter, setCoverLetter] = useState('')

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
        setCoverLetter(event.target.value);
    }
    const reset = () => {
        setFirst('');
        setLast('');
        setEmail('');
        setCoverLetter('')
    }

    const navigate = useNavigate();
    const goSubmissionPage = useCallback(() => navigate('/resume_submitted', {}), [navigate])

    const handleSubmission = () => {
        var errMess = "Please, correct the following before submitting: \n";
        var isValid = true;
        if (first === '') {
            errMess += "You must leave us with your first name. \n";
            isValid = false;
        }
        if (last === '') {
            errMess += "You must leave us with your last name. \n";
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
        if (coverletter === '') {
            errMess += "Your cover letter cannot be empty! \n";
            isValid = false;
        }

        if (isValid) {
            reset();
            goSubmissionPage();
        }
        else {
            alert(errMess)
        }
    }

    const resizeEvent = e => {
        if (window.innerWidth > 540)
            makePageAuto()
        else
            makePageInherit();
    }
    resizeEvent();
    document.addEventListener("resize", resizeEvent)

    useEffect(() => {

        return () => { document.removeEventListener("resize", resizeEvent) }
    }, [])

    return (
        <SecondInnerCont id="SecondInnerCont_careerpage">
            <h2>Interesting in joining our team?</h2>
            <Paragraph>Share your love of tea by becoming part of Earth Tone family. </Paragraph>
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
                <h3>Upload your resume</h3>
                <form enctype="multipart/form-data" action="/upload/image" method="post">
                    <input id="image-file" type="file" />
                </form>
                <Textbox autocorrect="on"
                    placeholder="Why do you think your a fit for Earth Tone?"
                    onChange={handleInput}
                    value={coverletter}
                    rows="5"
                />
                <WhiteButton id="CareerPageSubmit" onClick={handleSubmission}>Submit</WhiteButton>
            </FormDiv>
        </SecondInnerCont>
    )

}
