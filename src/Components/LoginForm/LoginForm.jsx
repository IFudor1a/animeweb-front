import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import './LoginForm.css'
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const {store} = useContext(Context);
    const [state, setState] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='Login'>
                <h3>{state ? 'REGISTER' : 'LOGIN'} </h3>
                <input placeholder='Login...'/>
                <input placeholder='Password...'/>
                <button onSubmit={(e) => {handleSubmit(e)}}>
                    {
                        state ? 'CREATE MY ACCOUNT' : 'LOGIN'
                    }
                </button>
                <a onClick={() => setState(!state)}>{state ? "Already have an account? Login" : "Don't have an account? Create one"}</a>
        </div>
    );
}

export default observer(LoginForm);