import styled from 'styled-components'

const RenderShippingInfo = props => {
    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const { shippingDays } = props; 
    const today = new Date(); 
    const advanceDate = new Date(new Date().setDate(today.getUTCDate() + shippingDays + 30))

    const month = advanceDate.getMonth(); 
    const date = advanceDate.getDate(); 
 
    var shipping_day = dayOfWeek[advanceDate.getDay()]
    return (
        <ShippingInfo>
            Our fastest delivery date from today is on <b>{shipping_day}, {monthOfYear[month]} {date}.</b>
        </ShippingInfo>
        )
}

export default RenderShippingInfo; 

const ShippingInfo = styled.div`
width: 90%; 
margin-left: auto;
margin-right: auto;
margin-top:20px;
margin-bottom: 20px;
`