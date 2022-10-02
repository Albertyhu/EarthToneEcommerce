import { TeaData } from '../components/teaData.js'; 
import RenderCollection from '../screens/product_page/renderCollection.js'; 

it('Test Tea Data length', () => {
    var count = Object.keys(TeaData).length; 

    expect(count).toEqual(6);
})

jest.mock('renderProduct', () => {

})