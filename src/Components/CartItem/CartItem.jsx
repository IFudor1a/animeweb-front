import React, {useState} from 'react';
import './CartItem.css';
const CartItem = () => {
    const [count, setCount] = useState(1);
    return (
        <div className='CartItem'>
            <img src={'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040'}/>
            <h3>Item</h3>
            <div className='options'>
                <div className='counter'>
                    <button className='left_button' onClick={e => setCount(count - 1)}>-</button>
                    <input type='number' value={count} onChange={(e) => setCount(Number(e.target.value))}/>
                    <button className='right_button' onClick={e => setCount(count + 1)}>+</button>
                </div>
                <a href='#'>Remove</a>
            </div>


        </div>
    );
};

export default CartItem;