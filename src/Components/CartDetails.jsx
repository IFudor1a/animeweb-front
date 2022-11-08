import React from 'react';
import '../Styles/CartDetails.css';

const CartDetails = () => {
    return (
        <div className='CartDetails'>
            <h3>CHECKOUT</h3>
            <p>TOTAL: 500 USD</p>
            <button className='Purchase'>CHECKOUT</button>

        </div>
    );
};

export default CartDetails;