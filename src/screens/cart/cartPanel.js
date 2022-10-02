import React, { useState, useEffect, useCallback } from 'react';
import SlidingPanel from 'react-sliding-side-panel';
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


const CartPanel = props => {
    const { openPanel } = props; 
    const { closeCartPanel, getCart, getRef, calculateTotalCost, calculateTotalItems } = React.useContext(MyContext);
    const [cart, setCart] = useState([])
    const [subtotal, setSubTotal] = useState(0); 
    const [totalItems, setTotalItems] = useState(0); 
    const navigate = useNavigate(); 
   const ref = getRef(); 

    useEffect(() => {
        var cartItems = getCart()
        setCart([...cartItems])
        setSubTotal(calculateTotalCost());
        setTotalItems(calculateTotalItems()); 

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
    const [cartPanelWidth, setCartPanelWidth] = useState(50); 
    const handleResize = () => {
        setScreenWidth(window.innerWidth); 
        setCartPanelWidth(screenWidth >= 1000 ? 50 : 100); 

        if (screenWidth >= 1000 && cartPanelWidth !== 50) {
            setCartPanelWidth(50)
        }
        else if (screenWidth < 1000 && cartPanelWidth === 50) {
            setCartPanelWidth(100)
        }
    }
    window.addEventListener("resize", handleResize)
    useEffect(() => {
        if (screenWidth >= 1000 && cartPanelWidth !== 50) {
            setCartPanelWidth(50)
        }
        else if (screenWidth < 1000 && cartPanelWidth === 50) {
            setCartPanelWidth(100)
        }
    }, [screenWidth])

    const goCheckout = useCallback(() => navigate('../checkout', {}), [navigate])
    const goCart = useCallback(() => navigate('../cart', {}), [navigate])
    useEffect(() => {

        return () => {
            setCart([]);
        }
    },[])
    return (
        <div >
        <SlidingPanel
                type={'right'}
                isOpen={openPanel}
                size={cartPanelWidth}
                panelContainerClassName="cartPanelContainer"
                noBackdrop={true}
        >
                <div className="panel-container" ref={ref}>
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
            </div>
            </SlidingPanel>
            </div>
        )
}
export default CartPanel; 