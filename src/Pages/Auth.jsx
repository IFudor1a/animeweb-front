import React from 'react';
import LoginForm from "../Components/LoginForm";
import AuthImage from "../Components/AuthImage";

const Auth = () => {
    return (
        <div className='Auth'>
            <AuthImage/>
            <LoginForm/>
        </div>
    );
};

export default Auth;