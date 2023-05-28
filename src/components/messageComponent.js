import { useEffect, useRef } from 'react'; 
import uuid from 'react-uuid'; 
import "../style/myStyle.css"

//this is component is for displaying messages that notifies user of when their post is saved, or when their comments are submitted, etc. 
const MessageComponent = props => {
    const { message, dispatch } = props; 
    var obj1 = null; 
    var obj2 = null; 
    var obj3 = null; 

    function AnimateMessage(DivElem) {
       obj1= setTimeout(() => {
            DivElem?.classList.remove("MessageFadeOut");
            DivElem?.classList.add("MessageFadeIn");
        }, [1])
       obj2 = setTimeout(() => {
            dispatch([]); 
        }, [6000])
       obj3 = setTimeout(() => {
            DivElem?.classList.remove("MessageFadeIn")
            DivElem?.classList.add("MessageFadeOut"); 
        }, [5000])
    }

    function RenderMessage() {
        //Dont use any hooks here.  
        return message.map((item, index) => {
            const ID = `${item.param}-${index}`;
            return <div
                key={uuid()}
                id={ID}
                className={`Message box_shadow MessageFadeOut`}>{item.msg}</div>
        })
    }

    const messageRef = useRef(); 

    useEffect(() => {
        if (message && message.length > 0) {
            for (var child of messageRef.current.children) {
                AnimateMessage(child)
            }
        }
    }, [message])

    return (
        <div
            id="message"
            className="messageWrapper"
            ref={messageRef}
        >
            {message != null && message.length > 0 && RenderMessage()}
        </div>
        )
}

export default MessageComponent; 