
import React, { useState, useRef, useEffect } from 'react'; 
import '../style/myStyle.css'; 
import styled from "styled-components"; 
import RenderNewLetterSubsc from './footerSections/newsLetterSubsc.js'; 
import RenderInformationSection from './footerSections/infoSection.js'; 
import CustomerSection from './footerSections/customerSection.js'; 
import ContactSection from './footerSections/contactSection.js'; 
import RenderSocialPanel from './footerSections/socialMedia.js'; 

const Footer = props => {
   
    //Because the footer had to be contructed inside the Root div it's positioning has to be 
    //manually adjusted depending on the height of the main body and the footer.
    //This is to make sure that the footer doesn't overlap the content and it always stay at the 
    //bottom. 

    //The idea is that if the window.innerHeight is greater than the sum of the offsetHeights of 
    //the Main Body and the footer, the position of the footer should be set to 'fixed' and 
    //the "bottom" set to 0.
    //Otherwise, the position will be set to 'inherit' and the bottom will be set to 'auto'

    //MainContHeight is the offsetHeight of the main body of the content 
    const { onDynamicPage = false,
        size = 0,
        MainContainerID,  
    } = props;
    const FooterRef = useRef();
    var FooterElement = document.querySelector("#FooterContainer");
    
    //footerHeight stores the offsetHeight of the footer
    //This changes depending on the window size. 
    //The height of the footer increases and decreases based on the width of the window 

    //Boolean value to determine how the footer is positioned. 
    const [fixedPosition, setfixedPosition] = useState(false);
    var MainContainerElem = document.querySelector(MainContainerID); 

    const determinePosition = () => {
        MainContainerElem = document.querySelector(MainContainerID); 
        if (MainContainerElem !== null) {
            if (window.innerHeight > (FooterElement.offsetHeight + MainContainerElem.offsetHeight)) {
                setfixedPosition(true)
            }
            else {
                setfixedPosition(false)
            }
        }
        else {
            setfixedPosition(false)
        }
    }

    useEffect(() => {
        if (FooterRef.current) {
            FooterElement = document.querySelector("#FooterContainer");
            resizeEvent(); 
        }
    }, [FooterRef.current])

    //Keep track of offsetHeight of the footer every time the size of the window changes 
    const resizeEvent = event => {
        FooterElement = document.querySelector("#FooterContainer");
        determinePosition()
    }


    useEffect(() => {
        FooterElement = document.querySelector("#FooterContainer"); 
        determinePosition();
        window.addEventListener('resize', resizeEvent)
        return () => { window.removeEventListener('resize', resizeEvent) }
    }, [])

    return (
        <FooterContainer
            ref={FooterRef}
            id="FooterContainer"
            //Position={onDynamicPage ? size > 0 ? "inherit" : "absolute" : "inherit"}
            //Bottom={onDynamicPage ? size > 0 ? "auto" : "0" : "auto"}
             Position={fixedPosition ? "fixed" : "inherit"}
            //Bottom={fixedPosition ? "auto" : "0"}
            //Position={onDynamicPage ? size > 0 ? "inherit" : "inherit" : fixedPosition ? "inherit" : "absolute"}
           // Position={'inherit'}
            Bottom={onDynamicPage ? size > 0 ? "auto" : "0" : fixedPosition ? "auto" : "0"}
        >
            <FooterWrapper id = "FooterWrapper">
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
                <Section id = "Newsletter">
                    <RenderNewLetterSubsc /> 
                </Section>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer; 


const FooterContainer = styled.div`
    width: 100%; 
    background-color: #000000;
   // position: ${props => props.Position}; 
   // bottom: ${props => props.Bottom};
    position: absolute; 
    bottom: 0px;
    left: 0px; 
    right: 0px; 
`
const FooterWrapper = styled.div`
    margin: 0 auto;
    width: 100%; 
    background-color: #000000;
    height: auto;
    //bottom: 0;
    //left: 0;
    //right: 0;
    position: inherit;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    display: grid;
    grid-template-columns:  17% 17% 17% 22% 27%;


@media screen and (max-width: 866px) {
        position: relative;
        width: 58%;
        display: grid;
        grid-template: "info customer" 1fr
                        "contact social" 1fr
                        "news news";
     }

@media screen and (max-width: 540px) {
    display: inline-block; 
    width: 100%;
    
}

`

const Section = styled.div`
display: inline-block

@media screen and (max-width: 866px) {
    &#Information{
    grid-area: info; 
    } 
    &#Customer{
    grid-area: customer;
    }
    &#Contact{
    grid-area: contact; 
    }
    &#Social{
    grid-area: social; 
    }
    &#Newsletter{
       grid-area: news; 
        margin: auto;
    }
}
@media screen and (max-width: 540px) {
    &#Space{
    display: none;
}
}
`
