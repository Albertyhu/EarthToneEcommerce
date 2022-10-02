import BurgerMenuPanel from '../base_elements/hamburgerPanel.js'; 
import CartPanel from '../screens/cart/cartPanel.js'; 
import AccountPanel from '../screens/account_panel/accountPanel.js'; 

const RenderPanels = props => {
    const { burgerTrigger, cartTrigger, accountTrigger } = props 
    return (
        <div>
            <BurgerMenuPanel openHamburger={burgerTrigger} />
            <CartPanel openPanel={cartTrigger} />
            <AccountPanel openPanel={accountTrigger}/>
        </div>
        )
}

export default RenderPanels; 