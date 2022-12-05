import {handleInitialData} from "./shared";
import {_postCategory} from "../https/category-https";
import {categoryFormer} from "../utils/utils";

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const ADD_CATEGORY = 'ADD_CATEGORY'
export const DELETE_CATEGORY = 'DELETE_CATEGORY'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const ERROR_CATEGORY = 'ERROR_CATEGORY'

export const receiveCategories = (category) => {
    return {
        type: GET_CATEGORIES,
        category
    }
}

export const addCategory = (category) => {
    return {
        type: ADD_CATEGORY,
        category
    }
}

export function ErrCategory(error) {
    return {
        type: ERROR_CATEGORY,
        error
    }
}

export const deleteCategory = (id) => {
    return {
        type: DELETE_CATEGORY,
        id
    }
}

export const updateCategory = (id, category) => {
    return {
        type: UPDATE_CATEGORY,
        id,
        category
    }
}

export const checkCategoryValidity = (name) => {
    return (dispatch, getState) => {
        const {categories} = getState()
        const validBrand = Object.values(categories)
        const category = validBrand.filter(category => category.name === name)
        const candidate = categoryFormer(name)
        if (category.length === 0) {
            return _postCategory(candidate)
                .then(() => {
                    dispatch(handleInitialData())
                        .then(res => {
                            console.log(res)
                        })
                }).catch(err => {
                    console.error(err)
                    dispatch(ErrCategory(err))
                })
        } else {
            console.error('ERROR! Product validation failed!')
            dispatch(ErrCategory('VALIDATION FAILED!'))
        }

    }
}