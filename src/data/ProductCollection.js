import { teaArray } from '../images/teaImages.js';

const importCol = (col) => {
    return col.keys().map(col); 
}

//cannot use this because the bundler needs to the pathway of all files ahead of time before the app is rendered
const createCol = (name) => {
    return importCol(require.context(`../images/tea/${name}/`, false, /\.(png|jpe?g|svg)$/))
    
}

export const ProductCollection = [
    {
        ID: 0,
        name: "Black Tea Leaves",
        description: "Strong dark tea that rivals the caffeine content of coffee",
        price: 5.25,
        amount: 48,
        image: teaArray[0],
        imageArray: importCol(require.context('../images/tea/black_tea/', false, /\.(png|jpe?g|svg)$/)), 
        weight: "48 oz",
        width: 4, 
        length: 3, 
        height: 10,
        shippingDays: 3, 
        returnExpDays: 30, 
        ratingAvg: 4.3, 
        ratingCount: 653,
        SKU: "BTL48OZBLACKORGANI", 
    },
    {
        ID: 1,
        name: "Gingseng Herb",
        description: "Since ancient times, Ginseng tea has been renown for strengthening the immune system and to help fight off stress and disease.",
        price: 15.99,
        amount: 48,
        image: teaArray[1],
        imageArray: importCol(require.context('../images/tea/ginseng_tea/', false, /\.(png|jpe?g|svg)$/)), 
        weight: "48 oz",
        width: 5,
        length: 3,
        height: 12, 
        shippingDays: 3, 
        returnExpDays: 30, 
        ratingAvg: 3.4, 
        ratingCount: 323,
        SKU: "GH48STD527"
    },
    {
        ID: 2,
        name: "Green Tea Leaves",
        description: "Imported from the remote regions of Southern China, green tea has been known to promote weight loss, blood sugar regulation, disease prevention, and exercise recovery.",
        price: 6.99,
        amount: 48,
        image: teaArray[2],
        imageArray: importCol(require.context('../images/tea/green_tea/', false, /\.(png|jpe?g|svg)$/)), 
        weight: "48 oz",
        width: 4,
        length: 3,
        height: 10, 
        shippingDays: 3, 
        returnExpDays: 30, 
        ratingAvg: 4.6, 
        ratingCount: 1751,
        SKU: "GTL48STD823"
    },
    {
        ID: 3,
        name: "Iron Buddha Tea",
        description: "Iron Buddha tea (tie guan yin) is an intensely floral Oolong tea, rolled and fired to create the classic Iron Goddess of Mercy or Goddess of Mercy flavour.",
        price: 8.99,
        amount: 48,
        image: teaArray[3],
        imageArray: importCol(require.context('../images/tea/iron_buddha_tea/', false, /\.(png|jpe?g|svg)$/)), 
        weight: "48 oz",
        width: 4,
        length: 3,
        height: 10, 
        shippingDays: 3, 
        returnExpDays: 30, 
        ratingAvg: 4.7, 
        ratingCount: 2540,
        SKU: "IBT48STD136"
    },
    {
        ID: 4,
        name: "Jasmine Green Tea",
        description: "As the most popular flower-scented tea in East Asia, Jasmine Green Tea blesses its drinkers with its unforgettable aroma.",
        price: 6.99,
        amount: 48,
        image: teaArray[4],
        imageArray: importCol(require.context('../images/tea/jasmine_tea/', false, /\.(png|jpe?g|svg)$/)), 
        weight: "48 oz",
        width: 4,
        length: 3,
        height: 10,
        shippingDays: 3, 
        returnExpDays: 30, 
        ratingAvg: 4.8, 
        ratingCount: 6411,
        SKU: "JGT48STD924"
    },
    {
        ID: 5,
        name: "Oolong Tea",
        description: "Oolong tea is a product made from the leaves, buds, and stems of the Camellia sinensis plant.",
        price: 4.99,
        amount: 48,
        image: teaArray[5],
        imageArray: importCol(require.context('../images/tea/oolong_tea/', false, /\.(png|jpe?g|svg)$/)), 
        weight: "48 oz",
        width: 4,
        length: 3,
        height: 10, 
        shippingDays: 3, 
        returnExpDays: 30, 
        ratingAvg: 3.8, 
        ratingCount: 402,
        SKU: "OT48STD437"
    },
    {
        ID: 6,
        name: "Longjing Tea",
        description: "A first flush Longjing tea picked in early spring. An exceptional quality rarely seen outside of China.",
        price: 16.95,
        amount: 60,
        image: teaArray[6],
        imageArray: importCol(require.context('../images/tea/LongjinTea/', false, /\.(png|jpe?g|svg)$/)), 
        weight: "60 oz",
        width: 4,
        length: 3,
        height: 10, 
        shippingDays: 3, 
        returnExpDays: 30, 
        ratingAvg: 3.6, 
        ratingCount: 353,
        SKU: "LJT60STD689"
    },
]