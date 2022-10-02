import React, { useState, useContext, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { MyContext } from '../../components/contextItem.js';
import styled from 'styled-components'
import { TeaData } from '../../components/teaData.js'; 
import uuid from 'react-uuid'; 

const RenderCartItem = props => {
    const {
        cartData, 
        orderDate, 
    } = props;
    const {  } = React.useContext(MyContext)

    const data = TeaData.find(val => val.ID === cartData.ID)
    const [canBeReturned, setReturn] = useState(false); 

    //new Date(year, month, day, hours, minutes, seconds, milliseconds)
    const subTotal = data.price * cartData.stock;
    const futureDate = parseInt(orderDate.getDate()) + data.returnExpDays;
    const [returnExpDate, setExpDate] = useState(new Date(
        orderDate.getUTCFullYear(),
        orderDate.getMonth(),
        futureDate, 
    ));  

    const currentDate = new Date(); 
    const navigate = useNavigate(); 
    const goReviewProduct = useCallback(() => navigate('../review_product', {
        replace: true,
        state: {
            productID: cartData.ID, 
        }
    }), [navigate])
    const goReturnProduct = useCallback(() => navigate('../return_product', {
        replace: true,
        state: {
            productID: cartData.ID,
        }
    }), [navigate])


    useEffect(() => {
        if (currentDate > returnExpDate) {
            setReturn(false)
        }
        else {
            setReturn(true)
        }
    }, [returnExpDate])
        var fullReturnExp = `${returnExpDate.getMonth() + 1}/${returnExpDate.getDate()}/${returnExpDate.getUTCFullYear()}`
        return (
            <CartItemContainer id = "cartItemCont">
                <Link to="../product_profile"
                    state={{
                        id: data.ID,
                    }}
                    style={linkStyle}
                >
                <CartImageContainer>
                        <CartItemImage src={data.image} />
                </CartImageContainer></Link>
                    <CartItemText>
                        <h2>Item: {data.name}</h2>
                        <p><b>Amount per bag: </b> {data.amount} oz.</p>
                        <p><b>Dimensions: </b> {data.width} x {data.length} x {data.height} in.</p>
                        <p><b>Number of bags to be purchased: </b> {cartData.stock}</p>
                        <p><b>Price: </b> ${data.price}</p>
                    <p><b>Return date window will close on: </b> {fullReturnExp}</p> 
                </CartItemText>
                <CTAPanel>
                    <Block><Text>Do you want to share your experience with the product?</Text>
                        <ButtonStyled id="OrderReviewButton" onClick={goReviewProduct}>Write a product review</ButtonStyled> </Block>
                        <Block> <Text>Would you like more of this product?</Text>
                        <Link to="../product_profile"
                            state={{
                                id: data.ID,
                            }}
                            style={linkStyle}
                        ><ButtonStyled id="BuyAgainButton">Buy Again</ButtonStyled></Link>
                    </Block>
                    {canBeReturned ? 
                                <Block>   
                    <Text>Is there something wrong with the product?</Text>
                            <ButtonStyled id="WhiteButton" onClick={goReturnProduct}>Return Item</ButtonStyled>
                        </Block>
                        :
                        null
                            }
                </CTAPanel>
            </CartItemContainer>
       
        )
}

export default RenderCartItem;

const linkStyle = {
    textDecoration: 'none',
    color: "#000000",
    cursor: "pointer",
}

const CartItemContainer = styled.div`
    margin-top: 10px;
    margin-bottom: 50px;
    height: auto;
    width: 100%;
@media screen and (max-width: 540px) {
   height: 415px;
    display: contents;
}
`

const CartImageContainer = styled.div`
    margin-right: 50px;
    display: inline-block;
@media screen and (max-width: 540px){
    margin-right: auto; 
    margin-left: auto;
}
`


const CartItemImage = styled.img`
    width: auto;
    height: 100 %;
    max-height: 150px;
    margin-left: 10px;
    margin-right: 10px;
`

const CartItemText = styled.div`
    margin: 10px;
    text-align: left;
    display: inline-block;
`

const CTAPanel = styled.div`
    display: inline-block;
    
`

const Text = styled.div`

`

const ButtonStyled = styled.div`
    font-size: 15px; 
    border-radius: 15px;
    text-transform: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 5px;
    min-width: 200px;
    white-space: nowrap;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    user-select: none;
    width: 60%;

&#OrderReviewButton{
    background-color: #D19C4C;
}

&#OrderReviewButton:active{
    background-color: #D19C4C;
    transform: translate(4px, 4px)
}
&#OrderReviewButton:hover{
    background-color: #bc8d45;
}

&#BuyAgainButton{
    background-color: #10C135;
}
&#BuyAgainButton:hover{
    background-color: #0FA22E;
}

&#BuyAgainButton:active{
    background-color: #10C135;
    transform: translate(4px, 4px)

}

&#WhiteButton{
    background-color: #ffffff;
}
&#WhiteButton:hover{
    background-color: #cbcbcb;
}

&#WhiteButton:active{
    background-color: #ffffff;
    transform: translate(4px, 4px); 
}
` 

const Block = styled.div`
margin-top: 10px; 
margin-bottom: 40px;
`