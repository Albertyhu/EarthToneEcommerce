import React, { useEffect, useState, useCallback, useContext } from 'react'; 
import './product.css';
import '../../style/button.css'; 
import { MyContext } from '../../components/contextItem.js'; 
import { useNavigate } from 'react-router-dom'; 
import { ProductContext } from './productContext.js';
import RenderRatings from '../../components/rating/renderRatings.js'; 
//What does it need
//Product ID
//Product Image 
//Product Price 
//Product Details 
//Product title 
const RenderProduct = props => {
    const { image, name, price, description, ID, amount, ratingAvg, ratingCount } = props
    const { addProduct, openAddProductMessage, setWish } = React.useContext(MyContext)
    const { changeMessage, changeOpacity } = useContext(ProductContext); 
    const [stockPurchase, setStock] = useState(1); 
    const [customStock, setCustomStock] = useState(0)
    const [displayCustomStock, setDisplayCustomStock] = useState(false); 
    const navigate = useNavigate(); 
    const handleStockChange = event => {
        setStock(event.target.value)
    }

    const handleCustomStock = event => {
        let regex = /[^0-9]/g
        var userInput = event.target.value.replace(regex, ""); 
        setCustomStock(userInput)
    }

    const closeCustom = () => {
        setDisplayCustomStock(false);
        setCustomStock(0);
        setStock(0);
    }

    const goProductProfile = useCallback(() => navigate('../product_profile', {
        replace: true, 
        state: {
            id: ID, 
        }
    }), [navigate])

    useEffect(() => {
        if (stockPurchase === "custom") { setDisplayCustomStock(true) }
        else
            setDisplayCustomStock(false) 
    }, [stockPurchase])

    const handleAddCart = () => {
        var trueStock = 0; 
        if (displayCustomStock) {
            trueStock = customStock;
        }
        else {
            trueStock = stockPurchase; 
        }
        if (trueStock !== 0) {
            changeMessage('Product has been added to your cart')
            addProduct(ID, parseInt(trueStock), price)
            openAddProductMessage();
            reset();
            changeOpacity();
        }
        else {
   
        }
    }

    const reset = () => {
        setStock(0);
        setCustomStock(0);
        setDisplayCustomStock(false);
    }

    const addToWishlist = () => {
        changeMessage('Product has been added to your wishlist')
        openAddProductMessage();
        setWish(ID)
    }
    const RenderStars = useCallback((e) => <RenderRatings rating={ratingAvg} />, [ratingAvg])
    //The ratings is causing a bug where everytime a button is clicked, all the components look like they are twitching
    return (
        <div className="productDiv" >
            <img src={image} id="productImage" onClick={goProductProfile} />
            <h3>{name}</h3>
            {ratingAvg ? RenderStars() : null} 
            <span>{ratingCount} vote(s)</span>
            <div className="descriptionArea">{description}</div>
            <div><b>Amount Per Bag:</b>  {amount} oz.</div>
            <div className = "price"><b>${price.toFixed(2)}</b></div>
            <div id="stockSelection">
                <b style={{display: 'inline-block'}}>Bags to buy: </b>
                <select onChange={handleStockChange} id="stockSelectionElement" value={stockPurchase}>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>custom</option>
                </select>
            </div>
            <div id="customStock">
                {
                    displayCustomStock ?
                        <div>
                            <b>Custom Amount: </b>
                            <input onChange={handleCustomStock} value={customStock} id="customStockInput" />
                            <div id="cancelButton" onClick={closeCustom}>Cancel</div>
                        </div>
                        :
                        null
                }
            </div>
            <div className="AddCartButton" onClick={handleAddCart}>Add to cart</div>
            <div
                id="addToWishlist"
                onClick={addToWishlist}
            >Add to Wishlist</div>
        </div>
        )
}

export default RenderProduct; 