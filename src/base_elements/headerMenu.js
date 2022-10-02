import React from 'react'; 
import { Link } from "react-router-dom";
import '../style/button.css';
import '../style/myStyle.css'; 
import { MyContext } from '../components/contextItem.js';
import CartIcon from '../images/icon/shopping-cart-white.png'; 

const HeaderMenu = () => {
    const { toggleCartPanel } = React.useContext(MyContext);
    return (
        <div id="headerMenu" style={{flexDirection: "flex-end"}}>
            <Link to="/tea-eCommerce-shop" className = "menuLinks"><div>Home</div></Link>
            <Link to="/product_page" className="menuLinks"><div>Shop</div></Link>
            <div id="cartButton" onClick={toggleCartPanel}><img src={CartIcon} id="cartIcon" /></div>
        </div>
        )
}

export default HeaderMenu; 