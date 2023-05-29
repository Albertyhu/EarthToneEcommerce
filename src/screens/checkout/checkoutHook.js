import { ProductCollection } from '../../data/ProductCollection.js'; 

export const PaymentHook = (apiURL, setMessage, setLoading, setNewOrder, goOrderCompletePage, clearCart) => {
    const handleSubmit = async (order, customer, setDisabled) => {
        const body = {
            order,
            customer
        };
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.REACT_APP_STRIPE_SK}`
        };
        const FetchURL = `${apiURL}/create_payment`
        setLoading(true); 
        setDisabled(true)
        await fetch(
            FetchURL,
            {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body),
            }
        ).then(async response => {
            if (response.ok) {
                const formattedOrder = order.filter(val => val.name !== "shippping")
                setNewOrder(formattedOrder)
                setLoading(false)
                clearCart(); 
                console.log("success")
                goOrderCompletePage();

            }
            else {
                const result = await response.json();
                console.log(result.error);
                setLoading(false); 
                setMessage([{ msg: `There was an error in the order: ${result.error}`}])
            }
            setDisabled(false)
        })
    };

    return {
        handleSubmit
    }
}

export const ValidateAddress = (data, type) => {
    var isValid = true;
    var errMessage = `Please, correct the following issues in your ${type} address. \n `;
    if (data.address1 === "") {
        errMessage += "Please, write your address on Address Line 1.";
        isValid = false;
    }
    if (data.city === "") {
        errMessage += "Please, write down your city.";
        isValid = false;
    }
    if (data.zipcode === "") {
        errMessage += "Please, write down your zipcode";
        isValid = false;
    }
    return { isValid, errMessage }; 
}

//This is for sending data to Stripe 
export const CreateOrderObj = (cart, totalCost) => {
    var orderObj = cart.map(item => { 
        var product = ProductCollection.find(val => val.ID === item.ID)
        return {
            name: product.name, 
            description: product.description,
            price: product.price,
            quantity: item.stock, 
            SKU: product.SKU, 
            dateCreated: new Date(), 
        } 
    })
    if (totalCost <= 50) {
        var shippingCost = {
            name: "shipping",
            description: "Shipping cost",
            price: 15,
            quantity: 1, 
        }
        orderObj.push(shippingCost); 
    }

    return orderObj; 
}