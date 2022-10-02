import { getAuth, signOut } from 'firebase/auth'; 
import { BrownButton } from '../style/styledButton.js'; 

const auth = getAuth(); 

export const HandleSignOut = () => {
    signOut(auth).then(() => {
        alert('You have successfully signed out')
    })
}

export const SignOutButton = () => {
    return (
        <BrownButton onClick={HandleSignOut}>Sign Out</BrownButton>
        )
}