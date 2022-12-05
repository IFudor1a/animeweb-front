import {$host} from "./index";

export const _getBrands = async () => {
    const {data} = await $host.get('/brand/')
    return data;
}

export const _postBrand = async (brand) => {
    const headers = {
        'Content-Type': 'multipart/form-data'
    }
    const {data} = await $host.post('/brand/create',brand, {
        headers: headers
    })
    return data
}