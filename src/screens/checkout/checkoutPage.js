import React, { useEffect, useState, useCallback } from 'react'; 
import { ProductCollection } from '../../data/ProductCollection.js'; 
import { RenderSubtotal } from '../../components/renderTotal.js';
import {
    Title,
    CheckOutContainer,
    Shell, 
    OuterShell,
    LoadingContainer
} from './checkoutStyle.js'; 
import { TanButton } from '../../style/styledButton.js';
import { MyContext, PageTemplateContext } from '../../context/contextItem.js'; 
import { useNavigate, Link } from 'react-router-dom'; 
import RenderList from './renderList.js'; 
import uuid from 'react-uuid'; 
import { SecondInnerCont, NoItemScreen  } from '../../style/globalStyledComp.js'
import PageTemplate from '../../PageTemplate.js'; 
//requires props for data, submitEvent, title
import { RenderAddress } from '../account/accountPage.js';
import RenderShippingForm from '../shipping/shippingForm.js';
import styled from 'styled-components'
import { CardElement, useStripe, useElements, } from '@stripe/react-stripe-js';
import './stripe.css';
import axios from 'axios'; 
import { Bounce } from "react-activity";
import "react-activity/dist/library.css";
import {
    PaymentHook,
    ValidateAddress,
    CreateOrderObj,
} from './checkoutHook.js'; 
import { genKey } from '../../hooks/randGen.js'; 
import { getAuth } from 'firebase/auth'; 

//displays shipping information
//displays order summary
//displays Stripe
//displays list of items in cart and allows ability to change quantity
const auth = getAuth(); 
const RenderCheckout = props => {
    const {cart, openHamburger, openPanel, accountPanel, addProductMessage, message} = props;
    const [innerContHeight, setInnerContHeight] = useState("inherit")
    useEffect(() => {
        if (cart.length > 1) {
            setInnerContHeight("auto")
        }
        else {
            setInnerContHeight("inherit")
        }
    }, [cart])

    return (<PageTemplate MainContent={MainContent}
        openHamburger={openHamburger}
        openPanel={openPanel}
        accountPanel={accountPanel}
        addProductMessage={addProductMessage}
        message={message}
        heightType={innerContHeight}
        cart={cart}
        onDynamicPage={false}
        numberOfDyamicItems={cart.length}
    />)

}

