import React, { useEffect, useState, useRef } from 'react'; 
import './product.css'; 
import '../../style/button.css';
import Header from '../../base_elements/header.js';
import Footer from '../../base_elements/footer.js';
import RenderCollection from './renderCollection.js'; 
import { ProductCollection } from '../../components/ProductCollection.js'; 
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
    const [timeoutID, setTimeoutID] = useState(null);
    var MainContRef = useRef(); 
    const [MainContHeight, setMainContHeight] = useState(0)

    var mainContainer = document.getElementById("ProductIndex_MainContainer");
    var count = Object.keys(ProductCollection).length;
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
        mainContainer = document.getElementById("ProductIndex_MainContainer");
        var heightMultiplier = Math.floor(Object.keys(ProductCollection).length / 3) + ((Object.keys(ProductCollection).length % 3) > 0 ? 1 : 0);
        const newHeight = 582 * heightMultiplier;
        setMainContHeight(newHeight)
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

    useEffect(() => {
        if (MainContRef.current) {
            mainContainer = document.getElementById("ProductIndex_MainContainer");
        }
    }, [MainContRef.current])

    const MainContID = "ProductIndex_MainContainer"; 

    return (
        <ProductContext.Provider value={context} >
            <MainContainer
                id="ProductIndex_MainContainer" opacity={opacityLevel}
                ref={MainContRef}
            >
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
                {MainContHeight !== 0 && <Footer
                    onDynamicPage={true}
                    size={ProductCollection.length}
                    MainContainerID={`#${MainContID}`}
                />}
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