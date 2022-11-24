import React from 'react';
import AdminProductForm from "../Components/AdminProductForm";
import AdminPageLabel from "../Components/AdminPageLabel";
import '../Styles/AdminPage.scss';

const AdminPage = () => {
    return (
        <div className='AdminPage'>
            <AdminPageLabel/>
            <AdminProductForm/>
        </div>
    );
};

export default AdminPage;