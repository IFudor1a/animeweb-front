import {GET_BRANDS, DELETE_BRAND, UPDATE_BRAND} from "../Actions/brand";

export default function brands(state = {}, action) {
    switch (action.type) {
        case DELETE_BRAND:
            state.filter(el => el.id !== action.id)
            return {...state}

        case GET_BRANDS:
            return {
                ...state,
                ...action.brand
            }
        case UPDATE_BRAND:
            return {
                ...state
            }

        default:
            return state;
    }
}