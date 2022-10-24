import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
    background-image: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #ffffff;
    font-family: serif;
    margin-top: 210px; 
`

export const InnerContainer = styled.div`
    top: 0px;
    width: 100%;
    height: inherit;
    background-color: rgba(255,255,255, 1);
@media screen and (max-width: 770px){
    height: auto;
}

`

export const Shell = styled.div`
    font-family: inherit;
    border: 1px solid rgba(0,0,0, 0.3); 
    border-radius: 10px; 
    margin-left: 10px;
    margin-right: 10px;
    width: 80%;
    &#rightPanel{
        width: 20%;
    }
@media screen and (max-widtH: 770px){
       margin: auto;
       width: 95%;
    &#rightPanel{   
        width: 95%;
       margin: 20px auto;
    }
    
}
@media screen and (max-widtH: 540px){
    width: 95%;
    &#rightPanel{
        width: 95%;
        margin-top: 20px;
    }

}


`

export const OuterShell = styled.div`
    display: flex;
    height: ${props => props.Height || "auto"}; 
    text-align: ${props => props.TextAlign || "left"};
@media screen and (max-widtH: 770px){
    display: block;
}
`

export const CheckOutContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 90%; 
`

export const ListItem = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    margin-bottom: 60px;
    text-align: center;

`
export const ListDetails = styled.div`
    margin-left: auto;
    margin-right: auto;
    text-align: left; 
`

export const DetailTable = styled.table`
    text-align: left; 
    display: inline-block; 
    vertical-align: top;
 & > tr {
    margin-bottom: 20px;
    max-height: 10px;
}
 & > tbody tr th {
    min-width: 200px;
    text-align: center;
}
& > tbody tr td{
   min-width: 120px;
}

&#WishDetailTable{
    margin-left: 50px;
}
@media screen and (max-widtH: 540px){
&#WishDetailTable{
    margin-left: 0px;
}

 & > tbody tr th {
    min-width: fit-content;
}

& > tbody tr td{
    text-align: center;
}

}
`

export const TH = styled.th`
line-height: 8px; 
text-align: right;
`

export const Image = styled.img`
    width: 200px;
    height: 200px; 
    margin: 0 0 0 auto;
    display: inline-block; 
    cursor: pointer;
    text-align: right;
@media screen and (max-widtH: 408px){
    margin: auto;
    display: block;
    text-align: center;     
    
}
`
export const Title = styled.h2`
    text-align: center; 
    margin 20px auto;
`
export const SalesPrice = styled.div`
    color: #D19C4C;
    font-size: 30px; 
    display: inline-block;
    margin-left: 10px;
`

export const SecondaryLinks = styled.div`
    color: #a1a1a1; 
    cursor: pointer; 
    margin: auto 0px;
    &:hover{
    text-decoration: underline; 
}
    &:active{
        color: #6d6d6d; 
        text-decoration: none; 
}

@media screen and (max-width: 770px){
    margin: auto;
}
`

export const TDseparator = styled.td`
    border-left: 1px solid #a1a1a1; 
    width: 100px;
    padding: auto;
    text-align: center;
`
export const ButtonContainer = styled.div`

`
export const BrownButton = styled.div`
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    padding: 5px;
    background-color: #9D5F38;
    width: 50%;
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
    margin-right: 0;
    border-radius: 10px;
    padding: 5px;
    background-color: #D19C4C;
    width: 50%;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    user-select: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

&:hover{
    background-color: #BC8E47;
}

&:active{
    background-color: #D19C4C;
    transform: translate(4px, 4px)
}
@media screen and (max-width: 770px){
    margin: auto;
}
@media screen and (max-widtH: 540px){

}
`
export const InfoTable = styled.div`
    text-align: left; 
    display: grid; 
    grid-template-columns: 40% 60%; 
    vertical-align: top;
    margin-bottom: 40px;
@media screen and (max-widtH: 408px){
    display: block;

}
`

export const Row = styled.div`
    display: grid; 
    grid-template-columns: 50% 50%; 
    gap: 10px;
    margin: 10px auto;
@media screen and (max-width: 770px){
    display: block; 
    margin: 20px auto;
}
`

export const RowLabel = styled.div`
    font-weight: bold; 
    text-align: right;
@media screen and (max-width: 770px){
    text-align: center;
}
`

export const RowData = styled.div`
    text-align: left;
    & > *{display: inline-block;   }

    & > span{
    margin: auto;
}
     &#TDseparator{
        border-left: 1px solid #a1a1a1; 
        width: 100px;
        text-align: center;
    }
    @media screen and (max-width: 1140px){
        & > span{
        margin:0;
    }
@media screen and (max-width: 770px){
    text-align: center;
     &#TDseparator{
        margin: auto;
        text-align: center;
        border: none;
    }
}
}
`

export const TextTable = styled.div`

`