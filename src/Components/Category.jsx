import React, {useState} from 'react';
import '../Styles/Category.css';
import {useSelector} from "react-redux";

const filters = [
    {id: 1, value: 'NEW_ARRIVAL', name: 'NEW ARRIVAL'},
    {id: 2, value: 'ASCENDING_PRICE', name: 'ASCENDING PRICE'},
    {id: 3, value: 'DESCENDING_PRICE', name: 'DESCENDING PRICE'}
]


const Category = ({Clothes, categories, setCategory, setFilter}) => {
    return (
        <div className='CategoryLabel'>
            <div className='Categories'>
                <select name='categories' onChange={(e) => setCategory(e.target.value)}>
                    <option key='0' value='ALL' selected>CATEGORIES</option>
                    {categories && Object.values(categories).map(category => (
                        <option key={category._id} value={category._id}>{category.name}</option>
                    ))}
                </select>
            </div>
            <div className='Filters'>
                <select name='filters' onChange={(e) => setFilter(e.target.value)}>
                    <option key='0' value='' disabled selected hidden>FILTERS</option>
                    {filters && filters.map(filter => (
                        <option key={filter.id} value={filter.value}>{filter.name}</option>
                    ))}
                </select>
            </div>
            <div className='Results'> {Object.values(Clothes).length} Results</div>
        </div>
    );
};

export default Category;