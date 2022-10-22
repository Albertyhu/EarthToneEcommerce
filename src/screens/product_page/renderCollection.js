import { TeaData } from '../../components/teaData.js'; 
import RenderRow from './renderRow.js'; 
import uuid from 'react-uuid'
import RenderProduct from './renderProduct.js'; 
import styled from 'styled-components'; 

const RenderCollection = props => {
    //props.arrlength carries the length of the array that has all the tea data
    var count = props.arrlength; 
    var ProductCollection = [...TeaData]; 
  
//    return groupRow.map(arr => <RenderRow rowItems={arr} key={uuid()} />); 
    return (
        <MainSection id="ProductCollectionMainSection">
            {ProductCollection.map(item => <RenderProduct key={uuid()} {...item} />)}
        </MainSection>
        )
}

export default RenderCollection; 

const MainSection = styled.div`
    height: fit-content;
    width: 75%;
    display: grid;
    margin: 20px auto 40px auto; 
    grid-template-columns: repeat(${props => props.Repeat || "3"}, 1fr);
    gap: 20px;
    text-align: center; 
    justify-content: center; 
    @media screen and (max-width: 540px){
        display: block;
}
`
