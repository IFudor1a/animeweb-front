import {receiveProducts} from "./products";
import {getInitialData} from "../utils/_DATA";
import {receiveCategories} from "./category";
import {receiveBrands} from "./brand";

export function  handleInitialData () {
    return (dispatch) => {
        return getInitialData()
            .then(({products, categories, brands}) => {
                dispatch(receiveProducts((products)))
                dispatch(receiveCategories(categories))
                dispatch(receiveBrands(brands))
            })
    }
}