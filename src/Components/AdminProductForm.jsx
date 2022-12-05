import React, {useRef, useState} from 'react';
import '../Styles/AdminPage.scss';
import {useDispatch, useSelector} from "react-redux";
import {checkValid} from "../Actions/products";
import AdminPageLabel from "./AdminPageLabel";
import {useSearchParams} from "react-router-dom";

const AdminProductForm = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [consists, setConsists] = useState('')
    const [price, setPrice] = useState(0)
    const [photo, setPhoto] = useState()
    const [photosTemp, setPhotosTemp] = useState([])
    const [category, setCategory] = useState('')
    const [brand, setBrand] = useState('')
    const fileInputRef = useRef(null)
    const dispatch = useDispatch()
    const errors = useSelector((state) => state.errors)
    const categories = useSelector(state => state.categories)
    const brands = useSelector(state => state.brands)

    const ResetAll = () => {
        setName('')
        setDescription('')
        setConsists('')
        setPrice(0)
        setPhoto('')
        setPhotosTemp([])
        setCategory('')
        setCategory('')
        fileInputRef.current.value = ''
    }

    const handleAdd = () => {
        const initialData = [...photosTemp, []]
        setPhotosTemp(initialData)
    }

    const handleChange = (onChangeValue, i) => {
        const inputData = [...photosTemp]
        inputData[i] = onChangeValue.currentTarget.files[0];
        setPhotosTemp(inputData)
    }

    const handleDelete = (i) => {
        const deleteVal = [...photosTemp]
        deleteVal.splice(i)
        setPhotosTemp(deleteVal)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const photos = [photo].concat(photosTemp)
        dispatch(checkValid(name, description, consists, price, photos, category, brand))
        ResetAll()
    }
    return (
        <div className='AdminProductForm'>
            <AdminPageLabel/>
            <div className='AdminProductForm_Container'>
                {Object.keys(errors).length !== 0 && <div style={{color: 'red'}}>Validation Failed</div>}
                <div className='input_row'>
                    <label>Product name:</label>
                    <input placeholder='Product name...' required value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div className='input_row'>
                    <label>Product description:</label>
                    <input placeholder='Product description...' required value={description}
                           onChange={e => setDescription(e.target.value)}/>
                </div>
                <div className='input_row'>
                    <label>Product consists</label>
                    <input placeholder='Product consists...' required value={consists}
                           onChange={e => setConsists(e.target.value)}/>
                </div>
                <div className='input_row'>
                    <label>Product price</label>
                    <input placeholder='Product price...' required value={price}
                           onChange={e => setPrice(parseInt(e.target.value))}/>
                </div>
                <div className='input_row'>
                    <label>Product photo</label>
                    <input placeholder='Product photo...' ref={fileInputRef} required type='file'
                           onChange={e => setPhoto(e.currentTarget.files[0])}/>
                </div>
                <div className='input_row'>
                    <label>Product category</label>
                    <select name='categories' onChange={(e) => setCategory(e.target.value)}>
                        <option key='0' value="" disabled selected hidden>CATEGORIES</option>
                        {categories && Object.values(categories).map(category => (
                            <option key={category._id} value={category._id}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <div className='input_row'>
                    <label>Product brand</label>
                    <select name='brands' onChange={(e) => setBrand(e.target.value)}>
                        <option key='0' value="" disabled selected hidden>BRANDS</option>
                        {brands && Object.values(brands).map(brand => (
                            <option key={brand._id} value={brand._id}>{brand.name}</option>
                        ))}
                    </select>
                </div>
                {photosTemp.map((data, i) => (
                    <div className='file_row'>
                        <input placeholder={'Product photo...'} required type='file'
                               onChange={e => handleChange(e, i)}/>
                        <button onClick={() => handleDelete(i)}>X</button>
                    </div>
                ))}
                <button onClick={() => handleAdd()}>Add file input</button>
                <button onClick={(e) => handleSubmit(e)}>Submit</button>
            </div>
        </div>
    )
}

export default AdminProductForm;