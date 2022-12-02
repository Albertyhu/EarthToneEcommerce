import { getDocs, collection, query } from 'firebase/firestore'; 
import { db } from '../initializeFirebase.js'; 

export const LoadProducts = async setData => {
    var arr = []; 
    const q = query(collection(db, "products")); 
    const querySnapshot = await getDocs(q); 
    querySnapshot.forEach(doc => {
        arr.push(doc.data())
    });
    setData([...arr])
}