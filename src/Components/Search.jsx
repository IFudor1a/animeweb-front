import React, {useState} from 'react';
import '../Styles/Search.css';

const Search = () => {
    const [state, setState] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <div className='Search'>
            <input value={state} onChange={e => setState(e.target.value)} placeholder='Search...'/>
            <button onClick={e => handleSubmit(e)}>Search</button>
        </div>
    );
};

export default Search;