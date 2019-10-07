import React from 'react'; 
import StripeCheckout from 'react-stripe-checkout'; 

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100; 
    const publishablekey = "pk_test_nOUqrl0IsR6AMIv4ctjjG1SN00cLLsjiyk";

    const onToken = token =>{
        console.log(token); 
        alert('Payment Succesful')
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton; 