import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components'; 
import { Header3 } from './sectionStyle.js'; 

import {
    Container,
    TextBlock,
    ListItem,
    UnorderedList,
} from './sectionStyle.js';

const ContactSection = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Header3>Contact Us</Header3>
            <Para>P.O. Box 1045 </Para>
            <Para id ="secondPara">Pasadena, CA 97750</Para>
            <Subtitle>Email us</Subtitle>
            info@EarthTone.com
        </Container>
    )
}

export default ContactSection; 

const Subtitle = styled.div`
font-weight: bold; 
`

const Para = styled.span`
line-height: 0px; 
&#secondPara{
    margin-left: 5px;
}
@media screen and (max-width: 591px){
    &#secondPara{
        margin-left: 0px;
    }
}
@media screen and (max-width: 1000px){
line-height: 15px;

}




`