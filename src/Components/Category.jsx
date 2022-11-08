import React from 'react';
import '../Styles/Category.css';

const categories = [
    {id: 1, value:'HOODIE', name: 'HOODIE'},
    {id: 2, value: 'SVITSHOT', name: 'SVITSHOT'},
    {id: 3, value: 'T-SHIRTS', name: 'T-SHIRTS'},
    {id: 4, value: "SHIRTS", name: "SHIRTS"}
]
const filters = [
    {id: 1, value: 'NEW_ARRIVAL', name: 'NEW ARRIVAL'},
    {id: 2, value: 'ASCENDING_PRICE', name: 'ASCENDING PRICE'},
    {id: 3, value: 'DESCENDING_PRICE', name: 'DESCENDING PRICE'}
]


const Category = ({Clothes}) => {
    return (
        <div className='Category'>
          <div className='Categories'>
            <select name='categories' >
                <option key = '0' value="" disabled selected hidden>CATEGORIES</option>
                {categories && categories.map(category => (
                    <option key = {category.id} value={category.value}>{category.name}</option>
                ))}
            </select>
            </div>
            <div className='Filters'>
                <select name='filters'>
                    <option key='0' value='' disabled selected hidden>FILTERS</option>
                    {filters && filters.map(filter => (
                        <option key={filter.id} value={filter.value}>{filter.name}</option>
                    ))}
                </select>
            </div>
            <div className='Results'> {Object.values(Clothes).length} Results </div>
        </div>
    );
};

export default Category;