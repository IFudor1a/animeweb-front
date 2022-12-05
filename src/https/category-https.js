import {$host} from "./index";

export const _getCategory = async () => {
    const {data} = await $host.get('/category/')
    return data;
}

export const _postCategory = async (category) => {
    const headers = {
        'Content-Type': 'multipart/form-data'
    }
    const {data} = await $host.post('/category/create', category, {
        headers: headers
    })
    return data
}