import React, {useState, useContext, useEffect, useCallback } from 'react'
import {
    OuterShell, 
    Title, 
    DetailTable, 
    TH
} from '../../style/globalStyledComp.js';
import { GreenButton } from '../../style/styledButton.js';
import PageTemplate from '../../PageTemplate.js';
import { PageTemplateContext } from '../../components/pageTemplateContext.js'; 
import ShippingForm from '../shipping/shippingForm.js'; 
import { MyContext } from '../../components/contextItem.js'; 

import { Shell, } from './accountStyledComponents.js'; 

const AccountPage = props => {

    const {
        openHamburger,
        openPanel,
        accountPanel,
        addProductMessage,
        message
    } = props; 
    return (
            <PageTemplate MainContent={MainContent}
                openHamburger={openHamburger} 
                openPanel={openPanel}
                accountPanel={accountPanel}
                addProductMessage={addProductMessage} 
                message={message}
            />
        )
} 

export default AccountPage; 

const MainContent = props => {
    const { getShippingAdd, setShippingAdd, getBillingAdd, setBillingAdd } = React.useContext(MyContext)
    const { makePageAuto} = useContext(PageTemplateContext)
    const [displayBillingAdd, setDisplayBillingAdd] = useState(true);
    const [displayShippingAdd, setDisplayShippingAdd] = useState(true);

    const openEditBillingAdd = () => {
        setDisplayBillingAdd(false)
    }
    const closeEditBillingAdd = () => {
        setDisplayBillingAdd(true)
    }

    const openEditShippingAdd = () => {
        setDisplayShippingAdd(false)
    }
    const closeEditShippingAdd = () => {
        setDisplayShippingAdd(true)
    }

    const updateShipping = data => {
        setShippingAdd(data)
        setDisplayShippingAdd(true)
    }

    const updateBilling = data => {
        setBillingAdd(data)
        setDisplayBillingAdd(true);
    }
    window.onFocus = makePageAuto()
    

    return (
        <OuterShell id="addressCont">
            {displayBillingAdd ? 
                <RenderAddress data={getBillingAdd()}
                    submitEvent={openEditBillingAdd}
                    title="Billing Address"
                /> 
                :
                <ShippingForm
                    submitEvent={updateBilling}
                    initialData={getBillingAdd()}
                    title="Billing Address"
                />
                }
            {displayShippingAdd ?
                <RenderAddress data={getShippingAdd()}
                    submitEvent={openEditShippingAdd}
                    title="Shipping Address"
                />
                :
                <ShippingForm
                    submitEvent={updateShipping}
                    initialData={getShippingAdd()}
                    title="Shipping Address"
                />
            }
         </OuterShell>

    )
}

export const RenderAddress = props => {
    const { data, submitEvent, title } = props; 
    return (
        <OuterShell id = "addressCont">
            <h1>{title}</h1> 
                <DetailTable id = "addressTable"><tbody>
                    <tr><TH>Address Line 1</TH><td>{data.address1}</td></tr>
                    <tr><TH>Address Line 2</TH><td>{data.address2}</td></tr>
                    <tr><TH>City</TH><td>{data.city}</td></tr>
                    <tr><TH>State</TH><td>{data.state}</td></tr>
                    <tr><TH>Zipcode</TH><td>{data.zipcode}</td></tr>
                    <tr><TH>country</TH><td>{data.country}</td></tr>
                </tbody></DetailTable>
                <GreenButton onClick={submitEvent} id = "addressChange">Update Info</GreenButton>
        </OuterShell>
        ) 
}