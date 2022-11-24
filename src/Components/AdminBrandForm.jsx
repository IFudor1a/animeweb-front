import React, {useState} from 'react';
import '../Styles/AdminPage.scss'

const AdminBrandForm = () => {
    const [name, setName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <div className='Brand'>
            <label>Brand name</label>
            <input onChange={(e) => setName(e.target.value)}/>
            <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
    );
};

export default AdminBrandForm;