import React, {useEffect, useMemo, useState} from 'react';
import Products from "../Components/Products";
import Search from "../Components/Search";
import Category from "../Components/Category";
import {useSelector} from "react-redux";

const ProductsPage = () => {
    const [category, setCategory] = useState('ALL')
    const [filter, setFilter] = useState('');
    const products = useSelector((state) => state.products)
    const categories = useSelector((state) => state.categories)

    const getFilteredList = () => {
        let productsCopy = products

        if(category !== 'ALL') {
            productsCopy = Object.values(products).filter((product) => product.category === category)
        }

        switch (filter) {
            case 'ASCENDING_PRICE':
                 return  Object.values(productsCopy).sort((a,b) =>  Number(a.unit_price)-Number(b.unit_price))
            case 'DESCENDING_PRICE':
                return  Object.values(productsCopy).sort((a,b) =>  Number(b.unit_price)-Number(a.unit_price))
            case 'NEW_ARRIVAL':
                console.log(Object.values(productsCopy)[0])
                return  Object.values(productsCopy).sort((a,b) =>  Date.parse(b.created_at)-Date.parse(a.created_at))
        }

        return productsCopy

    }
    const FilteredList = useMemo(getFilteredList, [category,products, filter])

    return (
        <div className='productsPage'>
            <Search/>
            <Category Clothes={FilteredList} categories={categories} setCategory={setCategory} setFilter={setFilter}/>
            <div className='Row'>
                <Products Clothes={FilteredList}/>
            </div>
        </div>
    );
};

export default ProductsPage;