const MainContent = props => {
    const stripe = useStripe();
    const elements = useElements();
    const { cart, changeHeight } = props; 
    const {
        getShippingAdd,
        setShippingAdd,
        getBillingAdd,
        setBillingAdd,
        setNewOrder,
        clearCart, 
        setMessage, 
        apiURL, 
        setLoading, 
        calculateTotalCost, 
        data, 
    } = React.useContext(MyContext); 
    const [checkoutList, setCheckout] = useState(null)
    const [editShipping, setEditShipping] = useState(false)
    const [editBilling, setEditBilling] = useState(false)
    const { makePageAuto } = React.useContext(PageTemplateContext)
    const [processingIndicator, setProcessingInd] = useState(false); 
    const [finalCost, ck_setFinalCost] = useState(0);
    //for disabling the submit button 
    const [disabled, setDisabled] = useState(false) 


    const loadData = () => {
        if (cart) {
            var newArr = []
            cart.forEach(item => {
                var obj = ProductCollection.find(val => val.ID === item.ID)
                var checkoutItem = {
                    ID: obj.ID,
                    name: obj.name, 
                    description: obj.description,
                    price: obj.price,
                    amount: obj.amount,
                    image: obj.image,
                    imageArray: obj.imageArray, 
                    weight: obj.weight, 
                    width: obj.width,
                    length: obj.length,
                    height: obj.height,
                    shippingDays: obj.shippingDays, 
                    stock: item.stock, 
                }
                newArr.push(checkoutItem)
            })
            setCheckout(newArr)
        }
    }

    const navigate = useNavigate();

    useEffect(() => {
        loadData();
        return () => {setCheckout(null)}
    }, [])

    useEffect(() => {
        if (cart !== null && cart.length !== 0)
            makePageAuto()
    }, [cart])

    const OpenEditShippingDiv = () => {
        setEditShipping(true)
    }

    const UpdateShipping = newAdd => {
        setShippingAdd(newAdd)
        setEditShipping(false)
    }

    const OpenEditBillingDiv = () => {
        setEditBilling(true)
    }

    const UpdateBilling = newAdd => {
        setBillingAdd(newAdd)
        setEditBilling(false)
    }

    const goOrderCompletePage = useCallback(() => navigate('../order_summary', {replace: true}), [navigate])

    var newOrder = {
        orderID: genKey(10),
        cart,
        amountPaid: finalCost,
        orderDate: new Date(),
    }

    const { handleSubmit } = PaymentHook(apiURL, setMessage, setLoading, setNewOrder, goOrderCompletePage, clearCart); 

    const confirmOrder = async () => {
        var shippingValid = ValidateAddress(getShippingAdd(), "shipping");
        var billingValid = ValidateAddress(getBillingAdd(), "billing"); 
        var isValid = true; 
        if (!shippingValid.isValid) {
            setMessage([{ msg: shippingValid.errMesage }]); 
            isValid = false; 
        }
        if (!billingValid.isValid) {
            setMessage([{ msg: billingValid.errMesage }]); 
            isValid = false; 
        }
        const user = auth.currentUser; 

        console.log("user: ", user)
        if (!user || user === null) {

            setMessage([{msg: "You need to have an account with us to make an order."}])
            isValid = false; 
        }

        if (isValid) {
            var customerName = data.last_name ? `${data.last_name}, ${data.first_name ? data.first_name : ""}` : user.displayName ? user.displayName : "";  
            var customer = {
                id: user.uid,
                email: user.email, 
                name: customerName, 
            } 
            var orderObj = CreateOrderObj(cart, calculateTotalCost())
            handleSubmit(orderObj, customer, setDisabled)
        }
    }

    return (
        <SecondInnerCont id ="Checkout_SecondInnerCont" opacityVal={processingIndicator ? 0.3 : 1.0 }>
            <h1>Checkout</h1>
            {checkoutList !== null && checkoutList.length !== 0 ?
                <OuterShell id = "checkout_outershell">
                    <Shell>
                        {!editShipping ?
                            <RenderAddress
                                data={getShippingAdd()}
                                submitEvent={OpenEditShippingDiv}
                                title="Shipping Address" />
                            :
                            <RenderShippingForm initialData={getShippingAdd()}
                                submitEvent={UpdateShipping}
                                title="Update Shipping Address" />
                        }
                        {!editBilling ? 
                            <RenderAddress
                                data={getBillingAdd()}
                                submitEvent={OpenEditBillingDiv}
                                title="Billing Address" />
                            :
                            <RenderShippingForm
                                initialData={getBillingAdd()}
                                submitEvent={UpdateBilling}
                                title="Update Billing Address" />
                        }
                    </Shell >
                    <Shell id = "rightPanel">
                        <CheckOutContainer>
                            <TanButton 
                                id="ContinueButton"
                                type="button"
                                onClick={(e) => confirmOrder(e)}
                                disabled={disabled}
                            >Place Order</TanButton>
                            <TermsAndCondStatement />
                            <RenderSubtotal shippingFee={5.99}
                                salesTax={7.75}
                                ck_setFinalCost={ck_setFinalCost}
                                isCheckout={true}
                            />
                            <h2>Card</h2>
                            <CardElement className="card" options={CARD_OPTIONS} />
                        </CheckOutContainer>
                    </Shell>
                    {processingIndicator ?
                        <LoadingContainer>
                            <Bounce />
                        </LoadingContainer>
                        :
                        null
                            } 
                </OuterShell>
                :
                <NoItemScreen>
                    <Title>There are currently no items in your cart.</Title>
                </NoItemScreen>
            }

        </SecondInnerCont>
        )
}

export default RenderCheckout; 


const RenderCheck = props => {

    const { checkoutList, refreshList, removeItem } = props
    return (
        <CheckOutContainer>
            {checkoutList.map(itm => <RenderList {...itm}
                key={uuid()}
                refreshList={refreshList}
                removeItem={removeItem}
            />)}
        </CheckOutContainer>
    )
}

const TermsAndCondStatement = () => {
return(<Terms>By placing this order, you agree to Earth Tone's <Link to="/privacy_policy" target="_blank">privacy policy</Link>.</Terms>)
}

const Terms = styled.div`
color: #575757; 
text-align: center; 
`

const CARD_OPTIONS = {
    iconStyle: "solid",
    /*added */
    hidePostalCode: true,
    style: {
        base: {
            border: "1px solid rgba(0,0,0,05)",
            borderRadius: "15px",
            iconColor: "#c4f0ff",
            color: "#000",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}
