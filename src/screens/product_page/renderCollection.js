import React, { useState, useEffect } from 'react';
import { ProductCollection } from '../../components/ProductCollection.js'; 
import uuid from 'react-uuid'
import RenderProduct from './renderProduct.js'; 
import styled from 'styled-components'; 

const RenderCollection = props => {
    //props.arrlength carries the length of the array that has all the tea data
    var count = props.arrlength; 
    var Collection = [...ProductCollection]; 

    useEffect(() => {
        setDisplay(Collection.length < 3 ? Collection.length : 3)
    }, [Collection.length])

    const determineGrid = event => {
        if (Collection.length >= 3) {
            if (window.innerWidth <= 1145) {
                return 2;
            }
            else {
                return 3;
            }
        }
        else {
            return Collection.length; 
        }
    }

    const [display, setDisplay] = useState(determineGrid())

    window.addEventListener("resize", ()=>setDisplay(determineGrid()))
    useEffect(() => {
        //This line is to make sure that every time user switches from other pages to product collection page
        //the grid gets displayed correctly.
        setDisplay(determineGrid())
        return () => { window.removeEventListener("resize", () => { setDisplay(determineGrid()) })}
    }, [])

    return (
        <MainSection id="ProductCollectionMainSection" Repeat={`${display}`}>
            {Collection.map(item => <RenderProduct key={uuid()} {...item} />)}
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
        width: auto;
}
`
