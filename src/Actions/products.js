import {_getProducts} from "../utils/_DATA";
import products from "../Reducers/products";
import {productFormer, saveProduct} from "../utils/utils";

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const ADD_TO_BASKET = 'ADD_TO_BASKET';

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

export function checkValid (name, description, consists, price, size, photo1, photo2, photo3, photo4) {
    return(dispatch, getState) => {
        const {products} = getState()
        const validProducts = Object.values(products)
        const product = validProducts.filter(product => product.name === name)
        const candidate = productFormer(name, description, consists, price, size, photo1, photo2, photo3, photo4)
        if(product.length === 0) {
            return saveProduct(candidate)
                .then(() => {
                    dispatch(addProduct(candidate))
                    console.log('SUCCESS ADD OF PRODUCT')
                })
        }
        else {
            return alert('WRONG PRODUCT DATA')
        }
    }
}