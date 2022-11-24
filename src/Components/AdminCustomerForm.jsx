import React from 'react';
import '../Styles/AdminPage.scss'

const AdminCustomerForm = () => {
    return (
        <div className='Customer'>
           <div className='input_container'>
               <label>First name</label>
               <input/>
           </div>
            <div className='input_container'>
                <label>Last name</label>
                <input/>
            </div>
            <div className='input_container'>
                <label>Customer email</label>
                <input/>
            </div>
            <div className='input_container'>
                <label>Phone Number</label>
                <input/>
            </div>
            <div className='input_container'>
                <label>Password</label>
                <input/>
            </div>
            <div className='input_container'>
                <label>Approved</label>
                <input type='radio'/>
            </div>
        </div>
    );
};

export default AdminCustomerForm;