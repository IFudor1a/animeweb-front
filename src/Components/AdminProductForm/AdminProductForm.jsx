import React, {useState} from 'react';
import './AdminProductForm.css';

const AdminProductForm = () => {
    const formData = new FormData()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [consists, setConsists] = useState('')
    const [price, setPrice] = useState('0')
    const [photo, setPhoto] = useState()
    const [photo2, setPhoto2] = useState()
    const [photo3, setPhoto3] = useState()
    const [photo4, setPhoto4] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('consists',consists)
        formData.append('price', price)
        formData.append('photoOne', photo)
        formData.append('photoTwo', photo2)
        formData.append('photoThree', photo3)
        formData.append('photoFour', photo4)
        fetch('http://localhost:5000/api/product/create', {
            method: 'POST',
            body: formData,
        }).then((response) => response.json())
            .then((result) => {
                console.log(
                    'Success:', result
                )
            })
            .catch((error) => {
                console.log('Error', error)
            })
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
              <label>Product photo</label>
              <input placeholder='Product photo...' type='file' value={photo} onChange={e => setPhoto([...photo, e.target.files[0]])}/>
              <label>Product photo2</label>
              <input placeholder='Product photo2...' type='file' value={photo2} onChange={e => setPhoto2([...photo2, e.target.files[0]])}/>
              <label>Product photo3</label>
              <input placeholder='Product photo3...' type='file' value={photo3} onChange={e => setPhoto3([...photo3, e.target.files[0]])}/>
              <label>Product photo4</label>
              <input placeholder='Product photo4...' type='file' value={photo4} onChange={e => setPhoto4([...photo4, e.target.files[0]])}/>
              <button>
                  Submit
              </button>
          </form>
      )
}

export default AdminProductForm;