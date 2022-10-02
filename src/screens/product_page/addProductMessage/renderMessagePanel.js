import React, { useState, useEffect } from 'react';
import SlidingPanel from 'react-sliding-side-panel';
import { MyContext } from '../../../components/contextItem.js';
import './messageStyle.css'; 

const RenderMessage = props => {
    const { addProductMessage, message } = props; 
    //const [message, setMessage] = useState(''); 
    const { closeAddProductMessage, getMessageRef } = React.useContext(MyContext)
    const ref = getMessageRef(); 
    useEffect(() => {
        if (addProductMessage) {
           setTimeout(() => {
                closeAddProductMessage();
            }, 2000)
        }
        const checkIfClickedOutside = e => {
            if (addProductMessage && ref.current && !ref.current.contains(e.target)) {
                closeAddProductMessage();

            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {document.removeEventListener("mousedown", checkIfClickedOutside)}

    }, [addProductMessage])

    return (
        <div>
            <SlidingPanel
                type={'top'}
                isOpen={addProductMessage}
                size={20}
                panelContainerClassName="messageContainer"
                noBackdrop={true}
            >
                <div className="addMessageContainer" ref={ref}>
                    <div id="addMessage">{message}</div>
                </div>
            </SlidingPanel>
        </div>
        )
}

export default RenderMessage; 