import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import {
    Container,
    TextBlock,
    ListItem,
    UnorderedList,
} from './sectionStyle.js';
import { FiTwitter, FiInstagram, FiFacebook } from 'react-icons/fi';
import { ImPinterest2 } from 'react-icons/im';
import { AiOutlineFacebook } from 'react-icons/ai';
import ShareLink from 'react-facebook-share-link'

const RenderSocialPanel= props => {

    return (
        <Container>
            <h3 style={{textAlign: 'center'}}>Spread the world about us</h3>
            <SocialMediaCont>
                <ShareLink link='https://github.com/Albertyhu'>{link => (<a href={link} target="_blank"><FiFacebook style={iconStyle} /></a>)}</ShareLink>
                <a href="https://www.instagram.com/" target="_blank"><FiInstagram style={iconStyle} /></a> 
                <a href="https://www.twitter.com/" target="_blank"><FiTwitter style={iconStyle} /></a>
                <a href="https://www.pinterest.com/" target="_blank"><ImPinterest2 style={iconStyle} /></a>
             </SocialMediaCont>
        </Container>
        )
}

export default RenderSocialPanel; 

const SocialMediaCont = styled.div`
display: flex; 
justify-content: space-around;
`


const iconStyle = {
    cursor: "pointer",
    color: "#fff",
    width: "25px",
    height: "25px",
}