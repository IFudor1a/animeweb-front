import {$host, $authHost} from "./index";

export const getProducts = async () => {
    const {data} = await $host.get('/product/')
    return data
}

export const postProduct = async (product) => {
    const headers = {
        'Content-Type': 'multipart/form-data'
    }
    const {data} = await $host.post('/product/create', product, {
        headers: headers
    })
    return data
}