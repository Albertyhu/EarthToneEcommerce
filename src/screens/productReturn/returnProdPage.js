import React, { useState, useCallback, useEffect, useContext } from 'react'; 
import {useLocation, useNavigate} from 'react-router-dom'
import PageTemplate from '../../PageTemplate.js'; 
import { SecondInnerCont } from '../../style/globalStyledComp.js'
import { PageTemplateContext } from '../../components/pageTemplateContext.js'; 
import { WhiteButton, BlackButton } from '../../style/styledButton.js'; 
import styled from 'styled-components'; 
import RenderReturnForm from './returnForm.js'; 

const ReturnProductPage = props => {
    const {
        openHamburger,
        openPanel,
        accountPanel,
        addProductMessage,
    } = props;

    const location = useLocation();
    const { productID } = location.state; 

    return (<PageTemplate MainContent={MainContent}
        openHamburger={openHamburger}
        openPanel={openPanel}
        accountPanel={accountPanel}
        addProductMessage={addProductMessage}
        ProductProfileID={productID}
    />)
}

export default ReturnProductPage; 

const MainContent = props => {
    const { makePageAuto, makePageInherit, getProductID } = useContext(PageTemplateContext);
    const [OtherFeedback, setOtherFeedback] = useState('');
    const [choice, setChoice] = useState(""); 

    const navigate = useNavigate();
    const goOrderPage = useCallback(() => navigate('../orders', {replace: true}),[navigate])
    const goPostReturnRequestPage = useCallback(() => navigate('../Return_request_received', { replace: true }), [navigate])
    const handleSubmit = () => {
        console.log("choice= " + choice)
        console.log("OtherFeedback= " + OtherFeedback)
        goPostReturnRequestPage()
    }

    useEffect(() => {
        makePageInherit();
    }, [])

    return (
        <SecondInnerCont>
            <h2>Is there a reason for returning the product?</h2>
            <RenderReturnForm
                setOtherFeedback={setOtherFeedback}
                OtherFeedback={OtherFeedback}
                setChoice={setChoice}
            />
            <ButtonContainer>
                <WhiteButton id="ReturnProduct" onClick={handleSubmit}>Return Product</WhiteButton>
                <BlackButton id="CancelReturn" onClick={goOrderPage}>Nevermind</BlackButton>
            </ButtonContainer> 
        </SecondInnerCont>
        )
}


const ButtonContainer = styled.div`
    width: 100%;
`