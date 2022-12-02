import {TeaData} from './teaData.js';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../initializeFirebase.js';
import { genKey } from './randGen.js'; 

//This function is for development purposes and not to be used for the live version
//It conveniently adds products to firebase 
export function AddData() {
    TeaData.map(async (tea) => {
        var productID = genKey(20); 
        await setDoc(doc(db, "products", productID), {
            id: productID,
            name: tea.name, 
            description: tea.description,
            price: tea.price, 
            amount: tea.amount, 
            image: tea.image, 
        })
        .catch((error) => {
            alert(error.code + ": " + error.message);
        })
    })
}