import {handleInitialData} from "./shared";
import {_postBrand} from "../https/brand-https";
import {brandFormer} from "../utils/utils";

export const GET_BRANDS = 'GET_BRANDS'
export const ADD_BRAND = 'ADD_BRAND'
export const DELETE_BRAND = 'DELETE_BRAND'
export const UPDATE_BRAND = 'UPDATE_BRAND'
export const ERROR_BRAND = 'ERROR_BRAND'

export const receiveBrands = (brand) => {
    return {
        type: GET_BRANDS,
        brand
    }
}

export const addBrand = (brand) => {
    return {
        type: ADD_BRAND,
        brand
    }
}
export function ErrBrand(error) {
    return {
        type: ERROR_BRAND,
        error
    }
}
export const deleteBrand = (id) => {
    return {
        type: DELETE_BRAND,
        id
    }
}

export const updateBrand = (id, brand) => {
    return {
        type: UPDATE_BRAND,
        id,
        brand
    }
}


export const checkBrandValidity = (name) => {
    return (dispatch, getState) => {
        const {brands} = getState()
        const validBrand = Object.values(brands)
        const brand = validBrand.filter(brand => brand.name === name)
        const candidate = brandFormer(name)
        if (brand.length === 0) {
            return _postBrand(candidate)
                .then(() => {
                    dispatch(handleInitialData())
                        .then(res => {
                            console.log(res)
                        })
                }).catch(err => {
                    console.error(err)
                    dispatch(ErrBrand(err))
                })
        } else {
            console.error('ERROR! Product validation failed!')
            dispatch(ErrBrand('VALIDATION FAILED!'))
        }

    }
}