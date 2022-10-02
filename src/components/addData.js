import {TeaData} from './teaData.js';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase/initializeFirebase.js';
import { getAuth } from 'firebase/auth'; 
import { genKey } from './randGen.js'; 

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