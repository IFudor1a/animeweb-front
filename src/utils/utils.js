export function generateUID () {
    return Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15)
}

export const productFormer = (name, description, consists, price, photos) => {
    const formData = new FormData()
    formData.append('name',name)
    formData.append('description',description)
    formData.append('consists',consists)
    formData.append('price',price)
    for (let i = 0; i < photos.length; i++) {
        console.log(photos[i])
        formData.append(`photo${i}`, photos[i])

    }
    return formData;
}

export const checkSumFile = (files) => {
   const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif|\.jfif)$/i;
    for (const file of files) {
        console.log(file.type)
        if (!allowedExtensions.exec(file.name)) {
            return false
        }
    }
    return true;
}
export const saveProduct = async (product) => {
    console.log('This is ', product)
    const options = {
        method: 'POST',
        body: product
    }
    return await fetch('http://localhost:5000/api/product/create', options)
}