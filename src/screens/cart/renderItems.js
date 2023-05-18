import React from 'react'; 
import { Link } from 'react-router-dom'
import { MyContext } from '../../context/contextItem.js'; 

const RenderTeaItems = props => {
    const { 
        id, 
        name,
        image,
        price,
        amount,
        width,
        length,
        height, 
        stock,        
    } = props; 
    const { closeCartPanel } = React.useContext(MyContext)

    const subTotal = price * stock; 
    return (
        <Link to="../product_profile"
            state={{
                id,
            }}
            style={linkStyle}
            onClick={closeCartPanel}
        ><div id = "cartItemContainer">
                <div id="cartImageContainer">
                    <img src={image} className="cartItemImage" />
                </div>
                <div className = "cartItemText">
                    <h2>Item: {name}</h2>
                    <p><b>Amount per bag: </b> {amount} oz.</p>
                    <p><b>Dimensions: </b> {width} x {length} x {height} in.</p>
                    <p><b>Number of bags to be purchased: </b> { stock}</p>
                    <p><b>Price: </b> ${price}</p>
                    <p><b>Subtotal: </b>${subTotal.toFixed(2)}</p>
                </div>
            </div>
        </Link>
        )

}

export default RenderTeaItems; 

const linkStyle = {
    textDecoration: 'none',
    color: "#000000",
    cursor: "pointer",
    marginBottom: "10px",
}