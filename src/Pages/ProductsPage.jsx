import React from 'react';
import Products from "../Components/Products";
import Search from "../Components/Search";
import Category from "../Components/Category";
import {useSelector} from "react-redux";

const ProductsPage = () => {
    const products = useSelector((state) => state.products)
    return (
        <div className='productsPage'>
            <Search/>
            <Category Clothes={products}/>
            <div className='Row'>
                <Products Clothes={products}/>
            </div>
        </div>
    );
};

export default ProductsPage;