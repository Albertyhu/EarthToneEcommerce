import React, { useCallback } from 'react'; 
import styled from 'styled-components'
//import { app } from '../../firebase/initializeFirebase.js'; 
import { GoogleAuthProvider, signInWithPopup, getAuth  } from 'firebase/auth'
import { AiOutlineGoogle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/initializeFirebase.js';
const auth = getAuth();

const SignUpWGoogle = props => {
    const { setLoading } = props; 
    const navigate = useNavigate();
    const goHome = useCallback(() => navigate('/', {}), []);
    const SignUp = async () => {
        var provider = new GoogleAuthProvider();
        setLoading(true);
        await signInWithPopup(auth, provider)
            .then(async (result) => {
                try {
                    await setDoc(doc(db, 'users', result.uid), {
                        email: result.user.email,
                        first_name: result.displayName.split(' ').join('_'),
                        last_name: '',
                    })
                } catch (e){ console.log("error: " + e )}
                
                setLoading(false); 
                goHome(); 
            })
            .catch((err) => {
                console.log("Google Sign Up Error: " + err)
                setLoading(false);
            })
    }

    return (
        <ButtonCont>
            <GoogleButton onClick={SignUp}><Icon><AiOutlineGoogle id="GoogleIcon" /></Icon><Text>Sign In with Google</Text></GoogleButton>
        </ButtonCont>
        )
}

export default SignUpWGoogle; 

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
`

const Text = styled.div`
//display: inline-block; 
font-size: 12px;
margin: auto;
text-align: left;
white-space: no-wrap;
`


const Icon = styled.div`
//display: inline-block; 
margin: auto;
& > #GoogleIcon{
    height: 25px;
    width: 25px;
    color: orange;
}
`