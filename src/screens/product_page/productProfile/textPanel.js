
import {
    TextPanel,
    TextBlock,
    ProductTitle,
    PriceBlock,
    SalesPrice,
    ItemDimTitle,
    DetailTable,
    TH,
    Row,
    RowLabel,
    RowData,
    InfoTable, 
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
        displayTitle = true, 
    } = props; 

    return (
        <TextPanel>
            {displayTitle && <ProductTitle>{name}</ProductTitle>}
            <PriceBlock><b>Price:</b><SalesPrice> ${price.toFixed(2)}</SalesPrice></PriceBlock>
            <InfoTable>
                <Row><RowLabel>Rating: </RowLabel><RowData><RenderRatings rating={ratingAvg} /><span>{ratingCount} vote(s) </span></RowData></Row>
                <Row><RowLabel>Weight:</RowLabel><RowData>{weight}</RowData></Row>
                <Row><RowLabel><ItemDimTitle>Item Dimenions</ItemDimTitle></RowLabel><RowData>{length} x {width} x {height} in. <i>(L x W x H)</i></RowData></Row>
            </InfoTable>
            <h3>About this product</h3>
            <TextBlock>{description}</TextBlock>
        </TextPanel>
    )
}

export default RenderTextPanel; 