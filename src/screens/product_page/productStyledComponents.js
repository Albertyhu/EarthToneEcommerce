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
padding-bottom: 600px;
@media screen and (min-width: 867px){
padding-bottom: 200px;
}
@media screen and (min-width: 1022px){
padding-bottom: 150px;
}

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