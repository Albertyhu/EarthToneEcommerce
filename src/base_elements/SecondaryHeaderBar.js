import React, { useContext, useCallback } from 'react'; 
import { Link } from 'react-router-dom'; 
import {
    HeaderTagLine,
    SecHeadBarCont,
    NonMemberTag,
    MemberTag,
    WelcomeTag,
    MobileSignInText, 
} from './headerStyle.js'; 
import { MyContext } from '../context/contextItem.js';
import { BsFilePersonFill, BsCartFill  } from 'react-icons/bs';
import HamburgerIcon from '../images/icon/hamburger_menu_white.png';
import {
    MobileMenuCont,
    EarthToneIMG
} from './headerStyle.js';
import { BsPersonSquare } from 'react-icons/bs';
import { getAuth} from 'firebase/auth'
import EarthToneTextLogo from './logo/EarthToneTextLogoTan.png'; 
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'

const SecondaryHeaderBar = props => {
    const { openAccountPanel, toggleHamburgerPanel, desktopView, data } = useContext(MyContext); 
    const handleOpenPanel = () => { openAccountPanel() }; 

    const navigate = useNavigate(); 
    const goCart = useCallback(() => navigate('../cart', {replace:true}), [navigate])
    const goSignin = useCallback(() => navigate('../sign_in', {replace: true}), [navigate])
    const goHome = useCallback(() => navigate('../', { replace: true }), [navigate])

    return (
        <div>{desktopView ? 
        <SecHeadBarCont>
            {
                data ?
                    <WelcomeTag>Welcome, {data.first_name}</WelcomeTag>
                    :
                    null}
                   
            <HeaderTagLine>Orders of $50 or more will receive free shipping</HeaderTagLine>
            {
                data != null ?
                    <MemberTag onClick={handleOpenPanel}><BsFilePersonFill />Account</MemberTag>
                    :
                    <NonMemberTag><Link to="/sign_in" style={styledLink}>Sign in</Link>,
                    or <Link to="/sign_up" style={styledLink}>create a new account.</Link></NonMemberTag>
            }
                    
        </SecHeadBarCont>
                : 
        <SecHeadBarCont>
            <MobileMenuCont>
                    <img src={HamburgerIcon} id="hamburgerIcon" onClick={toggleHamburgerPanel} />
                    <EarthToneIMG src={EarthToneTextLogo} onClick={goHome} />
            </MobileMenuCont>
            <MobileMenuCont>
                    {data !== null ?
                        <IconWrapper>
                            <BsPersonSquare onClick={handleOpenPanel} />
                        </IconWrapper>
                        :
                        <SignInButton id="SignIn" onClick={goSignin} >
                            <MobileSignInText>Sign In</MobileSignInText>
                            <IconWrapper>
                                <BsPersonSquare  />
                            </IconWrapper>
                        </SignInButton>}
                    <IconWrapper>
                        <BsCartFill onClick={goCart} />
                    </IconWrapper>
            </MobileMenuCont>
         </SecHeadBarCont>
            }
    </div>)
}

const styledLink = {
    color: "#ffffff",
    fontWeight: "bold",
}


export default SecondaryHeaderBar; 

const IconWrapper = styled.div`
position: relative;
& > *{
    color: #ffffff;
    width: 25px;
    height: 25px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 0;
    margin-left: 10px;

}
`

const SignInButton = styled.div`
    cursor: pointer; 
    
`