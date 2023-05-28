export const PaymentHooks = (apiURL, setMessage, GoOrderResultPage) => {
    const makePayment = async (event, product, setDisabled) => {
        event.preventDefault();
        const body = { product };
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.REACT_APP_STRIPE_SK}`
        };
        const FetchURL = `${apiURL}/create_payment`
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
                console.log("success")
                setMessage([{ msg: "Your order has been placed." }])
                setTimeout(() => GoOrderResultPage(true), 4000);
            }
            else {
                const result = await response.json();
                console.log(result.error);
                GoOrderResultPage(false)
            }
        })
    };
    return { makePayment}
}
