import React, { useState, useRef, useEffect} from 'react'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/home_page';
import ProductPage from './screens/product_page'; 
import './style/myStyle.css'
import { MyContext } from './context/contextItem.js'; 
import SignIn from './screens/nonMember/signIn.js';
import SignUp from './screens/nonMember/signUp.js'; 
import AccountPage from './screens/account/accountPage.js';
import ProductProfilePage from './screens/product_page/productProfile/productProfile.js'; 
import RenderCheckOut from './screens/checkout/checkoutPage.js'; 
import RenderWishList from './screens/wishlist/wishlist.js';
import RenderCartPage from './screens/cart/renderCartPage.js'; 
import OrderPage from './screens/order'; 
import OrderCompletePage from './screens/order/orderComplete.js'; 
import PrivacyPolicy from './screens/policy_statement/privacy_policy.js'; 
import RefundPolicy from './screens/policy_statement/refund_policy.js'; 
import TermsAndConditions from './screens/policy_statement/termsAndCondition.js'; 
import ProductReviewPage from './screens/productReview/productReviewPage.js'; 
import ReturnProductPage from './screens/productReturn/returnProdPage.js'; 
import PostReturnRequest from './screens/productReturn/postReturnRequest.js'; 
import AboutUsPage from './screens/aboutUs/AboutUs.js'; 
import CareerPage from './screens/career'; 
import PostSubmissionPage from './screens/career/PostSubmissionPage.js';
import RenderSiteMap from './screens/sitemap'; 
import ContactUsPage from './screens/contact'; 
import FeaturedProducts from './components/featuredProducts/FeaturedProducts.js'; 
import SectionTwo from './screens/home_page/SectionTwo';
import { SampleReviews, SampleAddress } from './test/sampleData.js';

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
const currentUser = auth.currentUser;

const stripePromise = loadStripe(`${process.env.REACT_APP_PUBLISHABLE_KEY}`);

