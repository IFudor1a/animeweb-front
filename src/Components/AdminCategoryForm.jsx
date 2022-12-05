import React, {useState} from 'react';
import '../Styles/AdminPage.scss'
import AdminPageLabel from "./AdminPageLabel";
import {useDispatch} from "react-redux";
import {checkCategoryValidity} from "../Actions/category";

const AdminCategoryForm = () => {
    const [name, setName] = useState('')
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(checkCategoryValidity(name))
        setName('')
    }

    return (
        <div className='Category'>
            <AdminPageLabel/>
            <label>Category name</label>
            <input placeholder='category name...' onChange={(e) => setName(e.target.value)}/>
            <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
    );
};

export default AdminCategoryForm;