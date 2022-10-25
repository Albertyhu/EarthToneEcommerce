import React, { useCallback } from 'react'; 
import styled from 'styled-components'
//import { app } from '../../firebase/initializeFirebase.js'; 
import { GoogleAuthProvider, signInWithPopup, getAuth  } from 'firebase/auth'
import { AiOutlineGoogle } from 'react-icons/ai';
import {useNavigate} from 'react-router-dom'

const auth = getAuth(); 

const SignInWGoogle = props => {
    const navigate = useNavigate();
    const goHome = useCallback(() => navigate('/', {}), []);
    const SignIn = async () => {
        var provider = new GoogleAuthProvider();

        await signInWithPopup(auth, provider)
            .then(re => {
                goHome(); 
            })
            .catch((err) => {
                console.log("Google Sign In Error: " + err)
            })
    }

    return (
        <ButtonCont>
            <GoogleButton onClick={SignIn}><Icon><AiOutlineGoogle id="GoogleIcon" /></Icon><Text>Sign In with Google</Text></GoogleButton>
        </ButtonCont>
        )
}

export default SignInWGoogle; 

const ButtonCont = styled.div`
    margin-left: auto;
    margin-right: auto;
    text-align: center; 
    width: 100%;
    height: 40px;
    border-radius: 2px;
    background-color: $white;
    cursor: pointer; 
`
const GoogleButton = styled.div`
    margin-left: auto;
    margin-right: auto;
  width: 184px;
  height: 42px;
  background-color: $google-blue;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0,0,0,.25);
  font-family: Roboto; 
    display: grid;
    grid-template-columns: 30% 70%;
  &:hover {
    box-shadow: 0 0 6px $google-blue;
  }
  &:active {
    background: $button-active-blue;
    transform: translate(4px, 4px)
  }

@media screen and (max-width: 210px){
    width: 100px;
}
`

const Text = styled.div`
//display: inline-block; 
font-size: 12px;
margin: auto;
text-align: left;
white-space: no-wrap;
@media screen and (max-width: 210px){
}

`


const Icon = styled.div`
//display: inline-block; 
margin: auto;
& > #GoogleIcon{
    height: 25px;
    width: 25px;
    color: orange;
}

@media screen and (max-width: 210px){
    & > #GoogleIcon{
        height: 15px;
        width: 15px;
    }
}
`