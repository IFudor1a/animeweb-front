import {GET_CATEGORIES, DELETE_CATEGORY, UPDATE_CATEGORY} from "../Actions/category";

export default function categories(state = {}, action) {
    switch (action.type) {
        case DELETE_CATEGORY:
            state.filter(el => el.id !== action.id)
            return {...state}

        case GET_CATEGORIES:
            return {
                ...state,
                ...action.category
            }
        case UPDATE_CATEGORY:
            return {
                ...state
            }

        default:
            return state;
    }
}