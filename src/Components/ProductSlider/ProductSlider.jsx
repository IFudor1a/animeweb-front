import React, {useEffect, useState} from 'react';
import './ProductSlider.css';
import {LeftArrow, RightArrow} from "../../Materials/SVG/SVG";
import Button from "../Buttons/Button";
import {set} from "mobx";
import {Link} from "react-router-dom";

const Products = [
    { id: 1, category: 'Doraemon', name: 'I AM DORAEMON WHITE TEE 1', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040' },
    { id: 2, category: 'Doraemon', name: 'I AM DORAEMON WHITE TEE 2', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040' },
    { id: 3, category: 'Doraemon', name: 'I AM DORAEMON WHITE TEE 3', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040' },
    { id: 4, category: 'Doraemon', name: 'I AM DORAEMON WHITE TEE 4', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040' },
    { id: 5, category: 'Doraemon', name: 'I AM DORAEMON WHITE TEE 5', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040' },
    { id: 6, category: 'Doraemon', name: 'I AM DORAEMON WHITE TEE 6', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040' },
    { id: 7, category: 'Doraemon', name: 'I AM DORAEMON WHITE TEE 7', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040' },
    { id: 8, category: 'Doraemon', name: 'I AM DORAEMON WHITE TEE 8', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040' },
    { id: 9, category: 'Doraemon', name: 'I AM DORAEMON WHITE TEE 9', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040' },
    { id: 10, category: 'Doraemon', name: 'I AM DORAEMON WHITE TEE 10', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040' },
]

const ProductSlider = ({title}) => {
    const [current, setCurrent] = useState(0);
    const maxSlide = Products.length - 1;

    const handleChange = () => {
        let slides = document.querySelectorAll('.product');
        [...slides].forEach((slide, id) => {
            console.log('Current',current)
            console.log('VALUE', id-current)
            slide.style.transform = `translateX(${-100*current}%)`
        })
    }

    const handleClick = (direction) => {
        if(direction === 'right') {
            if(current >= maxSlide-3) {setCurrent(0)}
            else {setCurrent(current + 1)}
            handleChange();
        } else {
            if(current <= 0) {setCurrent(maxSlide-3)}
            else{
                setCurrent(current - 1)
            }
            handleChange();
        }
    }

    useEffect(() => {
        const delay = setTimeout(() => {
            if(current >= maxSlide-3) {setCurrent(0)}
            else {setCurrent(current + 1)}
            handleChange();
        }, 5000)
        return () => {clearTimeout(delay);}
    }, [current])

    return (
        <div className='ProductSlider' >
            <h2 id='slider'>{title}</h2>
            <div className='Container'>
            {
                Products.map(product => (
                    <div className='product'>
                        <Link to={`products/${product.id}`}>
                        <div className='picture'>
                        <img src={product.img} alt={product.name}/>
                        </div>
                        <div className='info'>
                            <h3>{product.category}</h3>
                            <p>{product.name}</p>
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
            <Button/>
        </div>
    );
};

export default ProductSlider;