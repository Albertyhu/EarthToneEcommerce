import React, { useState, useRef, useEffect} from 'react';  
import './style/myStyle.css'
import { MyContext } from './context/contextItem.js'; 
import { SampleReviews, SampleAddress } from './test/sampleData.js';
import RenderRoutes from './components/routes.js'
//firebase code 
import { db } from './services/firebase/initializeFirebase.js';
import { PostFirebase, GetFirebase } from './services/firebase/firebaseCRUD.js'; 
import { getAuth, onAuthStateChanged } from 'firebase/auth'; 
import { doc, getDoc } from "firebase/firestore";

//stripe
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import RenderLoadingPage from './screens/loadingPage/loadingPage.js';

const auth = getAuth(); 
const currentUser = () => auth.currentUser;

const stripePromise = loadStripe(`${process.env.REACT_APP_PUBLISHABLE_KEY}`);

function App() {

    //items in cart and wishlist are initiatlly retrieved from the Firebase database
    const [cart, setCart] = useState([])
    const [wishlist, setWish] = useState([]); 
    const [ProductCollection, setProductCollection] = useState(null)
    const [openPanel, setOpenPanel] = useState(false);
    //for users with small mobile devices 
    const [hamburgerPanel, setHamburgerPanel] = useState(false); 
    const [accountPanel, setAccountPanel] = useState(false); 
    const [addProductMessage, setAddProductMessage] = useState(false); 
    const [message, setMessage] = useState([]);  
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); 

    //The useState object data controls whether or not the user is logged in or not. 
    const [data, setData] = useState(null); 

    const [pendingOrders, setPendingOrders] = useState([]); 

    //For storing reviews of each of the products 
    const [productRevCol, setProductRev] = useState(SampleReviews)

    //This is for storing the user's shipping information. The information initialized here is just the sample. 
    const [shipping, setShipping] = useState(SampleAddress)
    const [billingAddress, setBillingAdd] = useState(SampleAddress)
    const ref = useRef();
    const hamburgerRef = useRef()
    const messageRef = useRef() 
    const accountPanelRef = useRef()

    //Code for determining whether the site should be displayed on desktop view or not 
    const [desktopView, setDesktopView] = useState(window.innerWidth > 852 ? true : false);

    const handleResize = () => {
        if (window.innerWidth <= 852)
            setDesktopView(false);
        else
            setDesktopView(true);
    }

    window.addEventListener('resize', handleResize)

    const context = {
        addProduct: (productID, additionalStock, ProductPrice) => {
            var newArr = [...cart];
            var obj = newArr.find(item => item.ID === productID)
            if (obj) {
                //add stock to existing product in cart
                var ind = newArr.indexOf(obj)
                newArr[ind].stock += additionalStock;
            }
            else {
                //add new item to cart array
                const newItem = {
                    ID: productID,
                    stock: additionalStock,
                    price: ProductPrice,
                }
                newArr.push(newItem)
            }
            setCart([...newArr])
            PostFirebase("cart", newArr)
        },
        removeFromCart: (productID) => {
            var arr = cart.filter(val => val.ID !== productID);
            setCart(arr);

        },
        clearCart: () => {
            setCart([]); 
        },
        updateCart: (newCart) => { setCart(newCart) },
        updateProductStockInCart: (productID, newStock) => {
            var arr = null; 
            if (newStock !== 0) {
                arr = cart; 
                arr.forEach(val => {
                    if (val.ID === productID) {
                        val.stock = newStock; 
                    }
                })
            }
            else {
                arr = cart.filter(val => val.ID !== productID)
            }
            setCart(arr); 
        },
        cart, 
        getCart: () => { return cart },
        toggleCartPanel: () => {
            setOpenPanel(!openPanel); 
        },
        openCartPanel: () => {
            setOpenPanel(true); 
        }, 
        closeCartPanel: () => {
            setOpenPanel(false);
        },
        openHamburgerPanel: () => {
            setHamburgerPanel(true)
        },
        closeHamburgerPanel: () => {
            setHamburgerPanel(false)
        },
        toggleHamburgerPanel: () => {
            setHamburgerPanel(!hamburgerPanel)
        },
        openAddProductMessage: () => {
            setAddProductMessage(true)
        },
        closeAddProductMessage: () => {
            setAddProductMessage(false)
           
        },
        //for closing Cart Panel when clicking outside it 
        getRef: () => { return ref; },
        getMessageRef: () => { return messageRef; },
        getHamburgerRef: () => { return hamburgerRef; },
        calculateTotalCost: () => {
            var total = 0; 
            cart.forEach(item => {
                total += (item.price * item.stock)
            })
            return total; 
        },
        calculateTotalItems: () => {
            var total = 0; 
            cart.forEach(item => {
                total += item.stock; 
            })
            return total; 
        },

        //code for user authentication 
        //sets the current user 
        setCurrentUser: (currentUser) => { setUser(currentUser) },
        getCurrentUser: () => { return user },

        //code for account panel
        getAccountPanelRef: () => { return accountPanelRef }, 
        closeAccountPanel: () => { setAccountPanel(false) }, 
        openAccountPanel: () => {
            setAccountPanel(true)
        }, 
        getProductCollection: () => { return ProductCollection },
        getWish: () => { return wishlist },
        addWish: (productID) => {
            var arr = wishlist; 
            arr.push(productID)
            setWish(arr)
            PostFirebase("wishlist", arr)
        },
        removeWish: (productID) => {
            var arr = wishlist.filter(val => val !== productID);
            setWish(arr)
            PostFirebase("wishlist", arr)
        }, 
        getShippingAdd: () => { return shipping },
        setShippingAdd: (address) => {
            setShipping(address)
        }, 
        getBillingAdd: () => { return billingAddress },
        setBillingAdd: (address) => {
            setBillingAdd(address)
        },
        setNewOrder: (ord) => {
            var arr = pendingOrders; 
            arr.push(ord); 
            setPendingOrders(arr); 
        }, 
        getOrders: () => pendingOrders, 
        getNumberOfOrders: ()=> pendingOrders.length, 
        deleteOrder: (ID) => {
            var arr = pendingOrders.filter(val => val.orderID === ID); 
            setPendingOrders(arr); 
        }, 
        addProductReview: (productID, Rating, ProductReview) => {
            const arr = productRevCol; 

            const obj = {
                ID: productID, 
                rating: Rating, 
                review: ProductReview, 
            }

            arr.push(obj);
            setProductRev(arr); 
        },
        getProductReviewCol: () => productRevCol, 
        desktopView, 
        user, 
        //data of current user 
        data,
        loading, 
        setLoading, 
        openPanel,
        hamburgerPanel,
        accountPanel, 
        addProductMessage, 
        wishlist, 
        message, 
        setMessage, 
        //apiURL: process.env.REACT_APP_DEV_SERVER_URL, 
        apiURL: process.env.REACT_APP_PROD_SERVER_URL,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setLoading(true)
            if (user) {
                const docRef = doc(db, "users", user.uid)
                const docSnap = await getDoc(docRef)
                    .then(result => {
                        if (result.exists()) {
                            setData(result.data());
                            GetFirebase("cart", setCart)
                            GetFirebase("wishlist", setWish)
                        }
                    })
                    .catch(e => console.log("Error with initialization: " + e))
            }
            else {
                setData(null)
            }
            setLoading(false);
        })
        return () => {
            window.removeEventListener('resize', handleResize)
            unsubscribe();
        }
    }, [])

    if (loading) {
        return(<RenderLoadingPage />)
    }

    return (
      <Elements stripe={stripePromise}>
      <MyContext.Provider value = {context}>
          <RenderRoutes />
      </MyContext.Provider>
      </Elements>
     );
}

export default App;
