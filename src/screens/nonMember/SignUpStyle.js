import styled from 'styled-components'
import EarthToneLogo from '../../base_elements/logo/Earth Tone-black-transparent.png'

export const InputField = styled.input`
    width: 100%; 
    font-family: inherit;
    padding-left: 10px;
    border: 0px;
    border-radius: 20px;
    &:focus {
    border: none;
    outline: none;
    }
`
export const InputContainer = styled.div`
    margin-top: 10px;
    display: flex;
    width: 100%;    
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.3); 
    border-radius: 10px; 
    justify-content: center; 
`

export const InputDiv = styled.div`
    margin-left: auto; 
    margin-right: auto;
    width: 90%;
    margin-top: 20px;
    margin-bottom: 20px;
`
export const SubTitle = styled.h3`
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 10px;
    float: left;
`

export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #ffffff;
    font-family: serif;
    margin-top: 220px; 
  @media screen and (max-width: 540px) {
     margin-top: 102px; 
}
`