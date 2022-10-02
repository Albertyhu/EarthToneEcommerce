import React, { useState, useEffect, useCallback } from 'react'; 
import { MyContext } from '../../../components/contextItem.js'; 
import { PageTemplateContext } from '../../../components/pageTemplateContext.js'; 
import {
    CTAPanelContainer,
    InnerContainer,
    SalesPrice, 
    ButtonContainer, 
    BrownButton,
    TanButton,
    SecureTransBlock,
    WishButton, 
} from './profileStyledComp.js'; 
import RenderStockSelection from '../functions/stockSelection.js'
import RenderShippingInfo from '../functions/renderShippingInfo.js'; 
import { AiFillLock } from 'react-icons/ai';
import { TeaData } from '../../../components/teaData.js'; 
import { useNavigate } from 'react-router-dom'; 

const CTA = props => {
    const { addProduct, openAddProductMessage, setWish } = React.useContext(MyContext)
    const { changeMessage } = React.useContext(PageTemplateContext); 
    const { shippingDays, productID, price, setMessage  } = props 
    const [quantity, setQuantity] = useState(1); 
    const [customQuan, setCustomQuan] = useState(0); 
    const [displayCustomStock, setDisplayCustomStock] = useState(false); 
    const [ subtotal, setSubtotal ] = useState(price)
    const navigate = useNavigate(); 

    const goProductPage = useCallback(() => navigate('../product_page', { replace: true }), [navigate])

    const handleStockChange = event => {
        setQuantity(event.target.value)
    }

    const handleCustomStock = event => {
        let regex = /[^0-9]/g
        var userInput = event.target.value.replace(regex, "");
        setCustomQuan(userInput)
    }

    const handleCustomSubmit = () => {
        setQuantity(customQuan);
        setDisplayCustomStock(false);
    }

    const closeCustom = () => {
        setDisplayCustomStock(false);
        setCustomQuan(0);
        setQuantity(0);
    }

    const handleAddCart = () => {
        var trueStock = 0;
        if (displayCustomStock) {
            trueStock = customQuan;
        }
        else {
            trueStock = quantity;
        }
        if (trueStock !== 0) {
            addProduct(productID, parseInt(trueStock), price)
            changeMessage("The product has been added to your cart.")
            openAddProductMessage()
            reset();
            setTimeout(()=> goProductPage(), 1000); 
        }
        else {

        }
    }

    const handleAddWish = () => {
        changeMessage("The product has been added to your wish list")
        openAddProductMessage()
        setWish(productID)
  
    }

    const reset = () => {
        setQuantity(1)
        setCustomQuan(0)
        setDisplayCustomStock(false);
    }

    useEffect(() => {
        if (quantity === "custom") { setDisplayCustomStock(true) }
        else
            setDisplayCustomStock(false)
        if (!isNaN(quantity) && quantity > 0) {
            setSubtotal(quantity * price)
        }
    }, [quantity])

    useEffect(() => {
        setSubtotal(price)
        setQuantity(1)
    }, [price])

    return (
        <CTAPanelContainer>
            <InnerContainer>
                <SalesPrice>${subtotal.toFixed(2)}</SalesPrice>
                <RenderStockSelection
                    handleStockChange={handleStockChange}
                    quantity={quantity}
                    customQuan={customQuan}
                    displayCustomStock={displayCustomStock}
                    handleCustomStock={handleCustomStock}
                    closeCustom={closeCustom}
                    handleCustomSubmit={handleCustomSubmit}
                />
                <RenderShippingInfo shippingDays={shippingDays} />
                <ButtonContainer>
                    <BrownButton onClick={handleAddCart}>Add to Cart</BrownButton>
                    <TanButton id="buyNowBTN">Buy Now</TanButton>
                    <SecureTransBlock><AiFillLock style={lockStyle} /><span>Secure Transaction</span></SecureTransBlock>
                    <WishButton onClick={handleAddWish}>Add to Wish List</WishButton>
                </ButtonContainer> 
            </InnerContainer>
        </CTAPanelContainer>
        )

}

export default CTA; 

const lockStyle = {
    width: "30px",
    height: "30px",

}