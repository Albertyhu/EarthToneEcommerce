import React, {useCallback} from 'react'; 
import PageTemplate from '../../PageTemplate.js';
import { PageTemplateContext } from '../../components/pageTemplateContext.js';
import { SecondInnerCont } from '../../style/globalStyledComp.js'
import { useNavigate } from 'react-router-dom'
import { TanButton } from '../../style/styledButton.js'; 

const OrderCompletePage = props => {
    const { openHamburger, openPanel, accountPanel } = props;
    return (<PageTemplate MainContent={MainContent}
        openHamburger={openHamburger}
        openPanel={openPanel}
        accountPanel={accountPanel}
    />)
}

const MainContent = props => {
    const {} = React.useContext(PageTemplateContext)
    const navigate = useNavigate(); 

    const goProductPage = useCallback(() => { navigate('../product_page', {replace: true} )}, [navigate])
    return (
        <SecondInnerCont>
            The order has been complete. Thank you for your purchase. 

            <TanButton onClick={goProductPage} id = "ContinueBrowsing">Continue browsing our collection</TanButton>
        </SecondInnerCont>)
}

export default OrderCompletePage; 