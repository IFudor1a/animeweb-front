import React, {useState} from 'react';
import '../Styles/CartItem.css';
const CartItem = () => {
    const [count, setCount] = useState(1);
    return (
        <div className='CartItem'>
            <img src={'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040'}/>
            <div className='CartItem_Description'>
            <div className='desc'>
                <div className='desc_title'>ItemItemItemItemIt emItemItemItemItemI temItemItemI temItemItemItem</div>
            <div className='desc_description'>Description</div>
            <div className='desc_price'>500$</div>
            </div>

            <div className='options'>
                <div className='counter'>
                    <button className='left_button' onClick={e => setCount(count - 1)}>-</button>
                    <input type='number' value={count} onChange={(e) => setCount(Number(e.target.value))}/>
                    <button className='right_button' onClick={e => setCount(count + 1)}>+</button>
                </div>
                <a href='#'>Remove</a>
            </div>
            </div>

        </div>
    );
};

export default CartItem;