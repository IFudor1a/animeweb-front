import React, {useState} from 'react';
import './Products.css';
import {Link} from "react-router-dom";

const Products = ({Clothes}) => {
    const [loading, setLoading] = useState(false);
        if(loading) {
            return <h3>Loading...</h3>
        }

    return (
        <div className='Products'>
            {
                Clothes.map(item => (
                    <div key={item.id} className='product'>
                        <Link to={`/products/${item.id}`}>
                        <img src={item.img} alt={item.name}/>
                        <div className='productDetail'>
                            <a href="#">{item.name}</a>
                            <a href='#'>${item.price}</a>
                        </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default Products;