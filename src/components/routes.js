import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../screens/home_page';
import ProductPage from '../screens/product_page';
import '../style/myStyle.css'
import { MyContext } from '../context/contextItem.js';
import SignIn from '../screens/nonMember/signIn.js';
import SignUp from '../screens/nonMember/signUp.js';
import AccountPage from '../screens/account/accountPage.js';
import ProductProfilePage from '../screens/product_page/productProfile/productProfile.js';
import RenderCheckOut from '../screens/checkout/checkoutPage.js';
import RenderWishList from '../screens/wishlist/wishlist.js';
import RenderCartPage from '../screens/cart/renderCartPage.js';
import OrderPage from '../screens/order';
import OrderCompletePage from '../screens/order/orderComplete.js';
import PrivacyPolicy from '../screens/policy_statement/privacy_policy.js';
import RefundPolicy from '../screens/policy_statement/refund_policy.js';
import TermsAndConditions from '../screens/policy_statement/termsAndCondition.js';
import ProductReviewPage from '../screens/productReview/productReviewPage.js';
import ReturnProductPage from '../screens/productReturn/returnProdPage.js';
import PostReturnRequest from '../screens/productReturn/postReturnRequest.js';
import AboutUsPage from '../screens/aboutUs/AboutUs.js';
import CareerPage from '../screens/career';
import PostSubmissionPage from '../screens/career/PostSubmissionPage.js';
import RenderSiteMap from '../screens/sitemap';
import ContactUsPage from '../screens/contact';
import FeaturedProducts from '../components/featuredProducts/FeaturedProducts.js';
import SectionTwo from '../screens/home_page/SectionTwo';
import Footer from '../base_elements/footer'; 

import RenderLoadingPage from '../screens/loadingPage/loadingPage.js';

function RenderRoute() {

    const{
        cart,
        //data of current user 
        data,
        loading,
        openPanel,
        hamburgerPanel,
        accountPanel,
        addProductMessage,
        wishlist, 
    } = useContext(MyContext)

    const options = {
        // passing the client secret obtained from the server
        clientSecret: '{{CLIENT_SECRET}}',
    };

    if (loading) {
        return (<RenderLoadingPage />)
    }

    return (
        <BrowserRouter>
            <div className = "RouteWrapper">
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
            </div>
            <Footer />
        </BrowserRouter>

    );
}

export default RenderRoute;
