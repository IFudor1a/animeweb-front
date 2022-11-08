import React, {useState} from 'react';
import '../Styles/AdminProductForm.css';
import {productFormer} from "../utils/utils";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {checkValid} from "../Actions/products";

const AdminProductForm = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [consists, setConsists] = useState('')
    const [price, setPrice] = useState('0')
    const [size, setSize] = useState('')
    const [photo, setPhoto] = useState()
    const [photo2, setPhoto2] = useState()
    const [photo3, setPhoto3] = useState()
    const [photo4, setPhoto4] = useState()

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()

        dispatch(checkValid(name, description, consists, price, size, photo[0], photo2[0], photo3[0], photo4[0]))
        setName('')
        setDescription('')
        setConsists('')
        setPrice('')
        setSize('')
        setPhoto(null)
        setPhoto2(null)
        setPhoto3(null)
        setPhoto4(null)
    }
      return (
          <form onSubmit={(e) => handleSubmit(e)} className='AdminProductForm'>
              <label>Product name:</label>
              <input placeholder='Product name...' value={name} onChange={e => setName(e.target.value)}/>
              <label>Product description:</label>
              <input placeholder='Product description...' value={description} onChange={e => setDescription(e.target.value)}/>
              <label>Product consists</label>
              <input placeholder='Product consists...' value={consists} onChange={e => setConsists(e.target.value)}/>
              <label>Product price</label>
              <input placeholder='Product price...' value={price} onChange={e => setPrice(e.target.value)}/>
              <label>Product size</label>
              <input placeholder='Product size...' value={size} onChange={e => setSize(e.target.value)}/>
              <label>Product photo</label>
              <input placeholder='Product photo...' type='file'  onChange={e => setPhoto(e.currentTarget.files)}/>
              <label>Product photo2</label>
              <input placeholder='Product photo2...' type='file'  onChange={e => setPhoto2(e.currentTarget.files)}/>
              <label>Product photo3</label>
              <input placeholder='Product photo3...' type='file'  onChange={e => setPhoto3(e.currentTarget.files)}/>
              <label>Product photo4</label>
              <input placeholder='Product photo4...' type='file'  onChange={e => setPhoto4(e.currentTarget.files)}/>
              <button>Submit</button>
          </form>
      )
}

export default AdminProductForm;