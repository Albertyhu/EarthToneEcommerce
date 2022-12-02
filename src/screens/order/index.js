import React, { useEffect, useContext, useState } from 'react'; 
import PageTemplate from '../../PageTemplate.js'; 
import { MyContext, PageTemplateContext  } from '../../context/contextItem.js'; 
import RenderOrderItem from './renderOrderItem.js'; 
import uuid from 'react-uuid'; 
import {
    NoItemScreen, 
    Title
} from '../../style/globalStyledComp.js';

const OrderPage = props => {
    const {
        openHamburger,
        openPanel,
        accountPanel,
        addProductMessage,
        message
    } = props; 

    const { getNumberOfOrders } = useContext(MyContext) 

    return (<PageTemplate MainContent={MainContent}
        openHamburger={openHamburger}
        openPanel={openPanel}
        accountPanel={accountPanel}
        addProductMessage={addProductMessage}
        message={message}
        heightType={"inherit"}
        onDynamicPage={true}
        numberOfDyamicItems={getNumberOfOrders()}
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

    if (orderList.length > 0) {
        return (<div>
            <h2>Order History</h2>
            {orderList.map(val => <RenderOrderItem {...val} key={uuid()} />)}
        </div>)
    }
    else {
        return (
            <NoItemScreen>
                <Title>There are currently no orders to show here.</Title>
            </NoItemScreen>
            )
    }
}