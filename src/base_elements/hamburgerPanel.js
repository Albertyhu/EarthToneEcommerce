import React, { useEffect, useState, useContext, useCallback} from 'react'; 
import { MyContext } from '../components/contextItem.js'; 
import SlidingPanel from 'react-sliding-side-panel';
import { Link, useNavigate } from 'react-router-dom'; 
import HomeIcon from '../images/icon/Home-black.png';
import ShoppingIcon from '../images/icon/price-tag-black.png';
import CartIcon from '../images/icon/shopping-cart-dark.png'; 
import CloseIcon from '../images/icon/cancel-round-dark.png';
import Logo from './logo/Earth Tone-white-transparent.png'; 
import { LogoContainer, LinkCont } from './headerStyle.js'
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';
import { GoSignOut } from 'react-icons/go';
const HamburgerPanel = props => {
    const { openHamburger } = props;
    const { closeHamburgerPanel, openCartPanel, getHamburgerRef  } = useContext(MyContext)
    var hamburgerRef = getHamburgerRef(); 

    useEffect(() => {
        const checkIfClickedOutside = event => {
            if (openHamburger && hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
                closeHamburgerPanel(); 
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => { document.removeEventListener("mousedown", checkIfClickedOutside)}
    }, [openHamburger])

    const navigate = useNavigate(); 

    const goSignin = useCallback(() => navigate('../sign_in', { replace: true }), [navigate])

    return (
        <SlidingPanel
            type={'left'}
            isOpen={openHamburger}
            size={50}
            noBackdrop={true}
        >
            <div className="panel-container" id="hamburgerPanel" ref={hamburgerRef}>
                <LogoContainer ><img src={Logo} id="logoHamburger" /></LogoContainer >
                <Link to="/tea-eCommerce-shop" className="hamburgerLinks" onClick={closeHamburgerPanel} ><img src={HomeIcon} className = 'burgerIcon' /><div>Home</div></Link>
                <Link to="/product_page" className="hamburgerLinks" onClick={closeHamburgerPanel} ><img src={ShoppingIcon} className='burgerIcon' /><div>Shop</div></Link>
                <div onClick={() => {
                    closeHamburgerPanel();
                    openCartPanel();
                }} className="hamburgerLinks"><img src={CartIcon} className='burgerIcon' /><div>Cart</div></div>
                <div onClick={() => {
                    closeHamburgerPanel(); 
                    goSignin(); 
                }} className="hamburgerLinks"><HiOutlineSwitchHorizontal  className='burgerIcon' /><div>Switch Accounts</div></div>
                <div onClick={closeHamburgerPanel} className="hamburgerLinks"><GoSignOut src={CloseIcon} className='burgerIcon' /><div>Sign Out</div></div>
                <div onClick={closeHamburgerPanel} className="hamburgerLinks"><img src={CloseIcon} className='burgerIcon' /><div>Close Menu</div></div>
            </div>
        </SlidingPanel>
    )
}

export default HamburgerPanel; 