import React, { useEffect, useState, useRef } from 'react'; 
import Header from './base_elements/header.js';
import Footer from './base_elements/footer.js';
import RenderPanels from './components/renderPanels.js';
import RenderMessage from './screens/product_page/addProductMessage/renderMessagePanel.js';
import { PageTemplateContext } from './components/pageTemplateContext.js'; 

import {
    MainContainer,
    InnerContainer,
    Filler, 
} from './style/globalStyledComp.js'; 

//This is the template for all pages that uses the same header and footer 
//The individual page's content is rendered in the <MainContent /> tag 
const PageTemplate = props => {
    const { MainContent,
        openHamburger,
        openPanel,
        accountPanel,
        addProductMessage,
        wishlist,
        cart,
        ProductProfileID, 
        data,
        onDynamicPage,
        numberOfDyamicItems
    } = props;

    const [height, setHeight] = useState("100vh")
    const [InnerContHeight, setInnerContHeight] = useState("100%");
    const [keepAuto, setKeepAuto] = useState(false)
    const [arrData, setArrData] = useState(null)
    const [message, setMessage] = useState(''); 

    //The following state component is to pass information from the page to the template. 
    const [interimData, setInterimData] = useState(null); 
    const changeHeight = change => {
        setHeight(change)
    }

    const MainContRef = useRef();
    var MainContElem = document.querySelector("#PageTemplate_MainContainer"); 
    const [MainContHeight, setMainContHeight] = useState(0); 


    
    useEffect(() => {
        window.scrollTo(0, 0); 

    }, [])

    useEffect(() => {
        if (MainContRef.current) {
            MainContElem = document.querySelector("#PageTemplate_MainContainer");
            setMainContHeight(MainContElem.offsetHeight);
        }
    }, [MainContRef.current])

    const resizeEvent = event => {
        MainContElem = document.querySelector("#PageTemplate_MainContainer");
        setMainContHeight(MainContElem.offsetHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', resizeEvent); 
        return () => { window.removeEventListener('resize', resizeEvent); }
    }, [])
    const context = {
        ProductProfileID, 
        //The following is to make sure that the footer stays in the right position by controlling the value of the height of <InnerContainer> 
        changeInnerContHeight: (val) => setInnerContHeight(val),
        setUnitForMeasure: data => { setArrData(data) },

        //makePageAuto is for screens that don't have a list but have elements that take up the full screen and can dynamically change the size of the screen.
        makePageAuto: () => {
            setInnerContHeight("auto")
        },
        makePageInherit: () => {
            setInnerContHeight("100%")
        },
        //This is pass the product ID to the Product Profile Page so that the product can be displayed on that page. 
        getProductID: () => ProductProfileID, 
        changeMessage: (mess) => {
            setMessage(mess);
        },
        getData:()=>data, 
        }

    //The following code for context and useEffect block are to help determine the value of the height of the <InnerContainer>
    //This is to prevent the footer from being positioned in the middle of the screen.
    //If there are more than one items displayed on the screen, set height of <InnerContainer> to auto
    //...so that the last product at the bottom doesn't overlap the footer. 
    const MainContainerID = "PageTemplate_MainContainer"

    return (
        <PageTemplateContext.Provider value = {context}>
            <MainContainer
                heightChange={height}
                id="PageTemplate_MainContainer"
                ref={MainContRef}
            >
                <InnerContainer heightType={InnerContHeight} id = "InnerContainer">
                <RenderPanels
                    burgerTrigger={openHamburger}
                    cartTrigger={openPanel}
                    accountTrigger={accountPanel}
                />
                <RenderMessage addProductMessage={addProductMessage} message={message} />
                <Header />
                    <Filler id = 'filler'/>
                    <MainContent
                        wishlist={wishlist}
                        changeHeight={changeHeight}
                        cart={cart}
                    />
            </InnerContainer>

            </MainContainer>
            <Footer
                onDynamicPage={onDynamicPage}
                size={numberOfDyamicItems}
                MainContainerID={`#${MainContainerID}`}
            />
        </PageTemplateContext.Provider>
        )
}

export default PageTemplate; 