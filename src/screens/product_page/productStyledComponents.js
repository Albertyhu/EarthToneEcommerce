import styled from 'styled-components'; 

const MainContainer = styled.div`
width: 100%;
height: 100%;
text-align: center;
background-image: none;
background-repeat: no-repeat;
background-size: cover;
background-color: #ffffff;
font-family: serif;

`

const ContentContainer = styled.div`
opacity: ${props => props.opacity};

@media screen and (max-width: 540px) {
       margin-bottom: 31px;
    
}
`

export {
    MainContainer,
    ContentContainer, 
} 