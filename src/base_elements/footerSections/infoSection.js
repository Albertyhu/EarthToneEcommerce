import React, {useCallback} from 'react'
import { useNavigate } from 'react-router-dom'
import { Header3 } from './sectionStyle.js'; 

import {
    Container,
    TextBlock,
    ListItem,
    UnorderedList,
} from './sectionStyle.js'; 

const RenderInformationSection = () => {
    const navigate = useNavigate(); 
    const goAboutUs = useCallback(() => navigate('/About_Us', {}), [navigate])
    const goCareer = useCallback(() => navigate('/career', {}), [navigate])
    const goSiteMap = useCallback(() => navigate('/sitemap', {}), [navigate])

    return (
        <Container>
            <Header3>Information</Header3>
            <ListItem onClick={goAboutUs }>About Us</ListItem>
            <ListItem onClick={goCareer}>Careers</ListItem>
            <ListItem onClick={goSiteMap}>Site Map</ListItem>
        </Container> 
        )
}

export default RenderInformationSection; 