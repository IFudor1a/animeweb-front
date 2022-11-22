import React, {useState} from 'react';
import '../Styles/ProductForm.css'

const sizes = [{id: 1, size: 'XS'}, {id: 2, size: 'S'}, {id: 3, size: 'M'}, {id: 4, size: 'L'}, {
    id: 5,
    size: 'XL'
}, {id: 6, size: '2XL'}, {id: 7, size: '3XL'},]
const ProductForm = ({product}) => {
    const [count, setCount] = useState(1);
    const handleClick = (e) => {
        e.preventDefault();
        let current = document.querySelector('.active');
        if(current) current.className = 'Size';
        e.currentTarget.className = 'active';
    }
    return (
        <div className='ProductForm'>
            <h3>{product.unit_price} ₸</h3>
            <span>Тонкая. Легкая. Белая.</span>
            <p>{product.description}</p>
            <span>Ткань сорта пенье</span>
            <span>{product.product_consists}</span>
            <div className='title'>Выберите размер:</div>
            <div className='Sizes'>
                {sizes.map(size => (
                    <button type='button' key={size.id} className='Size' onClick={(e) => handleClick(e)}>{size.size}</button>
                ))}
            </div>
            <div className='title'>Количество:</div>
            <div className='details'>

                <div className='counter'>
                    <button className='left_button' onClick={e => setCount(count - 1)}>-</button>
                    <input type='number' value={count} onChange={(e) => setCount(Number(e.target.value))}/>
                    <button className='right_button' onClick={e => setCount(count + 1)}>+</button>
                </div>
                <button className='Purchase'>Добавить в корзину</button>
            </div>
        </div>
    );
};

export default ProductForm;