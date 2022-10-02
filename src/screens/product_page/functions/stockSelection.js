import styled from 'styled-components'
const RenderStockSelection = props => {
    const {
        handleStockChange,
        quantity,
        customQuan,
        displayCustomStock,
        handleCustomStock,
        handleCustomSubmit,
        closeCustom,
    } = props 
    return (
        <div>
            <StockSelection>
                <b style={{ display: 'inline-block' }}>Stock: </b>
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
                    {customQuan > 10 ? <option>{customQuan}</option> : null}
                    <option>custom</option>
                </StockSelectionElement >
            </StockSelection>
            {displayCustomStock ?
                <CustomStock>
                    <b>Custom Amount: </b>
                    <CustomStockInput onChange={handleCustomStock} value={customQuan} />
                    <GreenButton onClick={handleCustomSubmit}>submit</GreenButton>
                    <DarkGreenButton onClick={closeCustom}>cancel</DarkGreenButton >
                </CustomStock>
                :
                null
            }
        </div>
        )
}

export default RenderStockSelection; 

export const StockSelection = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    align-self: center;
    text-align: center;
    margin-top:5px;
    margin-bottom: 5px;


`

export const StockSelectionElement = styled.select`
margin-left: auto;
margin-right: auto;
display: block;
border-radius: 10px; 
border: none;
outline: none;
background-color: #cbcbcb;
padding: 5px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`



export const CustomStockInput = styled.input`
width: 30px; 
display: inline-block;
`

export const CustomStock = styled.div`
display: inline-block; 
width: 100%;
height: 40px;
max-height: 40px;
margin-left: auto;
margin-right: auto;
text-align: center;
margin-top: 10px;
`

export const DarkGreenButton = styled.div`
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    padding: 5px;   
    max-width: 60px;
    background-color: #25963E;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
    user-select: none;
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
&:active{
    background-color: #b8b8b8;
    transform: translate(4px, 4px)
}
`

export const GreenButton = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 5px;
    background-color: #10C135;
    max-width: 60px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
    user-select: none;
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

&:active{
    background-color: #b8b8b8;
    transform: translate(4px, 4px)
}
`