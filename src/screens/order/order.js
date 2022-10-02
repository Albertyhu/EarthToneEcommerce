import React, { useEffect, useContext, useState } from 'react'; 
import PageTemplate from '../../PageTemplate.js'; 
import { MyContext } from '../../components/contextItem.js'; 
import RenderOrderItem from './renderOrderItem.js'; 
import uuid from 'react-uuid'; 
import { PageTemplateContext } from '../../components/pageTemplateContext.js'; 

const OrderPage = props => {
    const {
        openHamburger,
        openPanel,
        accountPanel,
        addProductMessage,
        message
    } = props; 

    

    return (<PageTemplate MainContent={MainContent}
        openHamburger={openHamburger}
        openPanel={openPanel}
        accountPanel={accountPanel}
        addProductMessage={addProductMessage}
        message={message}
        heightType={"inherit"}
    />)
}

export default OrderPage;

const MainContent = props => {
    const { getOrders } = useContext(MyContext); 
    const [orderList, setOrderList] = useState(getOrders())
    const { makePageAuto} = useContext(PageTemplateContext)
    useEffect(() => {
        if (orderList) {
            makePageAuto(); 
        }
    }, [orderList])

    return (<div>
        <h2>Order History</h2>
        {orderList.map(val => <RenderOrderItem {...val} key={uuid()} />)}
    </div>)
}