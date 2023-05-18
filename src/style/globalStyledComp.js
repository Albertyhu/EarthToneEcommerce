import styled from 'styled-components'; 

export const MainContainer = styled.div`
    width: 100%;
    height: fit-content;
    text-align: center;
    background-image: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #ffffff;
    font-family: 'Raleway-Light'; 
    position: relative;
    display: flex;
    flex-direction: column;
    padding-bottom: 610px; 
@media screen and (min-width: 867px){
        padding-bottom: 200px; 
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
    flex-grow: 1;
 
}
`
export const SecondInnerCont = styled.div`
    margin-top: 20px; 
    margin-bottom: 40px;
    opacity: ${props => props.opacityVal};
    &#PrivacyPolicyContainer{
    margin-left: 50px;
    margin-right: 50px;
    text-align: left;
    min-height: 60vh;
    }
    &#Checkout_SecondInnerCont{
        margin-bottom: 40px;
    }
    &#ProductProfile_SecondInnerCont{
       min-height: 60vh;
    }
    &#SiteMap_SecondInnerCont, &#AboutUs_SecondInnerCont{
    min-height: 60vh;
}
    @media screen and (min-width: 540px){
        margin-bottom: 117px;
        &#Checkout_SecondInnerCont{
            margin-bottom: 30px;
        }
    }
    @media screen and (max-width: 540px), and (max-height: 310px){
      height:auto;
     &#SiteMap_SecondInnerCont, &#AboutUs_SecondInnerCont{
      //  height: auto !important;
        }
        &#SecondInnerCont_careerpage{
            margin-top: 80px;
        }
    }
    @media screen and (max-height: 519px){
     &#SiteMap_SecondInnerCont, &#AboutUs_SecondInnerCont{
        height: auto !important;
        }
    }
}
`

export const OuterShell = styled.div`
    display: flex;
    &#addressCont{
        display:block; 
        margin-bottom: 40px;
    }
    &#AccountPageOuterShell{
        display: block;
        height: 100vh;
}
`

export const Shell = styled.div`
    //font-family: inherit;
    font-family: 'Raleway-Light'; 
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
   text-align: center; 
    margin 20px auto;
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
@media screen and (max-height: 538px){
 height:95px;

}
@media screen and (max-width: 540px){
    height: 95px;
}
`

export const NoItemScreen = styled.div`
height: 50vh; 
text-align: center; 
`

export const Divider = styled.hr`
    border: 0; 
    height: 1px;
    background: radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0) 56%);
    background-color: #f4f4f4;
    margin: 50px auto;

`