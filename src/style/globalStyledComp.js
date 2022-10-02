import styled from 'styled-components'; 

export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    height:  ${props => props.heightChange};
    text-align: center;
    background-image: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #ffffff;
    font-family: serif;
    //margin-top: 210px; 
@media screen and (max-width: 540px){
    // margin-top: 110px; 
}
`

export const InnerContainer = styled.div`
    top: 0px;
    width: 100%;
    background-color: rgba(255,255,255, 1);
    height: ${props => props.heightType};
& > div#wishlistDiv {
    margin-top: 20px; 
    margin-bottom: 20px;
 
}
`
export const SecondInnerCont = styled.div`
    margin-top: 20px; 
    margin-bottom: 20px;
    opacity: ${props => props.opacityVal};
&#PrivacyPolicyContainer{
margin-left: 50px;
margin-right: 50px;
text-align: left;
@media screen and (max-width: 540px){
height:auto;
}
}
`

export const OuterShell = styled.div`
    display: flex;
    &#addressCont{
        display:block; 
        margin-bottom: 40px;
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
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: left;
    cursor: pointer; 
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
 & > tr th {
    min-width: 200px;
}
& > tbody tr td{
   min-width: 120px;
}

&#addressTable{
    font-size: 25px;
    width: 50%;
    border: 1px solid rgba(0,0,0, 0.3); 
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: inline-table;
    margin-left: auto;
    margin-right: auto;
@media screen and (max-width: 540px){
    width: 90%;
    line-height: 25px;
}

}

&#addressTable tr {
border: 1px solid rgba(0,0,0, 0.3); 

text-align: center;
@media screen and (max-width: 540px){
height: 60px;
}
}

&#addressTable tr th{
    text-align: left;
@media screen and (max-width: 540px){
    line-height: 25px;
    text-align: center;
}
}

&#addressTable tr td{
   padding-left: 25px;
    text-align: left;
}
`

export const TH = styled.th`
line-height: 8px; 
text-align: right;
`

export const Image = styled.img`
    width: 200px;
    height: 200px; 
  //  margin-left: auto;
    margin-right: 10px;
    display: inline-block; 

`
export const Title = styled.h2`

`
export const SalesPrice = styled.div`
    color: #D19C4C;
    font-size: 30px; 
    display: inline-block;
    margin-left: 10px;
`

export const SecondaryLinks = styled.span`
    color: #a1a1a1; 
    cursor: pointer; 
    &:hover{
    text-decoration: underline; 
}
    &:active{
        color: #6d6d6d; 
        text-decoration: none; 
}
`
export const TDseparator = styled.td`
    border-left: 1px solid #a1a1a1; 
    width: 100px;
    padding: auto;
    text-align: center;
`
export const ContinueButton = styled.div``

export const Filler = styled.div`
    height: 190px;
@media screen and (max-width: 540px){
    height: 95px;
}
`