import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
        const priceForStripe = price * 100;
        const publishableKey = 'pk_test_51KacPBLI5IF6fJDmBSCfJ0vGIkgeSZ3cVW3vsumhwtjfHihGI8fe6peI6SximMth8y8wV4XRkMBn2VvGeKjpKf3h00z0Hgf33n';

        const onToken = token => {
            console.log(token);
            alert('Payment Succesful');
        }

        return (
            <StripeCheckout
                label='Pay Now'
                name='CRWN Clothing Ltd.'
                billingAddress
                shippingAddress
                image='https://svgshare.com/i/CUz.svg'
                description={`Your total is ${price}`}
                amount={priceForStripe}
                token={ onToken }
                stripeKey={publishableKey}
             />   

        )

}


export default StripeCheckoutButton; 