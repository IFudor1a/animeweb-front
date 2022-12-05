import {$host} from "./index";

export const _getProducts = async () => {
    const {data} = await $host.get('/product/')
    return data
}

export const _postProduct = async (product) => {
    const headers = {
        'Content-Type': 'multipart/form-data'
    }
    const {data} = await $host.post('/product/create', product, {
        headers: headers
    })
    return data
}