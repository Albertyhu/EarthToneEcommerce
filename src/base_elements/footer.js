import '../style/myStyle.css'
import styled from "styled-components"; 
import RenderNewLetterSubsc from './footerSections/newsLetterSubsc.js'; 
import RenderInformationSection from './footerSections/infoSection.js'; 
import CustomerSection from './footerSections/customerSection.js'; 
import ContactSection from './footerSections/contactSection.js'; 
import RenderSocialPanel from './footerSections/socialMedia.js'; 

const Footer = () => {
    return (
        <FooterContainer id="FooterContainer">
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
`
const FooterWrapper = styled.div`
    margin: 0 auto;
    width: 90%; 
    height: auto;
    bottom: 0;
    left: 0;
    right: 0;
    position: inherit;
    z-index: 2;
    display: grid;
    grid-template-columns:  17% 17% 17% 22% 27%;


@media screen and (max-width: 866px) {
        position: relative;
        left: 0;
        right: 0;
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
