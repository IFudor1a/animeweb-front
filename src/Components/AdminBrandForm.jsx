import React, {useState} from 'react';
import '../Styles/AdminPage.scss'
import {useDispatch} from "react-redux";
import {checkBrandValidity} from "../Actions/brand";
import AdminPageLabel from "./AdminPageLabel";

const AdminBrandForm = () => {
    const [name, setName] = useState('')
    const dispatch =useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(checkBrandValidity(name))
        setName('')
     }

    return (
        <div className='Brand'>
            <AdminPageLabel/>
            <label>Brand name</label>
            <input placeholder='brand name...' onChange={(e) => setName(e.target.value)}/>
            <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
    );
};

export default AdminBrandForm;