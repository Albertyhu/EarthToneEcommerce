import styled from 'styled-components'

export const HeaderTagLine = styled.div`
    color: #ffffff; 
    margin-top: auto;
    margin-bottom: auto;
    align-self: center; 
`

export const SecHeadBarCont = styled.div`
    background-color: #000000; 
    width: 100%; 
    height: 40px;
    justify-content: center; 
    vertical-align: middle; 
    display: flex;
    text-align: center;

   @media screen and (max-width: 770px) {
    justify-content: space-between;
}
  @media screen and (max-width: 280px) {
    
}
`
export const NonMemberTag = styled.div`
    color: #ffffff; 
    margin-top: auto;
    margin-bottom: auto;
    text-decoration: none;
    position: absolute;
    right: 20px;
    top: 10px;
   @media screen and (max-width: 540px) {
    position: relative;
    text-align: center;
    right: auto;
    top: auto;
}

  @media screen and (max-width: 280px) {
    margin-top: 10px;
}
`
export const MemberTag = styled.div`
    color: #ffffff; 
    margin-top: auto;
    margin-bottom: auto;
    text-decoration: none;
    position: absolute;
    right: 20px;
    top: 10px;
    display: flex;
    cursor: pointer; 
   @media screen and (max-width: 540px) {
    position: relative;
    text-align: center;
    right: auto;
    top: auto;
}

  @media screen and (max-width: 280px) {
    margin-top: 10px;
}
`

export const WelcomeTag = styled.div`
    color: #ffffff; 
    margin-top: auto;
    margin-bottom: auto;
    text-decoration: none;
    position: absolute;
    left: 20px;
    top: 10px;
    display: flex;
   @media screen and (max-width: 540px) {
    position: relative;
    text-align: center;
    right: auto;
    top: auto;
}

  @media screen and (max-width: 280px) {
    margin-top: 10px;
}
`

export const MobileMenuCont = styled.div`
   display: flex;
   cursor: pointer;
& > div#SignIn{
    display: flex
}
`

export const EarthToneIMG = styled.img`
    width: 100px;
    height: 100%;
    cursor: pointer;
    display: none;
@media screen and (min-width: 311px){
    display: block;
}
`

export const MobileSignInText = styled.div`
    color: #ffffff;
    align-self: flex-end; 
`

export const TextLogo = styled.div`
    font-family: 'Raleway-Light';
    color: #ffffff;
`

/*hamburger panel */

export const LogoContainer = styled.div`
background-color: #000000; 

`

export const LinkCont = styled.div`
background-color: #D19C4C;
background-image: url('../images/diagonal-lines.svg')
height: 100%;
`