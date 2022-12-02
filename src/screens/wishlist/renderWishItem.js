import React, { useCallback, useContext } from 'react'
import { MyContext } from '../../context/contextItem.js'; 
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
    Row,
    RowLabel,
    RowData,
    InfoTable, 
    TextTable
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
        deleteWish, setWish
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

    //return (
        //<ListItem >
        //    <Image src={image} onClick={() => goProductProfile(ID)} />
        //    <DetailTable id = "WishDetailTable">
        //    <tbody>
        //            <tr><th colSpan="3"><Title>{name}</Title></th></tr>
        //            <tr><TH>Price  </TH><td>${price.toFixed(2)}</td></tr>
        //            <tr><TH>Weight </TH><td>{weight}</td></tr>
        //            <tr><TH>Dimensions </TH><td>{width}x{length}x{height} in.</td></tr>
        //            <tr><td><TanButton onClick={handleMovetoCart}>Move to Cart</TanButton></td><TDseparator><SecondaryLinks onClick={() => {deleteWish(ID)}}>Delete</SecondaryLinks></TDseparator></tr>
        //        </tbody>
        //     </DetailTable>
        //</ListItem>

        //)
    return (
        <>
            <Title>{name}</Title>
            <InfoTable id="WishDetailTable">
                <Image src={image} onClick={() => goProductProfile(ID)} />
                <TextTable>
                    <Row><RowLabel>Price  </RowLabel><RowData>${price.toFixed(2)}</RowData></Row>
                    <Row><RowLabel>Weight </RowLabel><RowData>{weight}</RowData></Row>
                    <Row><RowLabel>Dimensions </RowLabel><RowData>{width}x{length}x{height} in.</RowData></Row>
                    <Row><RowLabel><TanButton onClick={handleMovetoCart}>Move to Cart</TanButton></RowLabel><RowData id="TDseparator"><SecondaryLinks onClick={() => { deleteWish(ID) }}>Delete</SecondaryLinks></RowData></Row>
                </TextTable>
            </InfoTable>
        </>

    )

}

export default RenderWishItem; 