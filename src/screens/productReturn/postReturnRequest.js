import React, { useState, useCallback, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import PageTemplate from '../../PageTemplate.js';
import { SecondInnerCont } from '../../style/globalStyledComp.js'
import {  TanButton } from '../../style/styledButton.js';

const PostReturnRequest = props => {
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

export default PostReturnRequest; 

const MainContent = () => {
    const navigate = useNavigate()
    const goShop = useCallback(() => navigate('../product_page', {replace: true}), [navigate])

    return (
        <SecondInnerCont>
            <h3>Your return request will be processed and be reviewed within 5 - 18 business days.</h3>
            <TanButton id="PostReturnContinueButton" onClick={goShop}>Continue browsing our collection</TanButton>
        </SecondInnerCont>
        )
}