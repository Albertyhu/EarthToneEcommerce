import React from 'react';
import styled, { keyframes } from 'styled-components'; 
import EarthToneLogo from '../../base_elements/logo/Earth Tone.png'
import { Levels } from 'react-activity'; 

const RenderLoadingPage = props => {

    return (
        <MainContainer>
            <Shell>
                <Logo src={EarthToneLogo} /> 
                <LoadingWrapper><h3>Loading</h3><Levels /></LoadingWrapper>
            </Shell>
        </MainContainer>
        )    
}

export default RenderLoadingPage; 

const MainContainer = styled.div`
background-color: #9D5F38; 
width: 100%; 
height: 100vh; 
position: relative;
text-align: center;
  display: grid;
  grid-template-rows: 100vh;
  grid-template-columns: 100vw;
`
const Shell = styled.div`
margin: auto; 
text-align: center;
position: absolute; 
top: 10%; 
width: fit-content;
justify-self: center; 
align-self: center;
@media screen and (max-width: 310px){
top: 25%;
}
`

const Logo = styled.img`
width: 300px;
height: 300px;
@media screen and (max-height: 380px){
    width: 150px;
    height: 150px;
}
@media screen and (max-height: 220px){
   width: 75px;
    height: 75px;
}
@media screen and (max-width: 310px){
    width: 150px;
    height: 150px;
}
@media screen and (max-width: 160px){
   width: 75px;
    height: 75px;
}
`
const LoadingWrapper = styled.div`
color: #ffffff;
& > * {
    margin: 0 10px;
    display: inline-block; 
}
@media screen and (max-width: 160px){
    font-size: 8px;
}
`