import React, {useEffect, useState} from 'react';
import '../Styles/ProductDetails.css';
import {LeftArrow, RightArrow} from "../Materials/SVG/SVG";

const ProductDetails = ({product}) => {
    const [current, setCurrent] = useState(1);
    const slidesArray = [product.photo1, product.photo2,product.photo3,product.photo4]
    console.log(product)
    console.log(slidesArray)
    const handleClick = (direction) => {
        if(direction === 'right') {
            current < slidesArray.length ? setCurrent(current + 1): setCurrent(1)
        } else {
            current <= 1? setCurrent(slidesArray.length): setCurrent(current - 1)
        }
    }

    return (
        <div className='ProductDetails'>
            {slidesArray.map((slide, _idx) => {
                if(_idx === current) return(
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