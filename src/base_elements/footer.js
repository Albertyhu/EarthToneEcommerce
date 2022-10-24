import '../style/myStyle.css'
import styled from "styled-components"; 
import RenderNewLetterSubsc from './footerSections/newsLetterSubsc.js'; 
import RenderInformationSection from './footerSections/infoSection.js'; 
import CustomerSection from './footerSections/customerSection.js'; 
import ContactSection from './footerSections/contactSection.js'; 
import RenderSocialPanel from './footerSections/socialMedia.js'; 

const Footer = props => {
    const { onDynamicPage = false, size = 0} = props; 
    return (
        <FooterContainer
            id="FooterContainer"
            Position={onDynamicPage ? size > 0 ? "inherit" : "absolute" : "inherit"}
            Bottom={onDynamicPage ? size > 0 ? "auto" : "0" : "auto"}
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
    position: ${props => props.Position || "inherit"}; 
    bottom: ${props => props.Bottom || "auto"}; 
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
