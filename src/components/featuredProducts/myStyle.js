import styled from 'styled-components'; 

export const MainCont = styled.div`
    width: 100%; 
    display: block;
    margin: 20px auto 60px auto;
`
export const Title = styled.div`
    font-weight: bold;
    text-align: center; 
    font-size: 25px; 
`
export const Shell = styled.div`
    display: block;
@media screen and (min-width: 600px){
    width: 530px;
    margin: 0px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 15px;
}
@media screen and (min-width: 1060px){
    width: 1048px;
    margin: 0px auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 0px;
}
`

export const Panel = styled.div`
    width: 250px;
    height: 100%; 
    display: block;
    border: 1px solid rgba(0,0,0, 0.3);
    border-radius: 5px;
    margin: 10px auto;
    text-align: center;
    cursor: pointer; 
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`

export const ProductImage = styled.img`
    margin: 20px auto;
    width: 200px; 
    height: 200px; 
    align-items: center; 
    text-align: center; 
`
export const ProductTitle = styled.div`
    color: #000000; 
    font-weight: bold;
`

export const ViewLink = styled.div`
    color: #a3a3a3; 
    text-decoration: underline; 
    margin-bottom: 10px;
`