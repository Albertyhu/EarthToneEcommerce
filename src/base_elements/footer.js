import '../style/myStyle.css'
import styled from "styled-components"; 
import RenderNewLetterSubsc from './footerSections/newsLetterSubsc.js'; 
import RenderInformationSection from './footerSections/infoSection.js'; 
import CustomerSection from './footerSections/customerSection.js'; 
import ContactSection from './footerSections/contactSection.js'; 
import RenderSocialPanel from './footerSections/socialMedia.js'; 

const Footer = () => {
    return (
        <FooterContainer>
            <Section id="Space">
            </Section>
            <Section id="Section">
                <RenderInformationSection />
            </Section>
            <Section id="Section">
                <CustomerSection />
            </Section>
            <Section id="Section">
                <ContactSection />
            </Section>
            <Section id="Section">
                <RenderSocialPanel />
                </Section>
            <Section id = "Section">
                <RenderNewLetterSubsc /> 
            </Section>

        </FooterContainer>
    )
}

export default Footer; 



const FooterContainer = styled.div`
    background-color: #9D5F38;
    height: auto;
    bottom: 0;
    left: 0;
    right: 0;
    position: inherit;
    z-index: 2;
    display: grid;
    grid-template-columns: 10% 15% 15% 15% 20% 25%;
@media screen and (max-width: 540px) {
        position: relative;
        left: 0;
        right: 0;
grid-template-columns: none;
    }

`

const Section = styled.div`
display: inline-block
@media screen and (max-width: 540px) {
    &#Space{
    display: none;
}
}
`
