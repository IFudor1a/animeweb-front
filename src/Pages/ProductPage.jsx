import React from 'react';
import ProductDetails from "../Components/ProductDetails";
import ProductForm from "../Components/ProductForm";
import {useSelector} from "react-redux";
import {useParams} from 'react-router-dom';

const ProductPage = () => {
    const params = useParams();
    const products = useSelector((state) => state.products)
    const product = Object.values(products).filter(product => product._id === params.id)
    console.log(product)
    return (
        <div className='Product'>
            <div style={{textAlign: "center", margin: 50, letterSpacing: 2, fontSize: 24, fontWeight: 700 }}>{product[0].name}</div>
            <div className='Container'>
            <ProductDetails product = {product[0]}/>
            <ProductForm product = {product[0]}/>
            </div>
        </div>
    );
};

export default ProductPage;