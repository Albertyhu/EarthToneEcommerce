import React, { useState, useRef, useEffect } from 'react';
import '../../style/myStyle.css';
import styled from "styled-components";
import {
    FooterContainer,
    FooterWrapper,
    Section
} from './styledComp.js' 
import RenderNewLetterSubsc from '../footerSections/newsLetterSubsc.js';
import RenderInformationSection from '../footerSections/infoSection.js';
import CustomerSection from '../footerSections/customerSection.js';
import ContactSection from '../footerSections/contactSection.js';
import RenderSocialPanel from '../footerSections/socialMedia.js';

const Footer = props => {
    return (
        <FooterContainer
            ref={FooterRef}
            id="FooterContainerTwo"
        >
            <FooterWrapper id="FooterWrapper">
                <Section id="Information">
                    <RenderInformationSection />
                </Section>
                <Section id="Customer">
                    <CustomerSection />
                </Section>
                <Section id="Contact">
                    <ContactSection />
                </Section>
                <Section id="Social">
                    <RenderSocialPanel />
                </Section>
                <Section id="Newsletter">
                    <RenderNewLetterSubsc />
                </Section>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer;
