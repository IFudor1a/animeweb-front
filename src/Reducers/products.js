import {ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCTS} from "../Actions/products";

export default function products(state = {}, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                [action.product.id]: action.product
            }

        case DELETE_PRODUCT:
            state.filter(el => el.id !== action.id)
            return {...state}

        case GET_PRODUCTS:
            return {
                ...state,
                ...action.product
            }

        default:
            return state;
    }
}