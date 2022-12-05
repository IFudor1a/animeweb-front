import React, {useState} from 'react';
import '../Styles/AdminPage.scss'
import AdminPageLabel from "./AdminPageLabel";
import {useSelector} from "react-redux";

const AdminCustomerForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [customerEmail, setCustomerEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [approved, setApproved] = useState(false)
    const roles = useSelector(state => state.roles)

    return (
        <div className='Customer'>
            <AdminPageLabel/>
           <div className='input_container'>
               <label>First name</label>
               <input placeholder='First name...' onChange={(e) => {setFirstName(e.target.value)}}/>
           </div>
            <div className='input_container'>
                <label>Last name</label>
                <input placeholder='Last name...' onChange={(e) => {setLastName(e.target.value)}}/>
            </div>
            <div className='input_container'>
                <label>Customer email</label>
                <input placeholder = 'Customer email...' onChange={e => {setCustomerEmail(e.target.value)}}/>
            </div>
            <div className='input_container'>
                <label>Phone Number</label>
                <input placeholder='Phone Number...' onChange={e => {setPhoneNumber(e.target.value)}}/>
            </div>
            <div className='input_container'>
                <label>Password</label>
                <input placeholder= 'Password' onChange={e => {setPassword(e.target.value)}}/>
            </div>
            <div className='input_container'>
                <label>Role</label>
                <select name='roles'>
                    <option key='0' value='' disabled selected hidden>Roles</option>
                    {roles && Object.values(roles).map(role => (
                        <option key={role.id} value={role.name}>
                            {role.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className='input_container'>
                <label>Approved</label>
                <input type='radio'/>
            </div>
            <button>
                Submit
            </button>
        </div>
    );
};

export default AdminCustomerForm;