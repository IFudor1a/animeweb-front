import React, {useState} from 'react';
import '../Styles/Header.css';
import {ListIcon} from "../Materials/SVG/SVG";

import {Link} from "react-router-dom";

const Header = ({user}) => {
    const [state, setState] = useState({
        class: 'Subnav'
    })
    const handleClick = () => {
        if (state.class === 'Subnav') {
            setState({class: 'SubnavClicked'});
        } else {
            setState({class: 'Subnav'})
        }

    }
    return (
        <div>
            <div className='Header'>
                <div className='logo'>
                    <Link to='/'> Animeijin</Link>
                </div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                    <li className='dropdown'>
                        <Link to='/login'>{user ? user : 'Account'}</Link>
                        <div className='dropdown_content'>
                            <Link to='/cart'>Cart</Link>
                            {user ? <a>Log out</a> : <Link to='/login'>{user ? user : 'Account'}</Link>}
                        </div>
                    </li>
                    <li onClick={() => handleClick()}>
                        {ListIcon}
                    </li>
                </ul>
            </div>
            <div className={state.class}>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/login'>{user ? user : 'Account'}</Link>
            </div>
        </div>
    );
};

export default Header;
