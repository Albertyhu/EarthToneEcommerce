import React, { useState, useCallback, useEffect, useContext } from 'react'
import PageTemplate from '../../PageTemplate.js';
import { PageTemplateContext } from '../../context/contextItem.js'; 
import { MyContext } from '../../context/contextItem.js'; 
import { useLocation, useNavigate } from 'react-router-dom'; 
import { ProductCollection } from '../../data/ProductCollection.js'; 
import { SecondInnerCont } from '../../style/globalStyledComp.js'; 
import {
    ProductContainer,
    Image,
    Textbox,
    ButtonContainer,
} from './reviewPageStyledComponents.js'; 
import { GreenButton, DarkGreenButton } from '../../style/styledButton.js'; 
import RenderRatingInput from '../../components/rating/renderRatingInput.js'; 

const RenderProductReviewPage = props => {
    const {
        openHamburger,
        openPanel,
        accountPanel,
        addProductMessage,
    } = props;
    const location = useLocation(); 
    const { productID } = location.state; 

    return (<PageTemplate MainContent={MainContent}
        openHamburger={openHamburger}
        openPanel={openPanel}
        accountPanel={accountPanel}
        addProductMessage={addProductMessage}
        ProductProfileID={productID}
    />)
}

export default RenderProductReviewPage; 

const MainContent = props => {
    const { getProductID, makePageAuto, makePageInherit, changeMessage } = useContext(PageTemplateContext); 
    const { openAddProductMessage, addProductReview } = useContext(MyContext)
    const [productID, setProductID] = useState(getProductID()); 
    const [product, setProduct] = useState({}); 
    const [productReview, setProductReview] = useState('')
    const [rating, setRating] = useState(0); 
    //for resizing textarea to make website responsive
    const [colLength, setColLength] = useState(window.innerWidth > 540 ? 150 : 49)
    useEffect(() => {
        setProduct(ProductCollection.find(val => val.ID === productID)); 
    }, [productID])

    const handleInput = event => {
        setProductReview(event.target.value); 
    }

    //If the website is viewed on mobile, decrease column length of text area
    const determineColLength = () => {
        if (window.innerWidth <= 540) {
            setColLength(49)
            makePageInherit()
        }
        else {
            setColLength(150)
            makePageAuto();
        }
    }

    const navigate = useNavigate();
    const goOrderPage = useCallback(() => navigate('../orders', {replace: true}), [navigate])
    const goProductProfile = useCallback(() => navigate('../product_profile', {
        replace: true, 
        state: {
            id: productID, 
        }
    }), [navigate])

    const handleSubmit = () => {
        var ErrMess = "Please, correct the following issue before submitting your review: \n"; 
        var isValid = true; 
        if (productReview.trim() === "") {
            ErrMess += "The text area cannot be empty. \n"; 
            isValid = false; 
        }
        if (rating === 0) {
            ErrMess += "You must indicate your rating for this product. \n"; 
            isValid = false; 
        }
        if (isValid) {
            changeMessage("Thanks for sharing your thoughts. Your review has been submitted.")
            addProductReview(productID, rating, productReview); 
            openAddProductMessage();
            setTimeout(()=>goProductProfile(), 2000)
        }
        else {
            alert(ErrMess)
        }

    }

    window.addEventListener('resize', determineColLength)

    useEffect(() => {
        determineColLength();
        return () => { window.removeEventListener('resize', determineColLength)}
    }, [])

    

    return (
        <SecondInnerCont>
            <ProductContainer> 
                <h1>Share your thoughts and experience about this product.</h1>
                <h2>{product.name}</h2>
                <Image src={product.image} />
                <RenderRatingInput
                    pickedStar={rating}
                    setPickedStar={setRating}
                />
            </ProductContainer> 
            <Textbox autocorrect="on"
                placeholder="Say something"
                onChange={handleInput}
                cols={colLength}
                rows="5"
            />
            <ButtonContainer>
                <GreenButton onClick={handleSubmit}>Submit</GreenButton>
                <DarkGreenButton onClick={goOrderPage}>Cancel</DarkGreenButton>
            </ButtonContainer>
        </SecondInnerCont>
        )
}

