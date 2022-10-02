import { TeaData } from '../../components/teaData.js'; 

import RenderRow from './renderRow.js'; 
import uuid from 'react-uuid'

const RenderCollection = props => {
    //props.arrlength carries the length of the array that has all the tea data
    var count = props.arrlength; 
    var groupRow = []; 
    var count = 0; 
    var rowCount = -1; 

    TeaData.forEach(item => {
        if (count === 0) {
            var singleRow = []
            groupRow.push(singleRow)
            rowCount++; 
        }
        var tea = {
            ID: item.ID,
            name: item.name,
            description: item.description,
            price: item.price,
            amount: item.amount, 
            image: item.image, 
            ratingAvg: item.ratingAvg,
            ratingCount: item.ratingCount, 
        }

        groupRow[rowCount].push(tea)
        count++; 
        if (count === 3) {
            count = 0; 
        }

    })

    return groupRow.map(arr => <RenderRow rowItems={arr} key={uuid()} />); 
}

export default RenderCollection; 