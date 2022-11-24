import React from 'react';
import LoginForm from "../Components/LoginForm";
import AuthImage from "../Components/AuthImage";
import '../Styles/AuthPage.scss';

const Auth = () => {
    return (
        <div className='AuthPage'>
            <AuthImage/>
            <LoginForm/>
        </div>
    );
};

export default Auth;