import React, { useEffect, useState, useCallback, useContext } from 'react';
import '../product.css'; 
import '../../../style/button.css'; 
import { useLocation, useNavigate } from 'react-router-dom';
import ImagePanel from './imagePanel.js'; 
import TextPanel from './textPanel.js'; 
import CTAPanel from './CTApanel.js'
import { ProductCollection } from '../../../data/ProductCollection.js'; 
import { SecondInnerCont} from '../../../style/globalStyledComp.js';
import PageTemplate from '../../../PageTemplate.js'; 
import { PageTemplateContext } from '../../../context/contextItem.js'; 
import { MyContext, ProductProfileContext  } from '../../../context/contextItem.js';
import styled from 'styled-components'; 
import ReviewPanel from './reviewPanel.js';
import NoteBookView from './layouts/NoteBookView.js'; 
import {
    getReviewsByProductId,
} from '../../../services/firebase/firebaseCRUD.js'; 
import { NavigationHooks } from '../../../hooks/navigation.js'
import {
    ReviewHeader, 
    ReviewSection,
    ThirdInnerContainer, 
    UpperSection,
} from "./profileStyledComp.js"
import { TanButton } from '../../../style/styledButton.js';

const ProductProfile = props => {

    const {
        openHamburger,
        openPanel,
        accountPanel,
        addProductMessage,
    } = props;
    const location = useLocation(); 
    const {
        id,
    } = location.state;

    const {
        getProductReviewCol,
        desktopView, 
    } = useContext(MyContext)


    return (<PageTemplate MainContent={MainContent}
        openHamburger={openHamburger}
        openPanel={openPanel}
        accountPanel={accountPanel}
        addProductMessage={addProductMessage}
        ProductProfileID={id}
        data={getProductReviewCol()}
        onDynamicPage={true}
        numberOfDyamicItems={1}
    />)
}

const MainContent = props => {

    const navigate = useNavigate();
    const {
        GoWriteNewProductReview,
    } = NavigationHooks(navigate)
    const { ProductProfileID, getProductID, makePageAuto, makePageInherit, getData } = useContext(PageTemplateContext)

    //Acquire reviews of all products 
    const [review, setReviews] = useState([]); 
    const [productID, setProductID] = useState(getProductID());
    const [product, setProduct] = useState(ProductCollection.find(val => val.ID === productID))
    const [renderMessage, setMessage] = useState('')
    useEffect(() => {
        var item = ProductCollection.find(val => val.ID === productID)
        setProduct(item)
    }, [productID])

    const handleMessage = val => {
        setMessage(val)
    }

    useEffect(() => {
        if (review) {
            makePageAuto();
        }
    }, [review])

    const [windowWidth, setWindowWidth ] = useState(window.innerWidth)

    const resizeEvent = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        setProductID(ProductProfileID)
        getReviewsByProductId(ProductProfileID, setReviews)
    }, [ProductProfileID])

    window.addEventListener('resize', resizeEvent)

    useEffect(() => {
        return () => { window.removeEventListener('resize', resizeEvent) }
    }, [])

    const context = {
        productID,
        product,
        handleMessage,
        review, 
    }
    if (windowWidth > 960) {
        return (
            <ProductProfileContext.Provider value={context}>
                <SecondInnerCont id ="ProductProfile_SecondInnerCont">
                    {product ?
                        <ThirdInnerContainer>
                            <UpperSection>
                                {product.imageArray.length > 0 ?
                                    <ImagePanel imageArray={product.imageArray} initial={product.image} />
                                    :
                                    null
                                }
                                <TextPanel name={product.name}
                                    description={product.description}
                                    price={product.price}
                                    amount={product.amount}
                                    weight={product.weight}
                                    width={product.width}
                                    length={product.length}
                                    height={product.height}
                                    ratingCount={product.ratingCount}
                                    ratingAvg={product.ratingAvg}
                                    displayTitle={true}
                                />
                                <CTAPanel price={product.price}
                                    productID={productID}
                                    shippingDays={product.shippingDays}
                                    setMessage={handleMessage}
                                />
                            </UpperSection>
                            <ReviewSection id ="review_section">
                                <ReviewHeader>Do you have any experience with this product?</ReviewHeader>
                                <TanButton
                                    onClick={() => GoWriteNewProductReview(ProductProfileID, product.name)}
                                    id="GoReviewButton"
                                >Share your thoughts</TanButton>
                                {review && review.length > 0 ?
                                    <ReviewPanel
                                        reviews={review}
                                        productID={productID}
                                    />
                                    :
                                    <p>Be the first one to review it.</p>
                                }
                            </ReviewSection>
                        </ThirdInnerContainer>
                        :
                        <p>There aren't any products displayed here.</p>
                    }
                </SecondInnerCont>
            </ProductProfileContext.Provider>
        )
    }
    else if (windowWidth <= 960) {
        return (
            <ProductProfileContext.Provider value={context}>
                <NoteBookView />
            </ProductProfileContext.Provider>
        )
    }
}


export default ProductProfile; 

