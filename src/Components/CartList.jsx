import React from 'react';
import '../Styles/CartList.css';
import CartItem from "./CartItem";

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

const CartList = () => {
    return (
        <div className='CartList'>
            <CartItem/>
            <button className='Remove'>Очистить корзину</button>
        </div>
    );
};

export default CartList;