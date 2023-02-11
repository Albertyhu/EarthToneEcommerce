import styled from 'styled-components'; 

export const MainCont = styled.div`
    width: 100%; 
    font-family: 'Raleway-Light';
    margin: 50px auto 0px auto;
`

export const Shell = styled.div`
    display: block;
    margin: 10px auto; 
    @media screen and (min-width: 600px){
        display: grid; 
        grid-template-columns: repeat(2, 1fr);
        width: 90%; 
   
    }
    @media screen and (min-width: 900px){
        display: grid; 
        grid-template-columns: repeat(4, 1fr);
        width: 900px; 
    }
    @media screen and (min-width: 1000px){
        width: 950px; 
    }
`

export const IconWrapper = styled.div`
    display: block; 
    margin: 50px auto; 
    text-align: center;
    width: 100%;
`

export const Icon = styled.img`
    width: 84px; 
    height: auto; 
`

export const Text = styled.div`
    font-weight: bold; 
    color: #000000; 
`

export const Subtext = styled.div`
    color: #959595; 
`
export const Header = styled.div`
    font-weight: bold;
    font-size: 24px; 
    text-align: center;
    margin: 15px auto;
@media screen and (min-width: 600px){
    font-size: 30px; 
}
`

export const Paragraph = styled.p`
    width: 95%;
    margin: 0 auto;
@media screen and (min-width: 460px){
    width: 434px;
}
@media screen and (min-width: 600px){
    width: 464px;
}
@media screen and (min-width: 678px){
    width: 600px; 
}
`