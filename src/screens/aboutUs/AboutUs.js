import React, { useState, useCallback, useEffect, useContext } from 'react';
import PageTemplate from '../../PageTemplate.js';
import { PageTemplateContext } from '../../components/pageTemplateContext.js'; 
import { SecondInnerCont } from '../../style/globalStyledComp.js'
import { WhiteButton, BlackButton } from '../../style/styledButton.js'; 
import styled from 'styled-components'; 

const AboutUsPage = props => {
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

export default AboutUsPage; 

const MainContent = props => {
    const { makePageAuto, makePageInherit, getProductID } = useContext(PageTemplateContext);

    return (
        <SecondInnerCont>
            <h2>About Us</h2>
            <Block>
            <Paragraph>Earth Tone was founded in 2003 and is the premier shop for premium tea leaves.
            We went through great lengths to travel to the most remote regions of Asia to source our products.
            Our founder and CEO started Earth Tone because of his love for tea and its ability to bring a sense of clarity
            and serenity in a cup. Thus, his mission is to share this rich experience with the world and to supply tea
                connoisseurs with the upmost satisfying customer experience.</Paragraph>
            <Paragraph>We at Earth Tone take pride in providing quality tea leaves that finds no rival. We are constantly
                working to accumulate interesting and delicious tea blends and exotic teas that expands the spectrum of fine
                taste. </Paragraph>
            </Block>
        </SecondInnerCont>
        )

}

const Paragraph = styled.p`

`

const Block = styled.div`
width: 50%;
margin-left: auto;
margin-right: auto;
text-align: left;
`