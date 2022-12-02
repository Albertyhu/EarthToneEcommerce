import React, {useEffect} from 'react'
import {
    StockSelection,
    StockSelectionElement,
    CustomStockInput,
    CustomStock,
    GreenButton, 
} from './stockSelectionStyle.js'; 

const RenderStockSelection = props => {
    const {
        handleStockChange,
        quantity,
        customQuan,
        setQuan,
        displayCustomStock,
        handleCustomStock,
        handleCustomSubmit,
        setDisplayCustomStock,
    } = props 
    
    useEffect(() => {
        if (quantity > 10) {
            setQuan(quantity)
        }
    }, [])

    useEffect(() => {
        if (quantity === "custom") {
            setDisplayCustomStock(true)
        }
        else {
            setDisplayCustomStock(false)
        }
    }, [quantity])

    return (
        <div>
           {!displayCustomStock ?
            <StockSelection id = "StockSelection">
                    <StockSelectionElement onChange={handleStockChange} value={quantity}>
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
                    {quantity > 10 ? <option>{quantity}</option> : null}
                    <option>custom</option>
                </StockSelectionElement >
            </StockSelection>
            :
                <CustomStock>
                    <CustomStockInput onChange={handleCustomStock} value={customQuan} />
                    <GreenButton onClick={handleCustomSubmit}>Update</GreenButton>
                </CustomStock>
            }
        </div>
        )
}

export default RenderStockSelection; 
