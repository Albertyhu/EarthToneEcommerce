import React, { useState, useEffect, useCallback } from 'react'
import { MainCont, Title, Shell } from './myStyle.js'; 
import { ProductCollection } from '../ProductCollection.js'; 
import RenderPanel from './productPanel.js'; 
import uuid from 'react-uuid'; 

const App = props => {
    const {
        featured = [1 , 2 , 3, 4], 
    } = props; 

    const featuredCollection = ProductCollection.filter(product => featured.some(number => number === product.ID))

    return (
        <MainCont id ="FeaturedProduct_MainCont">
            <Title>Featured Products</Title>
            <Shell id = "FeaturedProduct_Shell">
            {featuredCollection.length !== 0 ?
                    featuredCollection.map(product => <RenderPanel {...product} key={uuid()} />)
                :
                null
                }
            </Shell>
        </MainCont>
        )
}

export default App; 
