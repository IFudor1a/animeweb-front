import React, {useState} from 'react';
import '../Styles/ProductDetails.css';
import {LeftArrow, RightArrow} from "../Materials/SVG/SVG";

const ProductDetails = ({product}) => {
    const [current, setCurrent] = useState(0);
    const slidesArray = product.product_images.split(' ').filter((el) => {
        return el !== ''
    })

    const handleClick = (direction) => {
        if (direction === 'right') {
            current < slidesArray.length - 1 ? setCurrent(current + 1) : setCurrent(0)
        } else {
            current <= 0 ? setCurrent(slidesArray.length - 1) : setCurrent(current - 1)
        }
    }

    return (
        <div className='ProductDetails'>
            {slidesArray.map((slide, _idx) => {
                if (_idx === current) return (
                    <div className='slide' key={_idx}>
                        <img src={`http://localhost:5000/${slide}`} alt={`${slide}`}/>
                    </div>)
            })}
            <div className='navigation'>
                <span className='prev-btn' onClick={() => handleClick('left')}>{LeftArrow}</span>
                <span className='next-btn' onClick={() => handleClick('right')}>{RightArrow}</span>
            </div>
        </div>
    );
};

export default ProductDetails;