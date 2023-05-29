import React, { useEffect, useState, useCallback, useContext } from 'react';
import '../../product.css';
import { useLocation, useNavigate } from 'react-router-dom';
import ImagePanel from './../imagePanel.js';
import CTAPanel from './../CTApanel.js'
import { ProductCollection } from '../../../../data/ProductCollection.js';
import {
    SecondInnerCont,
    ThirdInnerContainer,
    TextPanel, 
    ProductTitle, 
    PriceBlock,
    SalesPrice,
    ItemDimTitle,
    Row,
    RowLabel,
    RowData,
    InfoTable, 
    NoteBookSectionTwo,
    ReviewSection, 
    ReviewHeader,
} from '../profileStyledComp.js';
import { MyContext, ProductProfileContext } from '../../../../context/contextItem.js';
import ReviewPanel from './../reviewPanel.js'; 
import RenderTextPanel from '../textPanel.js'; 
import { NavigationHooks } from '../../../../hooks/navigation.js'
import { TanButton } from '../../../../style/styledButton.js';

const RenderView = props => {
    const {
        productID,
        product,
        handleMessage,
        review, 
    } = useContext(ProductProfileContext); 

    const { name,
        description,
        price,
        amount,
        weight,
        width,
        length,
        height,
        ratingAvg,
        ratingCount,
    } = product;
    const navigate = useNavigate();

    const {
        GoWriteNewProductReview,
    } = NavigationHooks(navigate)

    

    return (
        <ThirdInnerContainer>
                <ProductTitle>{name}</ProductTitle>
                {product.imageArray.length > 0 ?
                    <ImagePanel imageArray={product.imageArray} initial={product.image} />
                    :
                    null
            }
            <NoteBookSectionTwo>
            <RenderTextPanel
                name={product.name}
                description={product.description}
                price={product.price}
                amount={product.amount}
                weight={product.weight}
                width={product.width}
                length={product.length}
                height={product.height}
                ratingCount={product.ratingCount}
                ratingAvg={product.ratingAvg}
                displayTitle={false}
            />
            <CTAPanel price={product.price}
                productID={productID}
                shippingDays={product.shippingDays}
                setMessage={handleMessage}
                />
            </NoteBookSectionTwo>
            <ReviewSection id="review_section_mobile">
                <ReviewHeader>Do you have any experience with this product?</ReviewHeader>
                <TanButton
                    onClick={() => GoWriteNewProductReview(productID, product.name)}
                    id="GoReviewButton"
                >Share your thoughts</TanButton>
                {review && review.length > 0 ? <ReviewPanel
                    reviews={review}
                    productID={productID}
                    />
                    :
                    <p>Be the first one to review it.</p>
                }
            </ReviewSection>
        </ThirdInnerContainer>
        )
}

export default RenderView; 