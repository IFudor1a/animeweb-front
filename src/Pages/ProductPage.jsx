import React from 'react';
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import ProductForm from "../Components/ProductForm/ProductForm";

const ProductPage = () => {
    return (
        <div className='Product'>
            <div style={{textAlign: "center", margin: 50, letterSpacing: 2, fontSize: 24, fontWeight: 700 }}>Product name</div>
            <div className='Container'>
            <ProductDetails/>
            <ProductForm/>
            </div>
        </div>
    );
};

export default ProductPage;