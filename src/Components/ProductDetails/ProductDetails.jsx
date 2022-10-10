import React, {useEffect, useState} from 'react';
import './ProductDetails.css';
import {LeftArrow, RightArrow} from "../../Materials/SVG/SVG";

const slides = [
    {id: 1, url: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/ZJM1YJKCRU_1ecomm_800x.jpg?v=1660679709', title: 'ANIMEIJIN'},
    {id: 2, url: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/ZJM1YJKCRU_800x.png?v=1660679709', title: 'ANIMEIJIN'},
    {id: 3, url: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/ZJM1YJKCRU_detail_800x.jpg?v=1660679708', title: 'ANIMEIJIN'},
    {id: 4, url: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/ZJM1YJKCRU_2ecomm_800x.jpg?v=1660679708', title: 'ANIMEIJIN'},

];

const ProductDetails = () => {
    const [current, setCurrent] = useState(1);

    const handleClick = (direction) => {
        if(direction === 'right') {
            current < slides.length ? setCurrent(current + 1): setCurrent(1)
        } else {
            current <= 1? setCurrent(slides.length): setCurrent(current - 1)
        }
    }

    return (
        <div className='ProductDetails'>
            {slides.map(slide => {
                if(slide.id === current) return(
                    <div className='slide' key={slide.id}>
                        <img src={slide.url} alt={slide.title}/>
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