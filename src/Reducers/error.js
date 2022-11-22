import {ERROR_PRODUCT} from "../Actions/products";

export default function errors (state = {}, action) {
    switch (action.type) {
        case ERROR_PRODUCT:
            return {
                ...state,
                product_error: ERROR_PRODUCT
            }

        default:
            return state;
    }
}