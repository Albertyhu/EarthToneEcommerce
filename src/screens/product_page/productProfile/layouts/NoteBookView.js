import React, { useEffect, useState, useCallback, useContext } from 'react';
import '../../product.css';
import { useLocation, useNavigate } from 'react-router-dom';
import ImagePanel from './../imagePanel.js';
import CTAPanel from './../CTApanel.js'
import { TeaData } from '../../../../components/teaData.js';
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
    ReviewSection
} from '../profileStyledComp.js';
import { MyContext, ProductProfileContext } from '../../../../components/contextItem.js';
import styled from 'styled-components';
import ReviewPanel from './../reviewPanel.js'; 
import RenderTextPanel from '../textPanel.js'; 

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
            <ReviewSection>
                {review ? <ReviewPanel
                    data={review}
                    productID={productID}
                />
                    :
                    null
                }
            </ReviewSection>
        </ThirdInnerContainer>
        )
}

export default RenderView; 