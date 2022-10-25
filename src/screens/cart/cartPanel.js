import React, { useState, useEffect, useCallback } from 'react';
//import SlidingPanel from 'react-sliding-side-panel';
import { MyContext } from '../../components/contextItem.js';
import './cart.css';
import RenderTeaItems from './renderTeaItems.js'; 
import uuid from 'react-uuid';
import { TeaData } from '../../components/teaData.js'; 
import { CartPanelButtonContainer } from './cartStyledComp.js'; 
import {
    TanButton,
    DarkGreenButton,
    GreenButton, 
    BrownButton,
} from '../../style/styledButton.js';
import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components'; 


const CartPanel = props => {
    const { openPanel } = props; 
    const {cart, closeCartPanel, getCart, getRef, calculateTotalCost, calculateTotalItems } = React.useContext(MyContext);
    //const [cart, setCart] = useState([])
    const [subtotal, setSubTotal] = useState(0); 
    const [totalItems, setTotalItems] = useState(0); 
    const navigate = useNavigate(); 
   const ref = getRef(); 

    useEffect(() => {
        if (cart !== null && cart.length > 0) {

            setSubTotal(calculateTotalCost());
            setTotalItems(calculateTotalItems()); 
        }
    }, [cart])

    useEffect(() => {
       // var cartItems = getCart()
        //setCart([...cartItems])

    /*code for allowing user to click outside the cart panel to close it*/
        const checkIfClickedOutside = e => {
            if (openPanel && ref.current && !ref.current.contains(e.target)) {
                closeCartPanel();
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [openPanel])
   
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const determinePanelWidth = () => {
        if (window.innerWidth > 1000) {
            return 100;
        }
        else if (window.innerWidth <= 900) {
            return 80;
        }
        else {
            return 100;
        }
    }
    
    const [cartPanelWidth, setCartPanelWidth] = useState(determinePanelWidth()); 
    const handleResize = () => {
        setCartPanelWidth(determinePanelWidth()); 
    }

    const goCheckout = useCallback(() => navigate('../checkout', {}), [navigate])
    const goCart = useCallback(() => navigate('../cart', {}), [navigate])

    window.addEventListener("resize", handleResize)

    useEffect(() => {
        return () => {
          //  setCart([]);
            window.removeEventListener("resize", handleResize)
        }
    },[])
    return (
        <div >
        <SlidingPanel
                type={'right'}
                isOpen={openPanel ? "0" : `${cartPanelWidth}vh`}
                Width={`${cartPanelWidth}vh`}
                panelContainerClassName="cartPanelContainer"
                noBackdrop={true}
                id="CartSlidingPanel"
                
        >
                <PanelContainer ref={ref}>
                    <h1>Shopping Cart</h1>
                    
                    {cart.length > 0 ?
                        (<div id="cartList">
                            <div><b>Number of items in cart:</b> {totalItems}</div>
                            <div><b>Current Total Cost:</b> ${subtotal.toFixed(2)}</div>
                            <CartPanelButtonContainer id= "CartPanelButtonContainer">
                                <TanButton id="CartPanCheckoutButt" onClick={() => {
                                    goCheckout();
                                    closeCartPanel();
                                }}>Checkout</TanButton>
                                <BrownButton id="CartPanEditButt" onClick={() => {
                                    goCart();
                                    closeCartPanel();
                                }}>Edit Cart</BrownButton>
                            </CartPanelButtonContainer>
                            {
                                cart.map(item => {
                                    const cartItem = TeaData.find(val => val.ID === item.ID)
                                    return (<RenderTeaItems
                                        id={item.ID}
                                        image={cartItem.image}
                                        name={cartItem.name}
                                        description={cartItem.description}
                                        price={cartItem.price}
                                        stock={item.stock}
                                        amount={cartItem.amount}
                                        weight={cartItem.weight}
                                        width={cartItem.width}
                                        length={cartItem.length}
                                        height={cartItem.height}
                                        key={uuid()}
                                 />)
                             })
                            }
                        </div>)
                            :
                        <p>Your shopping cart is currently empty.</p>
                    }
                    <DarkGreenButton id="cartPanelButton" onClick={closeCartPanel}>Close</DarkGreenButton>
                </PanelContainer>
            </SlidingPanel>
            </div>
        )
}
export default CartPanel; 

const SlidingPanel = styled.div`
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

const PanelContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`