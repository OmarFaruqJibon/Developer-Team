import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    for(const member of cart){
        total = total + member.salary;
    }

    const devName = cart.map((names) => <li
            key={names.key}
            >{names.name}</li>);
    return (
        <div className="cart-container">
            <h4>Member Hired: {cart.length}</h4>
            <p>Total Cost: $ {total}</p>
            <p className="cart-pro-names">{devName}</p>
        </div>
    );
};

export default Cart;