export function generateUID () {
    return Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15)
}

export const productFormer = (name, description, consists, price, size, photo, photo2, photo3,photo4 ) => {
    const formData = new FormData()
    formData.append('name',name)
    formData.append('description',description)
    formData.append('consists',consists)
    formData.append('price',price)
    formData.append('size', size)
    formData.append('photo1', photo)
    formData.append('photo2', photo2)
    formData.append('photo3', photo3)
    formData.append('photo4', photo4)
    return formData
}

export const saveProduct = async (product) => {
    console.log('This is ', product)
    const options = {
        method: 'POST',
        body: product
    }
    return await fetch('http://localhost:5000/api/product/create', options)
}