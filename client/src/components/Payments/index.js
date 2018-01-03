import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

// eslint-disable-next-line
class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Send Mail Eeasy"
        description="Get 5 credits for 5$"
        amount={500}
        // eslint-disable-next-line
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
      >
        <button className="btn">Add credits</button>
      </StripeCheckout>
    );
  }
}

export default Payments;
