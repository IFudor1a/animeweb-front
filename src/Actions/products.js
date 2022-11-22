import {_getProducts} from "../utils/_DATA";
import {checkSumFile, productFormer, saveProduct} from "../utils/utils";
import {postProduct} from "../https/product-https";

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const ERROR_PRODUCT = 'ERROR_PRODUCT';

export function receiveProducts (product) {
    return {
        type: GET_PRODUCTS,
        product
    }
}
export function addProduct (product) {
    return {
        type: ADD_PRODUCT,
        product
    }
}
export function ErrProduct (error) {
    return {
        type: ERROR_PRODUCT,
        error
    }
}
export function deleteProduct (id) {
    return {
        type: DELETE_PRODUCT,
        id
    }
}
export function AddToBasket (product) {
    return {
        type: ADD_TO_BASKET,
        product
    }
}


export function handleInitialData () {
    return (dispatch) => {
        return _getProducts()
            .then(response => response.json())
            .then(products => {
                console.log(products)
                dispatch(receiveProducts(products))
            }).catch(err => console.error('This is ', err))
    }
}

export function checkValid (name, description, consists, price, photos) {
    return(dispatch, getState) => {
        const {products} = getState()
        const validProducts = Object.values(products)
        const product = validProducts.filter(product => product.name === name)
        const fileValid = checkSumFile(photos)
        console.log(name,description,consists,price,photos, fileValid)
        const candidate = productFormer(name, description, consists, price, photos)

        if(fileValid && product.length === 0) {
            return postProduct(candidate)
                .then(() => {
                    dispatch(handleInitialData()).then( res => {
                        console.log(res)
                    }
                    ).catch(err => {
                        console.error(err)
                        dispatch(ErrProduct(err))
                        }
                    )
                })
        }

        else {
            console.error('ERROR! Product validation failed!')
            dispatch(ErrProduct('VALIDATION FAILED!'))
        }
    }
}
