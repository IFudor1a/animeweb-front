import React, {useEffect, useState} from 'react';
import '../Styles/ProductSlider.css';
import {LeftArrow, RightArrow} from "../Materials/SVG/SVG";
import {Link} from "react-router-dom";
import Button from "./Button";
import {useSelector} from "react-redux";



const ProductSlider = ({title}) => {
    const Products = useSelector(state => state.products)
    const [current, setCurrent] = useState(0);
    const maxSlide = Object.values(Products).length

    useEffect(() => {
        const products = document.querySelectorAll('.product')
        for(let product of products) {
            product.style.transform = `translateX(${-100 * current}%)`
        }
    }, [current])
    const handleClick = (position) => {
        if(position === 'left') {
            if(current === 0) {
                setCurrent(maxSlide - 1)
            } else{
            setCurrent(current <= 0 ? maxSlide - 1 : current - 1)}
        } else {
            if (current === maxSlide - 1) {
                setCurrent(0)
            } else {
            setCurrent(current >= maxSlide - 1 ? 0: current + 1)}

        }
    }





    return (
        <div className='ProductSlider'>
            <h2 id='slider'>{title}</h2>
            <div className='Container'>
                {
                   Products && Object.values(Products).map(product => (
                        <div className='product'>
                            <Link to={`products/${product._id}`}>
                                <div className='picture'>
                                    <img src={`http://localhost:5000/${product.product_images.split(' ')[0]}`} alt={product.name}/>
                                </div>
                                <div className='info'>
                                    <h3>{product.category}</h3>
                                    <p>{product.product_name}</p>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <div className='navigation'>
                <span className='prev-btn' onClick={() => handleClick('left')}>{LeftArrow}</span>
                <span className='next-btn' onClick={() => handleClick('right')}>{RightArrow}</span>
            </div>
            <Button link={'/products'} name={'VIEW ALL PRODUCTS'}/>
        </div>
    );
}

export default ProductSlider;