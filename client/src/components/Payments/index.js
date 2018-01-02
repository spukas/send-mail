import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

// eslint-disable-next-line
class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        amount={500}
        // eslint-disable-next-line
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
      />
    );
  }
}

export default Payments;
