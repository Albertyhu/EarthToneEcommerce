import styled from 'styled-components'; 

export const MainSection = styled.div`
    display: flex;
    width: 100%; 
    height: 100%;
@media screen and (max-width: 540px){
    display: contents;
}
`


export const ImageMainContainer = styled.div`

    width: fit-content; 
    margin-right: 10px;

@media screen and (max-width: 960px){
    margin-right: auto;
    margin-left: auto;
    text-align: center;
}

`
export const InnerShell = styled.div`
    display: flex; 
    width: 100%
`
export const ImageInnerShell = styled.div`
    display: flex; 
    width: 100%;
    & > *{
        display: inline-block;
    }
@media screen and (width: 960px){
    margin-right: auto;
    margin-left: auto;
}
 @media screen and (max-width: 340px){
    display: grid;
}
`

export const MainImage = styled.img`
    width: 400px; 
    height: 400px;
    overflow: hidden;
@media screen and (max-width: 1380px){
    width: 400px; 
    height: 400px;
}

@media screen and (max-width: 960px){
    margin-right: auto;
    margin-left: auto;
    width: 400px; 
    height: 400px;
    
}
@media screen and (max-width: 500px){
   width: 200px; 
    height: 200px;
}
`

export const ImageList = styled.ul`
    list-style: none;
    @media screen and (max-width: 340px){
        margin: auto; 
        display: flex;
    }
`

export const ImageListItem = styled.li`
    margin: 10px; 
    cursor: pointer; 
@media screen and (max-width: 540px){
    margin: 0;
}
`

export const ChildImage = styled.img`
    height: 50px;
    width: 50px;
`

//Text Panel 

export const TextPanel = styled.div`
    width: 600px;
@media screen and (max-width: 960px){
    width: 100%;
}
@media screen and (max-width: 599px){
    width: 92%;
    margin-left: auto; 
    margin-right: auto; 
}
`

export const ProductTitle = styled.h1`
    margin-left: auto; 
    margin-right: auto; 
`

export const DetailTable = styled.table`
text-align: left; 
 & > tr {
    margin-bottom: 20px;
    height: 40px;
}
 & > tr th {
    width: 200px;
}
`

export const InfoTable = styled.div`
    width: 100%; 
    
`

export const Row = styled.div`
    display: grid; 
    grid-template-columns: 25% 75%; 
    margin-bottom: 20px;
@media screen and (max-width: 1140px){
    display: block; 
}
`

export const RowLabel = styled.div`
    font-weight: bold; 
text-align: left;
`

export const RowData = styled.div`
text-align: left;
    & > *{display: inline-block;   }
    & > span{
    margin: auto 10px;
}
    @media screen and (max-width: 1140px){
  
        & > span{
        margin:0;
    }
}
`

export const TH = styled.th`
line-height: 8px; 
@media screen and(max-width: 1020px){

}
`

export const TextBlock = styled.div`
text-align: left;
display: flex; 
`
export const PriceBlock = styled.div`
text-align: left;
display: flex; 
margin-bottom: 30px;
border-bottom: 1px solid rgba(0,0,0, 0.3)
`

export const SalesPrice = styled.div`
    color: #D19C4C;
    font-size: 30px; 
    display: inline-block;
    margin-left: 10px;
`

export const ItemDimTitle = styled.span`
    font-weight: bold; 
display: block;
`

//CTA panel 

export const CTAPanelContainer = styled.div`
border: 1px solid rgba(0,0,0, 0.3); 
border-radius: 5px; 
width: 20%;
margin-right: 20px;
margin-left: 20px;
@media screen and (max-width: 1225px){
    min-width: 226px;
}

@media screen and (max-width: 540px){
width: 95%; 
margin-top: 20px;
margin-right: auto;
margin-left: auto;
}
`
export const InnerContainer = styled.div`
margin-left: auto;
margin-right: auto;
margin-bottom: 10px;
text-align: left; 
`

export const StockSelection = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    align-self: center;
    text-align: center;
    margin-top:5px;
    margin-bottom: 5px;


`

export const StockSelectionElement = styled.select`
margin-left: auto;
margin-right: auto;
display: block;
border-radius: 10px; 
border: none;
outline: none;
background-color: #cbcbcb;
padding: 5px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`



export const CustomStockInput = styled.input`
width: 30px; 
display: inline-block;
`

export const CustomStock = styled.div`
display: inline-block; 
width: 100%;
height: 40px;
max-height: 40px;
margin-left: auto;
margin-right: auto;
text-align: center;
margin-top: 10px;
`

export const DarkGreenButton = styled.div`
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    padding: 5px;   
    max-width: 60px;
    background-color: #25963E;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
    user-select: none;
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
&:active{
    background-color: #b8b8b8;
    transform: translate(4px, 4px)
}
`

export const GreenButton = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 5px;
    background-color: #10C135;
    max-width: 60px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
    user-select: none;
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

&:active{
    background-color: #b8b8b8;
    transform: translate(4px, 4px)
}
`

//CTA Buttons 
export const ButtonContainer = styled.div`
margin-left: auto; 
margin-right: auto;
margin-bottom: 20px; 
`
export const BrownButton = styled.div`
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    padding: 5px;
    background-color: #9D5F38;
    width: 115px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    user-select: none;
    margin-top: 10px;
    margin-bottom: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

&:hover{
    background-color: #B26D41;
}

&:active{
    background-color: #9D5F38;
    transform: translate(4px, 4px)
}
`

export const TanButton = styled.div`
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    padding: 5px;
    background-color: #D19C4C;
    width: 115px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    user-select: none;
    margin-top: 10px;
    margin-bottom: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

&:hover{
    background-color: #BC8E47;
}

&:active{
    background-color: #D19C4C;
    transform: translate(4px, 4px)
}
`

export const WishButton = styled.div`
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    padding: 5px;
    background-color: #10C135;
    width: 115px;
    text-align: center;
    color: #000000;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    user-select: none;
    margin-top: 10px;
    margin-bottom: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

&:hover{
    background-color: #0F9B2C;
}

&:active{
    background-color: #10C135;
    transform: translate(4px, 4px)
}
`

export const SecureTransBlock = styled.div`
    margin-left: auto;
    margin-right: auto; 
    margin-bottom: 20px; 
    width: 90%; 
    color: #25963E; 
    display: flex;
    & > span {
     margin-top: auto;
     margin-bottom: auto;
    }
`

export const ThirdInnerContainer = styled.div`
`

export const UpperSection = styled.div`
    width: 100%; 
    height: 100%;
    display: contents;
    @media screen and (min-width: 540px){
        display: flex;
    }
`
export const ReviewSection = styled.div`
    margin: 40px auto;
`

export const ReviewHeader = styled.h2`
    font-weight: bold; 
    color: black; 
    text-center; 
    font-size: 15px;
    margin: 0 20px 10px 20px;
`

export const NoteBookSectionTwo = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
    width: 90%;
    margin: 10px auto;
    gap: 5px;
    @media screen and (max-width: 810px){
    grid-template-columns: 60% 40%;
}
    @media screen and (max-width: 650px){
    grid-template-columns: 50% 50%;
}
    @media screen and (max-width: 480px){
        display: block;
}
`