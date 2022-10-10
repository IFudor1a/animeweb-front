import React from 'react';
import './Buttons.css';
import {Link} from "react-router-dom";
const Button = () => {
    return (
        <div className='button_container'>
            <Link to ='/products'>VIEW ALL PRODUCTS</Link>
        </div>
    );
};

export default Button;