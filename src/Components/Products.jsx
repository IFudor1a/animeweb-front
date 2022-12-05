import React, {useState} from 'react';
import '../Styles/Products.css';
import {Link} from "react-router-dom";

const Products = ({Clothes}) => {
    const [loading, setLoading] = useState(false);
    if (loading) {
        return <h3>Loading...</h3>
    }
    return (
        <div className='Products'>
            {
                Object.values(Clothes).map(item => (
                    <div key={item.id} className='product'>
                        <Link to={`/products/${item._id}`}>
                            <div className='img_container'>
                            <img src={`http://localhost:5000/${item.product_images.split(' ')[0]}`}
                                 alt={item.product_name}/>
                            </div>
                            <div className='productDetail'>
                                <a href="#">{item.product_name}</a>
                                <a href='#'>₸{item.unit_price}</a>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default Products;