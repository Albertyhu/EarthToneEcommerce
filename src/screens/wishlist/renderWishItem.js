import React, { useCallback, useContext } from 'react'
import { MyContext } from '../../components/contextItem.js'; 
import {useNavigate} from 'react-router-dom'
import {
    ListItem,
    ListDetails,
    Image,
    Title,
    DetailTable,
    TH,
    SalesPrice,
    SecondaryLinks,
    TDseparator,
    ButtonContainer,
    BrownButton,
    TanButton, 
} from './wishStyled.js'; 

const RenderWishItem = props => {
    const {
        ID, 
        name,
        description,
        price,
        amount,
        image,
        weight,
        width,
        length,
        height,
        deleteWish, 
    } = props; 

    const { addProduct } = useContext(MyContext); 
    const navigate = useNavigate(); 
    const goProductProfile = useCallback(() => navigate('../product_profile', {
        replace: true,
        state: {
            id: ID,
        },
    }), [navigate])

    const handleMovetoCart = () => {
        addProduct(ID, 1, price); 
        deleteWish(ID); 
    }

    return (
        <ListItem >
            <Image src={image} onClick={() => goProductProfile(ID)} />
            <DetailTable id = "WishDetailTable">
            <tbody>
                    <tr><th colspan="3"><Title>{name}</Title></th></tr>
                    <tr><TH>Price  </TH><td>${price.toFixed(2)}</td></tr>
                    <tr><TH>Weight </TH><td>{weight}</td></tr>
                    <tr><TH>Dimensions </TH><td>{width}x{length}x{height} in.</td></tr>
                    <tr><td><TanButton onClick={handleMovetoCart}>Move to Cart</TanButton></td><TDseparator><SecondaryLinks onClick={() => {deleteWish(ID)}}>Delete</SecondaryLinks></TDseparator></tr>
                </tbody>
             </DetailTable>
        </ListItem>

        )


}

export default RenderWishItem; 