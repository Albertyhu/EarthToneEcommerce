
import {
    TextPanel,
    TextBlock,
    ProductTitle,
    PriceBlock,
    SalesPrice,
    ItemDimTitle,
    DetailTable,
    TH,
} from './profileStyledComp.js'; 
import RenderRatings from '../../../components/rating/renderRatings.js'; 

const RenderTextPanel = props => {
    const { name,
        description,
        price,
        amount,
        weight,
        width,
        length,
        height, 
        ratingAvg, 
        ratingCount,

    } = props; 

    return (
        <TextPanel>
            <ProductTitle>{name}</ProductTitle>
            <PriceBlock><b>Price:</b><SalesPrice> ${price.toFixed(2)}</SalesPrice></PriceBlock>
            <DetailTable>
                <tbody>
                    <tr><th>Rating: </th><td><RenderRatings rating={ratingAvg} /></td><td> {ratingCount} vote(s)</td></tr>
                    <tr><th>Weight:</th><td>{weight}</td></tr>
                    <tr><TH><ItemDimTitle>Item Dimenions</ItemDimTitle><br /><ItemDimTitle> LxWxH </ItemDimTitle></TH><td>{length} x {width} x {height} in.</td></tr>
                </tbody>
            </DetailTable>
            <h3>About this product</h3>
            <TextBlock>{description}</TextBlock>
        </TextPanel>
        )

}

export default RenderTextPanel; 