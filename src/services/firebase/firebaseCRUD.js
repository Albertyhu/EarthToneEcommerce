import { getAuth } from 'firebase/auth';
import {
    doc,
    setDoc,
    getDoc,
    writeBatch,
    serverTimestamp,
    updateDoc,
    deleteDoc,
    query, 
    collection, 
    where, 
    getDocs, 
} from 'firebase/firestore';
import { db } from './initializeFirebase.js'; 
import { genKey } from './hooks/randGen.js'; 
import PropTypes from 'prop-types'; 

const auth = getAuth(); 

//handles adding items to cart, wishlist into Firestore
export const PostFirebase = async (type, dataItem ) => {
    const ref = doc(db, type, auth.currentUser.uid)
    await setDoc(ref, {
        data: dataItem, 
    })
    .catch(e => console.log(e))
}

PostFirebase.propTypes = {
    type: PropTypes.string, 
    dataItem: PropTypes.dataItem
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

//Saves multiple, new 'order' documents to firebase
export const PostNewOrders = async (orders, shippingAdd, billingAdd) => {
    try {
        const batch = writeBatch(db);
        orders.forEach(product => {
            const ID = genKey(20); 
            const docRef = doc(db, 'orders', ID)
            batch.set(docRef, {
                customderId: auth.currentUser.uid, 
                shippingAddress: shippingAdd,
                billingAddress: billingAdd, 
                email: auth.currentUser.email, 
                name: product.name,
                description: product.description ? product.description : "",
                price: product.price,
                quantity: product.quantity,
                SKU: product.SKU, 
                dateCreated: serverTimestamp(),
                orderStatus: "pending", 
                additionalRequirements: "", 
            })
        })
        await batch.commit();
        console.log("Orders are successfully added.")
    } catch (e) {
        console.log("PostNewOrders error: ", e.message)
    }
}

//Used to update a cart or wishlist document
export const EditList = async (type, newList) => {
    try {
        const docRef = doc(db, type, auth.currentUser.uid);
        await updateDoc(docRef, {
            data: newList, 
        });
        console.log('Document successfully updated');
    } catch (e) {
        console.error('EditList Error :', e.message);
    }
}

EditList.propTypes = {
    type: PropTypes.string,
    newList: PropTypes.array, 
}


//Used to delete a cart or wishlist document
export const ClearFirebaseList = async (type) => {
    try {
        if (type && type !== "") {
            const docRef = doc(db, type, auth.currentUser.uid);
            await deleteDoc(docRef);
            console.log('Document successfully deleted');
        }
        else {
            console.log("ClearFirebaseList: type of operation is not specified")
        }
    } catch (e) {
        console.error('ClearFirebaseList Error:', e.message);
    }
}

ClearFirebaseList.propTypes = {
    type: PropTypes.string, 
}

export const PostNewReview = async (userData, reviewObj) => {
    const {
        ID,
        rating,
        review, 
    } = reviewObj
    const reviewId = genKey(20); 
    const docRef = doc(db, 'reviews', reviewId)
    try {
        const name = auth.currentUser.displayName ? auth.currentUser.displayName : `${userData.first_name} ${userData.last_name}`;
        await setDoc(docRef, {
            productId: ID,
            rating,
            review,
            authorId: auth.currentUser.uid,
            author: name,
        })
    } catch (e) {
        console.error('PostNewReview Error:', e.message);
    }
}


export const getReviewsByProductId = async (productId, dispatch) => {
    console.log("productId: ", productId)

    try {
        const reviewsQuery = query(
            collection(db, 'reviews'), where("productId", "==", productId)
        ); 
        const querySnapshot = await getDocs(reviewsQuery); 
        const reviewsData = [] 
        querySnapshot.forEach(doc => {
            reviewsData.push(doc.data())
        })
        dispatch(reviewsData); 
    } catch (e) {
        console.error('Error retrieving reviews:', e);
    }
} 