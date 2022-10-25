import { getAuth } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './initializeFirebase.js'; 
import uuid from 'react-uuid'
const auth = getAuth(); 

//handles adding items to cart, wishlist or orders into Firestore
export const PostFirebase = async (database, dataItem ) => {
    const ref = doc(db, database, auth.currentUser.uid)
    await setDoc(ref, {
        data: dataItem, 
    })
    .catch(e => console.log(e))
}

export const GetFirebase = async (database, dispatch) => {
    const ref = doc(db, database, auth.currentUser.uid)
    const docSnap = await getDoc(ref)
        .catch(e => console.log(e))
    if (docSnap.exists()) {
       // console.log("cart", docSnap.data().cart)
        dispatch(docSnap.data().data)
    } else {
        console.log("No such document.")
    }
}