import React from 'react';
import CartList from "../Components/CartList/CartList";
import CartDetails from "../Components/CartDetails/CartDetails";

const BasketPage = () => {
    return (
        <div className='Cart'>
            <h3 style={{textAlign: "center", margin: 50, letterSpacing: 2, fontSize: 24, fontWeight: 700 }}>My Cart</h3>
            <div style={{display:"flex", width: 1200, margin: "50px auto"}} >
                <CartList/>
                <CartDetails/>
            </div>
        </div>
    );
}

export default BasketPage;