import {ERROR_PRODUCT} from "../Actions/products";
import {ERROR_BRAND} from "../Actions/brand";

export default function errors(state = {}, action) {
    switch (action.type) {
        case ERROR_PRODUCT:
            return {
                ...state,
                product_error: ERROR_PRODUCT
            }
        case ERROR_BRAND:
            return  {
                ...state,
                brand_error: ERROR_BRAND
            }

        default:
            return state;
    }
}