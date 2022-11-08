import React, {useState} from 'react';
import '../Styles/Products.css';
import {Link} from "react-router-dom";

const Products = ({Clothes}) => {
    const [loading, setLoading] = useState(false);
        if(loading) {
            return <h3>Loading...</h3>
        }
    return (
        <div className='Products'>
            {
                Object.values(Clothes).map(item => (
                    <div key={item.id} className='product'>
                        <Link to={`/products/${item._id}`}>
                        <img src={`http://localhost:5000/${item.photo1}`} alt={item.name}/>
                        <div className='productDetail'>
                            {`http://localhost:5000/${item.photo1}`}
                            <a href="#">{item.name}</a>
                            <a href='#'>₸{item.price}</a>
                        </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default Products;