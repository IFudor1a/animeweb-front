import React from 'react';
import Products from "../Components/Products/Products";
import Search from "../Components/Search/Search";
import Category from "../Components/Category/Category";

const Clothes = [
    { id: 1, category: 'HOODIE', name: 'I AM DORAEMON WHITE TEE', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040',price: 30 },
    { id: 1, category: 'HOODIE', name: 'I AM DORAEMON WHITE TEE', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040',price: 30 },
    { id: 1, category: 'HOODIE', name: 'I AM DORAEMON WHITE TEE', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040',price: 30 },
    { id: 1, category: 'SVITSHOT', name: 'I AM DORAEMON WHITE TEE', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040',price: 30 },
    { id: 1, category: 'T-SHIRTS', name: 'I AM DORAEMON WHITE TEE', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040',price: 30 },
    { id: 1, category: 'Doraemon', name: 'I AM DORAEMON WHITE TEE', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040',price: 30 },
    { id: 1, category: 'Doraemon', name: 'I AM DORAEMON WHITE TEE', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040',price: 30 },
    { id: 1, category: 'Doraemon', name: 'I AM DORAEMON WHITE TEE', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040',price: 30 },
    { id: 1, category: 'Doraemon', name: 'I AM DORAEMON WHITE TEE', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040',price: 30 },
    { id: 1, category: 'Doraemon', name: 'I AM DORAEMON WHITE TEE', img: 'https://cdn.shopify.com/s/files/1/0070/1700/5113/products/TSM197NDMN_900x.png?v=1658955040',price: 30 },
]
const ProductsPage = () => {

    return (
        <div className='productsPage'>
            <Search/>
            <Category Clothes = {Clothes}/>
            <div className='Row'>
            <Products Clothes={Clothes}/>
            </div>
        </div>
    );
};

export default ProductsPage;