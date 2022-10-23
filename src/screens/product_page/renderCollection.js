import React, { useState, useEffect } from 'react';
import { TeaData } from '../../components/teaData.js'; 
import RenderRow from './renderRow.js'; 
import uuid from 'react-uuid'
import RenderProduct from './renderProduct.js'; 
import styled from 'styled-components'; 

const RenderCollection = props => {
    //props.arrlength carries the length of the array that has all the tea data
    var count = props.arrlength; 
    var ProductCollection = [...TeaData]; 

    useEffect(() => {
        setDisplay(ProductCollection.length < 3 ? ProductCollection.length : 3)
    }, [ProductCollection.length])

    const determineGrid = event => {
        if (ProductCollection.length >= 3) {
            if (window.innerWidth <= 1145) {
                return 2;
            }
            else {
                return 3;
            }
        }
        else {
            return ProductCollection.length; 
        }
    }
    const [display, setDisplay] = useState(determineGrid())

    window.addEventListener("resize", ()=>setDisplay(determineGrid()))
    useEffect(() => {
        return () => { window.removeEventListener("resize", () => { setDisplay(determineGrid()) })}
    }, [])

    return (
        <MainSection id="ProductCollectionMainSection" Repeat={`${display}`}>
            {ProductCollection.map(item => <RenderProduct key={uuid()} {...item} />)}
        </MainSection>
        )
}

export default RenderCollection; 

const MainSection = styled.div`
    height: fit-content;
    width: 75%;
    display: grid;
    margin: 20px auto 40px auto; 
    grid-template-columns: repeat(${props => props.Repeat || "3"}, 1fr);
    gap: 20px;
    text-align: center; 
    justify-content: center; 
    @media screen and (max-width: 1145px){
        grid-template-columns: repeat(${props => props.Repeat || "2"}, 1fr);
    }
    @media screen and (max-width: 770px){
        display: block;
}
`