function App() {

    const [cart, setCart] = useState([])
    const [wishlist, setWish] = useState([]); 
    const [ProductCollection, setProductCollection] = useState(null)
    const [openPanel, setOpenPanel] = useState(false);
    //for users with small mobile devices 
    const [hamburgerPanel, setHamburgerPanel] = useState(false); 
    const [accountPanel, setAccountPanel] = useState(false); 
    const [addProductMessage, setAddProductMessage] = useState(false); 
    const [user, setUser] = useState(currentUser);
    const [loading, setLoading] = useState(true); 
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
    const [desktopView, setDesktopView] = useState(window.innerWidth > 770 ? true : false);

    const handleResize = () => {
        if (window.innerWidth <= 770)
            setDesktopView(false);
        else
            setDesktopView(true);
    }

    window.addEventListener('resize', handleResize)

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
        //data of current user 
        data,
    }

    const options = {
        // passing the client secret obtained from the server
        clientSecret: '{{CLIENT_SECRET}}',
    };

    if (loading) {
        return(<RenderLoadingPage />)
    }

    return (
      <Elements stripe={stripePromise}>
      <MyContext.Provider value = {context}>
      <div className="App" id="rootContainer" >
          <BrowserRouter>
              <Routes>
                <Route
                    path="/"
                    element={<Home
                        openPanel={openPanel}
                        openHamburger={hamburgerPanel}
                        accountPanel={accountPanel}
                    />}
                /> 
                <Route
                    path="/product_page"
                    element={<ProductPage
                        openPanel={openPanel}
                        addProductMessage={addProductMessage}
                        openHamburger={hamburgerPanel}
                        accountPanel={accountPanel}
                    />} />
                <Route
                    path='/sign_in'
                    element={<SignIn
                        openPanel={openPanel}
                        openHamburger={hamburgerPanel}
                        accountPanel={accountPanel}
                    />}
                />
                <Route
                    path='/sign_up'
                    element={<SignUp
                        openPanel={openPanel}
                        openHamburger={hamburgerPanel}
                        accountPanel={accountPanel}
                    />}
                />
                <Route
                    path='/acount_page'
                    element={<AccountPage
                        openPanel={openPanel}
                        openHamburger={hamburgerPanel}
                        accountPanel={accountPanel}
                    />}
                        />
                    <Route
                        path='/product_profile'
                        element={<ProductProfilePage
                            openPanel={openPanel}
                            openHamburger={hamburgerPanel}
                            accountPanel={accountPanel}
                            addProductMessage={addProductMessage}
                        />}
                        />
                    <Route
                        path='/checkout'
                            element={<RenderCheckOut
                                cart={cart}
                                openPanel={openPanel}
                                openHamburger={hamburgerPanel}
                                accountPanel={accountPanel}
                                addProductMessage={addProductMessage}
                        />}
                        />
                        <Route
                            path='/wishlist'
                            element={<RenderWishList
                                cart={cart}
                                openPanel={openPanel}
                                openHamburger={hamburgerPanel}
                                accountPanel={accountPanel}
                                addProductMessage={addProductMessage}
                                wishlist={wishlist}
                            />}
                        />
                        <Route
                            path='/cart'
                            element={<RenderCartPage
                                cart={cart}
                                openPanel={openPanel}
                                openHamburger={hamburgerPanel}
                                accountPanel={accountPanel}
                                addProductMessage={addProductMessage}
                            />}
                        />
                        <Route
                            path='/orders'
                            element={<OrderPage
                                cart={cart}
                                openPanel={openPanel}
                                openHamburger={hamburgerPanel}
                                accountPanel={accountPanel}
                                addProductMessage={addProductMessage}
                            />}
                        />
                    <Route
                        path='/privacy_policy'
                        element={<PrivacyPolicy
                            openPanel={openPanel}
                            openHamburger={hamburgerPanel}
                            accountPanel={accountPanel}
                        />}
                        />
                    <Route
                        path='/order_summary'
                        element={<OrderCompletePage
                            openPanel={openPanel}
                            openHamburger={hamburgerPanel}
                            accountPanel={accountPanel}
                        />}
                            />
                    <Route
                        path='/review_product'
                            element={<ProductReviewPage
                            openPanel={openPanel}
                            openHamburger={hamburgerPanel}
                            accountPanel={accountPanel}
                            addProductMessage={addProductMessage}

                        />}
                            />
                    <Route
                        path='/return_product'
                            element={<ReturnProductPage
                            openPanel={openPanel}
                            openHamburger={hamburgerPanel}
                            accountPanel={accountPanel}
                            addProductMessage={addProductMessage}

                        />}
                            />
                    <Route
                        path='/Return_request_received'
                            element={<PostReturnRequest
                            openPanel={openPanel}
                            openHamburger={hamburgerPanel}
                            accountPanel={accountPanel}
                        />}
                            />
                    <Route
                        path='/About_Us'
                        element={<AboutUsPage
                            openPanel={openPanel}
                            openHamburger={hamburgerPanel}
                            accountPanel={accountPanel}
                        />}
                            />
                    <Route
                        path='/career'
                        element={<CareerPage
                            openPanel={openPanel}
                            openHamburger={hamburgerPanel}
                            accountPanel={accountPanel}
                        />}
                    />
                    <Route
                        path='/sitemap'
                        element={<RenderSiteMap
                            openPanel={openPanel}
                            openHamburger={hamburgerPanel}
                            accountPanel={accountPanel}
                        />}
                            />
                    <Route
                        path='/return_and_refund_policy'
                        element={<RefundPolicy
                            openPanel={openPanel}
                            openHamburger={hamburgerPanel}
                            accountPanel={accountPanel}
                        />}
                    />
                    <Route
                        path='/terms_and_condition'
                                element={<TermsAndConditions
                            openPanel={openPanel}
                            openHamburger={hamburgerPanel}
                            accountPanel={accountPanel}
                        />}
                            />
                        <Route
                            path='/resume_submitted'
                            element={<PostSubmissionPage
                                openPanel={openPanel}
                                openHamburger={hamburgerPanel}
                                accountPanel={accountPanel}
                            />}
                        />
                        <Route
                            path='/contact_us'
                            element={<ContactUsPage
                                openPanel={openPanel}
                                openHamburger={hamburgerPanel}
                                accountPanel={accountPanel}
                            />}
                            />
                            <Route
                                path='/featured_products'
                                element={
                                    <FeaturedProducts />
                                }
                            />
                            <Route
                                path='/section2'
                                element={
                                    <SectionTwo />
                                }
                            />
                        </Routes>
          </BrowserRouter>    
          </div>
    </MyContext.Provider>
    </Elements>
  );
}

export default App;
