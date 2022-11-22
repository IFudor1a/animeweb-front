import React, {useEffect} from 'react';
import Products from "../Components/Products";
import Search from "../Components/Search";
import Category from "../Components/Category";
import {useDispatch, useSelector} from "react-redux";
import {handleInitialData} from "../Actions/products";
import Loading from "../Components/Loading";

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