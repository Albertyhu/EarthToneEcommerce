import React, { useState, useContext, useCallback, useEffect} from 'react'; 
import RenderStockSelection from '../../components/stockSelection'; 
import {
    ListItem,
    Image, 
    Title, 
    DetailTable,
    TH, 
    SalesPrice, 
    SecondaryLinks,
    TDseparator,
} from './checkoutStyle.js'; 
import { MyContext, CheckoutListContext } from '../../context/contextItem.js'; 
import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components'; 

const RenderList = props => {
    const { ID,
        name,
        description,
        price,
        amount,
        image,
        imageArray,
        weight,
        width,
        length,
        height,
        shippingDays,
        stock,
        refreshList, 
        removeItem, 
        updateCartList, 
        updateSubtotal 
    } = props; 
    
    const [quantity, setQuan] = useState(stock); 

    const [customQuan, setCustomQuan] = useState(0); 
    const [displayCustomStock, setDisplayCustomStock] = useState(false);
    const { removeFromCart, setWish, updateProductStockInCart } = useContext(MyContext)
    const navigate = useNavigate(); 
    const handleCustomStock = event => {
        let regex = /[^0-9]/g
        var userInput = event.target.value.replace(regex, "");
        setCustomQuan(userInput)
    
    }

    const handleStockChange = event => {
        setQuan(event.target.value)
        if (event.target.value !== "custom") {
            updateCartList(ID, parseInt(event.target.value));
            updateSubtotal(ID, parseInt(event.target.value), price)
        }
    }

    const handleCustomSubmit = () => {
        setQuan(parseInt(customQuan));
        setDisplayCustomStock(false);
        updateCartList(ID, parseInt(customQuan));
        updateSubtotal(ID, parseInt(customQuan), price)
    }

    const moveToWishList = () => {
        removeItem(ID);   
        removeFromCart(ID);
        setWish(ID);
    }



    const goProductProfile = useCallback(() => navigate('../product_profile', {
        replace: true, 
        state: {
            id: ID, 
        }
    }), [navigate])

    //If the stock gets update with the RenderSelection component, it immediately updates the cart 
    const updateCart = () => {
        updateProductStockInCart(ID, quantity)
    }

    const determineView = () => {
        return window.innerWidth > 1007 ? true : false;
    }

    const [desktopView, setdesktopView] = useState(determineView ())

    const resizeEvent = () => {
        setdesktopView(determineView())
    }

    useEffect(() => {
        window.addEventListener('resize', resizeEvent)

        return () => { window.removeEventListener('resize', resizeEvent) }
    }, [])
    
    useEffect(() => {
        if (quantity !== "custom") {
            updateCart()
        }
    }, [quantity])

    const context = {
        name,
        description,
        price,
        amount,
        image,
        imageArray,
        weight,
        width,
        length,
        height,
        shippingDays,
        stock,
        refreshList,
        removeItem,
        updateCartList,
        updateSubtotal,
        ID, 
        goProductProfile, 
        handleStockChange,
        quantity,
        customQuan,
        displayCustomStock,
        handleCustomStock, 
        setDisplayCustomStock,
        handleCustomSubmit, 
        setQuan, 
        removeFromCart,
        removeItem, 
        moveToWishList
    }

    return (
        <CheckoutListContext.Provider value ={context}>
            <ListItem>
                <div>
                    <Title>{name}</Title>
                    <Image src={image} onClick={() => goProductProfile(ID)} />
                </div>
                {desktopView ?
                    <DetailTable>
                        <tbody>
                            <tr><TH>Price: </TH><td><SalesPrice>${price.toFixed(2)}</SalesPrice></td></tr>
                            <tr><TH>Quantity: </TH><td><RenderStockSelection
                                handleStockChange={handleStockChange}
                                quantity={quantity}
                                customQuan={customQuan}
                                displayCustomStock={displayCustomStock}
                                handleCustomStock={handleCustomStock}
                                setDisplayCustomStock={setDisplayCustomStock}
                                handleCustomSubmit={handleCustomSubmit}
                                setQuan={setQuan}
                            /></td><TDseparator><SecondaryLinks onClick={() => {
                                removeFromCart(ID);
                                removeItem(ID);
                            }}>Delete</SecondaryLinks></TDseparator><TDseparator><SecondaryLinks onClick={moveToWishList}>Move to Wishlist</SecondaryLinks></TDseparator></tr>
                        </tbody>
                    </DetailTable>
                    :
                    <TabletTable />
                    }
            </ListItem>
        </CheckoutListContext.Provider>
        )

 }

export default RenderList; 

const TabletTable = props => {
    const {
        name,
        description,
        price,
        amount,
        image,
        imageArray,
        weight,
        width,
        length,
        height,
        shippingDays,
        stock,
        refreshList,
        removeItem,
        updateCartList,
        updateSubtotal,
        ID,
        goProductProfile,
        handleStockChange,
        quantity,
        customQuan,
        displayCustomStock,
        handleCustomStock,
        setDisplayCustomStock,
        handleCustomSubmit,
        setQuan,
        removeFromCart,
        moveToWishList
    } = useContext(CheckoutListContext); 

    return (
        <VerticalTable>
                <TextRow><RowLabel>Price: </RowLabel><RowData><SalesPrice>${price.toFixed(2)}</SalesPrice></RowData></TextRow>
                <TextRow><RowLabel>Quantity: </RowLabel><RowData id = "SelectionComp"><RenderStockSelection
                    handleStockChange={handleStockChange}
                    quantity={quantity}
                    customQuan={customQuan}
                    displayCustomStock={displayCustomStock}
                    handleCustomStock={handleCustomStock}
                    setDisplayCustomStock={setDisplayCustomStock}
                    handleCustomSubmit={handleCustomSubmit}
                    setQuan={setQuan}
                /></RowData></TextRow>
            <ButtonWrapper>
                <SecondaryLinks onClick={() => {
                    removeFromCart(ID);
                    removeItem(ID);
                }}>Delete</SecondaryLinks>
                <SecondaryLinks onClick={moveToWishList}>Move to Wishlist</SecondaryLinks>
            </ButtonWrapper>
        </VerticalTable>
        )
}

const VerticalTable = styled.div`
    display: inline-block;
    margin: auto 0;
@media screen and (max-width: 378px){
    margin: 10px auto;
    display: block;
 
}
`


const TextRow = styled.div`
    display: block;
`

const RowLabel = styled.div`
    font-weight: bold; 
`
const RowData = styled.div`
@media screen and (max-width: 378px){
    &#SelectionComp{
        & > *{
            margin: 5px auto;
        }
    }
}
`

const ButtonWrapper = styled.div`
    display: grid; 
  //  & > *{margin: 10px auto;}
`