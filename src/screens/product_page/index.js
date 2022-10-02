import React, { useEffect, useState } from 'react'; 
import './product.css'; 
import '../../style/button.css';
import Header from '../../base_elements/header.js';
import Footer from '../../base_elements/footer.js';
import RenderCollection from './renderCollection.js'; 
import { TeaData } from '../../components/teaData.js'; 
import RenderMessage from './addProductMessage/renderMessagePanel.js';
import RenderPanels from '../../components/renderPanels.js'; 
import { ProductContext } from './productContext.js'; 
import { Filler } from '../../style/globalStyledComp.js'; 
import styled from 'styled-components'; 

const ProductPage = props => {
    const { openPanel, accountPanel, addProductMessage, openHamburger } = props; 

    //this is for the message that appears when product is added to cart or wishlist
    const [renderMessage, setMessage] = useState('')
    const [opacityLevel, setOpacityLevel] = useState(1.0)
    const [timeoutID, setTimeoutID] = useState(null)
    var count = Object.keys(TeaData).length;
    var windowWidth; 


    const cancelLowOpacity = e => {
        clearTimeout(timeoutID);
        setOpacityLevel(1.0);
    }


    useEffect(() => {
        document.addEventListener('mousedown', cancelLowOpacity)
        return () => document.removeEventListener('mousedown', cancelLowOpacity)
    }, [opacityLevel])

    useEffect(() => {
        const mainContainer = document.getElementById("mainContainer");
        var heightMultiplier = Math.floor(Object.keys(TeaData).length / 3) + ((Object.keys(TeaData).length % 3) > 0 ? 1 : 0);
        const newHeight = 530 * heightMultiplier;
        mainContainer.style.height = `${newHeight}px`; 

       
    }, [])

    const context = {
        //this is for the message that appears when product is added to cart or wishlist
        changeMessage: (val) => { setMessage(val) }, 
        changeOpacity: () => {
            setOpacityLevel(0.3)
            setTimeoutID(setTimeout(() => {setOpacityLevel(1)}, 2000))
        }, 

    }

    return (
        <ProductContext.Provider value={context} >
            <MainContainer id="mainContainer" opacity={opacityLevel}>
                <div id='innerContainer'>
                    <RenderPanels
                        burgerTrigger={openHamburger}
                        cartTrigger={openPanel}
                        accountTrigger={accountPanel}
                    />
                    <RenderMessage addProductMessage={addProductMessage} message={renderMessage} />
                    <Header windowWidth={windowWidth} />
                    <Filler />
                    <ContentContainer opacity={opacityLevel}>
                        <RenderCollection arrlength={count} />
                    </ContentContainer>
                </div>
                <Footer />
            </MainContainer >
        </ProductContext.Provider>
        )
}

export default ProductPage; 


const MainContainer = styled.div`
width: 100%;
height: 100vh;
text-align: center;
background-image: none;
background-repeat: no-repeat;
background-size: cover;
background-color: #ffffff;
font-family: serif;
`

const ContentContainer = styled.div`
opacity: ${props => props.opacity};

@media screen and (max-width: 540px) {
       margin-bottom: 31px;
    
}
`