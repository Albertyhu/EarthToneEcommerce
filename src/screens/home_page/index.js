import React, { createRef, useEffect, useCallback } from 'react'; 
import './home.css'; 
import '../../images/pouring_tea.jpg'
import { Link, useNavigate } from "react-router-dom";
import '../../style/button.css';  
import '../../style/myStyle.css'; 
import Header from '../../base_elements/header.js';
import Footer from '../../base_elements/footer.js';
import TeaCharacter from '../../base_elements/logo/Tea_chinese_character.png'; 
//renders the panels 
import RenderPanels from '../../components/renderPanels.js';
import { ShopNowButton } from '../../style/styledButton.js'; 
import { Filler } from '../../style/globalStyledComp.js'; 
import PageTemplate from '../../PageTemplate.js'; 
import { PageTemplateContext } from '../../components/pageTemplateContext.js'; 

const Template = props => {
    const {
        openHamburger,
        openPanel,
        accountPanel,
    } = props;
    return (
        <PageTemplate MainContent={Home}
            openHamburger={openHamburger}
            openPanel={openPanel}
            accountPanel={accountPanel}
        />
    )
}

const Home = props => {
    const { openPanel, openHamburger, accountPanel } = props;
    const navigate = useNavigate(); 
    const goProductPage = useCallback(() => navigate('../product_page', {}), [navigate])
    return (
        <div id="home_mainContainer">
            <div id='home_innerContainer'>
                <RenderPanels
                    burgerTrigger={openHamburger}
                    cartTrigger={openPanel}
                    accountTrigger={accountPanel}
                />
                <Header/>
                <div id ="centerElements">
                    <div id="titleContainer">
                        <div id = "HomeTitleWrapper">
                            <img src={TeaCharacter} id="tea_chinese_character" />
                            <div id = "Home_Title_Text">
                                <h1 id="title">Your Peace Of Mind Is Only One Cup Away</h1>
                                <p>Start your mornings with mental clarity.</p>
                                <p>Browse our collection of authentic tea leaves.</p>
                            </div>
                        </div>
                    </div>
                    <div id="buttonContainer">
                        <ShopNowButton onClick={goProductPage}>Shop Now</ShopNowButton>
                    </div>
                </div>
      
            </div>
            {/*<Footer />*/}
        </div>
        )
}

export default Template; 


