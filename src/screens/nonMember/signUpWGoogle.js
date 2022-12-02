import React, { useCallback } from 'react'; 
import styled from 'styled-components'
import { GoogleAuthProvider, signInWithPopup, getAuth  } from 'firebase/auth'
import { AiOutlineGoogle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/initializeFirebase.js';
const auth = getAuth();

const SignUpWGoogle = props => {
    const { setLoading, disabled, first, last } = props; 
    const navigate = useNavigate();
    const goHome = useCallback(() => navigate('/', {}), []);

    const handleClick = () => {
        var errMess = "Please, correct the following issues before signing up with Google: \n"; 
        var isValid = true; 

        if (disabled) {
            errMess += "You must agree to terms of service first. \n"; 
            isValid = false;
        }
        if (first === '' || first === undefined || first === null) {
            errMess += "Please, write down your first name. \n";
            isValid = false; 
        }
        if (last === '' || last === undefined || last === null) {
            errMess += "Please, write down your last name. \n";
            isValid = false; 
        }
        if (isValid) {
            SignUp();
        }
        else {
            alert(errMess); 
        }
    }
    const SignUp = async () => {
        var provider = new GoogleAuthProvider();
        setLoading(true);
        await signInWithPopup(auth, provider)
            .then(async (result) => {
                try {
                    await setDoc(doc(db, 'users', result.user.uid), {
                        email: result.user.email,
                        first_name: first, 
                        last_name: last,
                    })
                } catch (e){ console.log("error: " + e )}
                
                setLoading(false); 
                goHome(); 
            })
            .catch((err) => {
                alert("Google Sign Up Error: " + err)
                setLoading(false);
            })
    }

    return (
        <ButtonCont>
            <GoogleButton
                onClick={handleClick}
                Color={disabled || first === '' || last === '' ? "#aeaeae" : "#ffffff"}
                Cursor={disabled || first === '' || last === '' ? "not-allowed" : "pointer"}
            ><Icon Color={disabled || first === '' || last === '' ? "#7e7e7e" : "orange"}><AiOutlineGoogle id="GoogleIcon" /></Icon><Text>Sign In with Google</Text></GoogleButton>
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
    background-color: #ffffff;
`
const GoogleButton = styled.div`
    margin-left: auto;
    margin-right: auto;
  width: 184px;
  height: 42px;
  background-color:  ${props => props.Color || "white"};
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0,0,0,.25);
  font-family: Roboto; 
    display: grid;
    grid-template-columns: 30% 70%;
    cursor: ${props => props.Cursor}; 
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
`


const Icon = styled.div`
//display: inline-block; 
margin: auto;
& > #GoogleIcon{
    height: 25px;
    width: 25px;
    color: ${props => props.Color || "orange"};
}
`