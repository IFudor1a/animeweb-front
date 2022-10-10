
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