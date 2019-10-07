import React from 'react'; 
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'; 

import CheckoutItem from "../../components/checkout-item/checkout-item.component"; 
import StripeButton from "../../components/stripe-button/stripe-button.component"; 

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'; 

import './checkout.styles.scss'; 
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
      <div className="header-block">
        <span></span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    <StripeCheckoutButton price={total} />
    <div className="test-warning">
      <h1 style={{ color: "red" }}>
        *Please use the following test card for payments*
      </h1>
      <h2>
        {" "}
        4242 4242 4242 4242 - exp 01/20 - cw:123
      </h2>
    </div>
  </div>
);

const mapStateToProps =createStructuredSelector({
  cartItems:selectCartItems, 
  total:selectCartTotal
}); 

export default connect(mapStateToProps)(CheckoutPage); 