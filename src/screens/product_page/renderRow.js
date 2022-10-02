import RenderProduct from './renderProduct.js'; 
import './product.css'; 
import uuid from 'react-uuid'; 

const RenderRow = props => {
    //rowItems is an array of products
    const {rowItems} = props
    return (
        <div id = "row">
            {rowItems.map(item => <RenderProduct {...item} key={uuid()} />)}
        </div>
        )
}

export default RenderRow; 