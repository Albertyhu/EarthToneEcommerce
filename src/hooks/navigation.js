const NavigationHooks = (navigate) => {
    const goHome = (message) => {
        navigate("../tea-eCommerce-shop", {
            state: {
                message: message ? message : null,
            } 
        })
    }

    const GoWriteNewProductReview = (productID, productName) => {
        navigate(`/review_product/${productName}/${productID}`, {
            state: {
                productID, 
                productName, 
            }
        })
    }


    return {
        goHome,
        GoWriteNewProductReview,
    } 
}

export { NavigationHooks } 