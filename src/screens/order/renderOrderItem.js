import React, {useEffect, useContext} from 'react'
import styled from 'styled-components'; 
import RenderCartItem from './renderCartItem.js'; 
import uuid from 'react-uuid'; 

const RenderOrderItem = props => {

    const {orderID, cart, amountPaid, orderDate} = props; 
    const date = orderDate.getUTCDate();
    const month = orderDate.getUTCMonth() + 1; 
    const year = orderDate.getUTCFullYear(); 
    const fullDate = `${date}/${month}/${year}`; 

    return (
        <ItemCont id = "OrderItemContainer">
            <ContainerHeader>
                <Detail><Category>Order ID: </Category>#{orderID}</Detail>
                <Detail><Category>Order Date: </Category>{fullDate}</Detail>
                <Detail><Category>Amount Paid after taxes: </Category> ${amountPaid.toFixed(2)}</Detail>
            </ContainerHeader>
            {cart.map(val => <RenderCartItem cartData={val} key={uuid()} orderDate={orderDate} />)}
        </ItemCont>
        )
}
export default RenderOrderItem; 

const ItemCont = styled.div`
border-radius: 25px;
width: 90%;
padding-bottom: 30px;
margin-bottom: 10px;
margin-top: 10px;
margin-left: auto;
margin-right: auto;
border: 1px solid rgba(0,0,0, 0.5);
`
const Detail = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
`
const Category = styled.div`
    font-weight: bold; 
`

const ContainerHeader = styled.div`
    background-color: #10C135; 
    width: 100%; 
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding-top: 10px;
    padding-bottom: 10px;
`