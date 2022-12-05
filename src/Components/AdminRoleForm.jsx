import React, {useState} from 'react';
import '../Styles/AdminPage.scss'
import AdminPageLabel from "./AdminPageLabel";

const AdminRoleForm = () => {
    const [name, setName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div className='Role'>
            <AdminPageLabel/>
            <label>Role name</label>
            <input onChange={(e) => setName(e.target.value)}/>
            <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
    );
};

export default AdminRoleForm;