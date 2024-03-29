import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
    background-image: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #ffffff;
    font-family: 'Raleway-Light';
`

export const InnerContainer = styled.div`
    top: 0px;
    width: 100%;
    background-color: rgba(255,255,255, 1);
    height: ${props => props.heightType || "inherit"};
    margin-bottom: 20px;
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

@media screen and (max-width: 969px){
    &#rightPanel{
        min-width: 198px;
    }
}
@media screen and (max-width: 640px){
    width: 95%; 
    margin-left: auto;
    margin-right: auto;
    &#rightPanel{
        margin-top: 10px;
        width:95%;
    }
}
`

export const OuterShell = styled.div`
    display: flex;

@media screen and (max-width: 640px){
    display: grid;
    margin-bottom: 20px;
 
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
    width: 200px;
}
& > tbody tr td{
   min-width: 120px;
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
export const CartPanelButtonContainer = styled.div`
    display: flex; 
    width: 40%; 
    margin-left: auto;
    margin-right: auto; 
    margin-top: 20px;
`

export const SlidingPanel = styled.div`
    width: ${props => props.Width};
    height: 100vh;
    top: 0px;
    right: 0px;
    position: fixed;
    overflow: auto;
    z-index: 11;
    transform: translateX(${props => props.isOpen}); 
    transition: transform 1s; 
@media screen and (max-width: 720px){}
@media screen and (max-width: 360px){}
`

export const PanelContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`

export const Container = styled.div`
    margin-left: auto;
    margin-right: auto; 
    margin-bottom: 20px;
`

export const Detail = styled.div`
text-align: left;
line-height: 20px;
justify-content: space-between;
display: flex;
&#shippingFeeInfo > span{
    border-bottom: 1px solid rgba(0,0,0, 0.4);

`