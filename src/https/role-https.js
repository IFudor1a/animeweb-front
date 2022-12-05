import {$host} from "./index";

export const _getRoles = async () => {
    const {data} = await $host.get('/roles/')
    return data
}

export const _postRoles = async (brand) => {
    const headers = {
        'Content-Type': 'multipart/form-data'
    }
    const {data} = await $host.post('/roles/create',brand, {
        headers: headers
    })
    return data
}