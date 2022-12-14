import React, { useEffect, useCallback } from 'react';
import SlidingPanel from 'react-sliding-side-panel';
import { MyContext } from '../../context/contextItem.js';
import '../../style/button.css'; 
import './account.css'; 
import { useNavigate } from 'react-router-dom'; 
import { HandleSignOut } from '../../services/firebase/hooks/signOut.js'; 
import { MenuOptions, OptionsContainer, ImageLogo } from './accountStyledComponents.js'; 
import Logo from '../../base_elements/logo/Earth Tone-white-transparent.png';
import { LogoContainer } from '../../base_elements/headerStyle.js'

const AccountPanel = props => {
    const { openPanel } = props; 
    const { getAccountPanelRef, closeAccountPanel } = React.useContext(MyContext); 
    const accountRef = getAccountPanelRef(); 
    const navigate = useNavigate(); 
    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (openPanel && accountRef.current && !accountRef.current.contains(e.target)) {
                closeAccountPanel(); 
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return ()=> document.removeEventListener("mousedown", checkIfClickedOutside)
    }, [openPanel])

    const goCheckout = useCallback(() => navigate('../checkout', {  }), [navigate])
    const goWishlist = useCallback(() => navigate('../wishlist', {  }), [navigate])
    const goCart = useCallback(() => navigate('../cart', {  }), [navigate])
    const goAccount = useCallback(() => navigate('../acount_page', {  }), [navigate])
    const goOrderPage = useCallback(() => navigate('../orders', {  }), [navigate])

    return (
        <div>
            <SlidingPanel
                type={'right'}
                isOpen={openPanel}
                size={window.innerWidth > 540 ? 20 : 75}
                noBackdrop={true}
            >
                <div className="panel-container" ref={accountRef}>
                    <LogoContainer><ImageLogo src={Logo} /></LogoContainer>
                    <OptionsContainer>
                    <MenuOptions onClick={() => {
                        goAccount();
                        closeAccountPanel();
                        }}>Your Account</MenuOptions>
                    <MenuOptions onClick={() => {
                        goOrderPage();
                        closeAccountPanel();
                    }}>Your Orders</MenuOptions>
                    <MenuOptions onClick={() => {
                        goCheckout();
                        closeAccountPanel();
                    }}>Check Out</MenuOptions>
                    <MenuOptions onClick={() => {
                        goCart();
                        closeAccountPanel();
                    }}>Shopping Cart</MenuOptions>
                    <MenuOptions onClick={() => {
                        goWishlist();
                        closeAccountPanel();
                    }}>Wish List</MenuOptions>
                    <MenuOptions onClick={() => {
                        HandleSignOut();
                        closeAccountPanel();
                        }}>Sign Out</MenuOptions>
                    </OptionsContainer>
                </div>
            </SlidingPanel>
        </div>

        )

}

export default AccountPanel; 