import React, { useState, useCallback, useContext } from 'react'
import RenderList from '../checkout/renderList.js';  
import { ProductCollection } from '../../data/ProductCollection.js'; 
import { useNavigate } from 'react-router-dom'; 
import PageTemplate from '../../PageTemplate.js'; 
import { MyContext } from '../../context/contextItem.js'; 
import { SecondInnerCont, Title, NoItemScreen } from '../../style/globalStyledComp.js'; 
import { RenderSubtotal } from './renderTotal.js'; 
import uuid from 'react-uuid'; 
import {
    CheckOutContainer,
    Shell, 
    OuterShell, 
} from './cartStyledComp.js'; 
import {  CartPageButtons } from '../../style/styledButton.js';

const RenderCartPage = props => {
    const {
        cart, 
        openHamburger,
        openPanel,
        accountPanel,
        addProductMessage,
    } = props;

    return (<PageTemplate MainContent={MainContent}
        openHamburger={openHamburger}
        openPanel={openPanel}
        accountPanel={accountPanel}
        addProductMessage={addProductMessage}
        cart={cart}
        onDynamicPage={true}
        numberOfDyamicItems={cart.length}
    />)
}

const MainContent = props => {
    const { 
        cart
    } = props;

    const { } = useContext(MyContext)

    const loadData = () => {
        var arr = []; 
        cart.forEach(val => {
            var obj = ProductCollection.find(tea => tea.ID === val.ID)
            arr.push({
                ID: obj.ID, 
                name: obj.name,
                description: obj.description,
                price: obj.price,
                amount: obj.amount,
                image: obj.image,
                imageArray: obj.imageArray, 
                width: obj.width,
                length: obj.length,
                height: obj.height,
                shippingDays: obj.shippingDays, 
                stock: val.stock, 
            })
        })

        return arr; 
    }
    const navigate = useNavigate(); 
    const goCheckout = useCallback(() => navigate('../checkout', {}), [navigate])
    const goProductPage = useCallback(() => navigate('../product_page',
        {}), [navigate]) 
    const [cartList, setCartList] = useState(loadData())

    const removeItem = prodID => {
        var arr = cartList.filter(val => val.ID !== prodID)
        setCartList(arr)
    }

    const returnTotal = () => {
        var newTotal = 0;
        cartList.forEach(val => {
            newTotal += val.stock; 
        })
        return newTotal;
    }

    const returnSubtotal = () => {
        var newSubtotal = 0; 
        cartList.forEach(val => {
            newSubtotal += val.price * val.stock; 
        })
        return newSubtotal; 
    }
    const [totalItems, setTotalItems] = useState(returnTotal);
    const [subtotal, setSubtotal] = useState(returnSubtotal)

    const updateSubtotal = (ProdID, newQuan, prodPrice) => {
        var arr = cartList.filter(val => val.ID !== ProdID)
        var newSubtotal = 0; 
        var newTotalItems = 0
        arr.forEach(val => {
            newTotalItems += val.stock; 
            newSubtotal += val.stock * val.price;
        })
        newTotalItems += newQuan; 
        newSubtotal += newQuan * prodPrice;
        setTotalItems(newTotalItems)
        setSubtotal(newSubtotal)
    }
   

    const updateCartList = (productID, newStock) => {
        var arr = null; 
        if (newStock !== 0) {
            arr = cartList;
            arr.forEach(val => {
                if(val.ID === productID)
                val.stock = newStock; 
            })
        }
        else {
            arr = cartList.filter(val => val.ID !== productID)
        }
        setCartList(arr); 
    }
    
    return (
            <SecondInnerCont>
                <h1>Shopping Cart</h1>
                {cartList !== null && cartList.length !== 0 ?
                <OuterShell id="SC_outerShell">
                        <Shell id = "SC_shell">
                        <CheckOutContainer> 
                            {cartList.map(val => <RenderList {...val}
                                key={uuid()}
                                removeItem={removeItem}
                                updateCartList={updateCartList}
                                updateSubtotal={updateSubtotal}
                            />)}
                        </CheckOutContainer> 
                        </Shell>
                        <Shell id="rightPanel">
                            <CheckOutContainer>
                            <RenderSubtotal totalItems={totalItems} subtotal={subtotal} /> 
                            <CartPageButtons id="ContinueToCheckoutButton" onClick={goCheckout}>Continue to Checkout</CartPageButtons>
                            <CartPageButtons id="ContinueButton" onClick={goProductPage}>Continue Shopping</CartPageButtons>
                            </CheckOutContainer>
                        </Shell>
                    </OuterShell>
                :
                <NoItemScreen>
                    <Title>Your shopping cart is currently empty</Title>
                </NoItemScreen>
                }
            </SecondInnerCont>
        )
}

export default RenderCartPage; 


