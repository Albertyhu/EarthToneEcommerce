import React, { createRef, useEffect, useCallback } from 'react';
import SpilledTea from '../../../images/spilled_tea_leaves.jpg'; 
import Aromatic from './icons/aromatherapy.png'; 
import Organic from './icons/organic_icon.png';
import Satisfaction from './icons/satisfaction_icon.png';
import TeaCup from './icons/tea-cup-icon.png';
import {
    MainCont,
    Shell,
    IconWrapper,
    Icon,
    Text,
    Subtext,
    Header, 
    Paragraph, 
} from './SectionTwoStyle.js';

const App = () => {
    return (
        <MainCont id="Home_Sect2_MainCont">
            <Header>Our meticulous standards go a long way</Header>
            <Paragraph  >All of our tea leaves are hand-picked in good shape, whole, and without any tear. We avoid  the use of any industrial machines to pick the leaves in order to maintain excellent quality. </Paragraph>
            <Shell id="Home_Sect2_Shell">
            <IconWrapper>
                <Icon src={Aromatic} alt = "icon" />
                <Text>Aromatic</Text>
                <Subtext>Experience fragrant smells</Subtext>
            </IconWrapper>
            <IconWrapper>
                <Icon src={TeaCup} alt="icon"/>
                <Text>Great Taste</Text>
                <Subtext>Will lighten up your taste buds</Subtext>
            </IconWrapper>
            <IconWrapper>
                <Icon src={Organic} alt="icon"/>
                <Text>100% Organic</Text>
                <Subtext>Sustainable agriculture practice</Subtext>
            </IconWrapper>
            <IconWrapper>
                <Icon src={Satisfaction} alt="icon" />
                <Text>100% Satisfaction Guaranteed</Text>
                <Subtext>Or your money back</Subtext>
                </IconWrapper>
            </Shell>
        </MainCont>
    )
}
export default App; 