import React, { useState, useCallback, useEffect } from 'react'; 
import { ProductCollection } from '../../data/ProductCollection.js';
import { MyContext } from '../../context/contextItem.js'; 
import uuid from 'react-uuid'; 
import RenderWishItem from './renderWishItem.js'; 
import PageTemplate from '../../PageTemplate.js';
import { PageTemplateContext } from '../../context/contextItem.js'; 
import { useNavigate } from 'react-router-dom'; 
import { BrownButton } from '../../style/styledButton.js';
import {
    MainContainer,
    Title,
    CheckOutContainer,
    Shell, 
    OuterShell, 
} from './wishStyled.js'; 
import {
    NoItemScreen
} from '../../style/globalStyledComp.js' 

const RenderWishList = props => {
    const {
        wishlist,
        openHamburger,
        openPanel,
        accountPanel,
        addProductMessage,
        message
    } = props;

    return (<PageTemplate MainContent={MainContent}
        openHamburger={openHamburger}
        openPanel={openPanel}
        accountPanel={accountPanel}
        addProductMessage={addProductMessage}
        message={message}
        wishlist={wishlist}
        onDynamicPage={true}
        numberOfDyamicItems={wishlist.length}
        />)
}

const MainContent = (props) => {
    const { wishlist, changeHeight } = props; 
    const { removeWish } = React.useContext(MyContext);
    const { setUnitForMeasure, makePageAuto, makePageInherit } = React.useContext(PageTemplateContext)
    const LoadWishes = () => {
        var arr = ProductCollection.filter(val => {
            return wishlist.some(wish => wish === val.ID)
        })
        return arr; 
    }
    const [data, setData] = useState(LoadWishes()); 

    const deleteWish = (ProductID) => {
        var arr = data.filter(val => val.ID !== ProductID) 
        setData(arr)
        removeWish(ProductID);   
    }

    const navigate = useNavigate(); 
    const goProductPage = useCallback(() => navigate('../product_page', { replace: true }), [navigate])

    //This is to help determine the value of the height of the <InnerContainer>
    //This is to prevent the footer from being positioned in the middle of the screen.
    //If there are more than one items displayed on the screen, set height of <InnerContainer> to auto
    //...so that the last product at the bottom doesn't overlap the footer. 

    const resizeEvent = () => {
        if (wishlist !== null && wishlist.length > 0) {
            if (window.innerWidth <= 540) {
                makePageAuto()
            }
            else {
                makePageInherit()
            }
        }
        else {
            makePageInherit();
        }
    }

    document.addEventListener('resize', resizeEvent)

    useEffect(() => {
        resizeEvent();
    }, [wishlist])


    useEffect(() => {
        return () => { document.removeEventListener('resize', resizeEvent)}
    }, [])

    return (<MainContainer id = "wishlistDiv">
    {
            wishlist.length !== 0 && wishlist !== null ?
                    <OuterShell Height="auto">
                        <Shell>
                            <Title>Wish List</Title>
                            {
                                data.map(val => <RenderWishItem {...val}
                                    key={uuid()}
                                    deleteWish={deleteWish}
                            />)}
                        </Shell>
                        <Shell id="rightPanel">
                            <CheckOutContainer>
                                <BrownButton id="ContinueButton" onClick={goProductPage}>Continue Shopping</BrownButton>
                            </CheckOutContainer>
                        </Shell>
                    </OuterShell>
                :
                <NoItemScreen
                >
                    <Title TextAlign={"center"}>You have no items currently in your wish list</Title> 
                </NoItemScreen>
        }

    </MainContainer>)    
}

export default RenderWishList; 