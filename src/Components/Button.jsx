import React from 'react';
import '../Styles/Buttons.css';
import {Link} from "react-router-dom";

const Button = ({link, name}) => {
    return (
        <div className='button_container'>
            <Link to={link}>{name}</Link>
        </div>
    );
};

export default Button;