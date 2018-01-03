import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../../actions';

// eslint-disable-next-line
class Payments extends Component {
  static propTypes = {
    handleToken: PropTypes.func.isRequired,
  };

  render() {
    return (
      <StripeCheckout
        name="Send Mail Eeasy"
        description="Get 5 credits for 5$"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
      >
        <button className="btn">Add credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
