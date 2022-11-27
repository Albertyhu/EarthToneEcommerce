import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import {
    Panel,
    ProductImage,
    ProductTitle, 
    ViewLink
} from './myStyle.js';

const App = props => {
    const {
        ID, 
        name, 
        image,
    } = props;

    const navigate = useNavigate(); 

    const goProductProfile = useCallback(() => navigate('../product_profile', {
        replace: true,
        state: {
            id: ID,
        }
    }), [navigate])

    return (
        <Panel onClick={goProductProfile}>
            <ProductImage src={image} alt="Product Image" />
            <ProductTitle>{name}</ProductTitle>
            <ViewLink>View Product</ViewLink>
        </Panel>
        )
}

export default App; 