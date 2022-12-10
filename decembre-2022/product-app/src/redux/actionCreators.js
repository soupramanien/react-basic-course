import { ADD_PRODUCT, DELETE_PRODUCT, SET_ERROR, SET_LOADING, SET_PRODUCTS } from "./actionTypes";

export function setProducts(products) {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}
export function addProduct(product) {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}
export function deleteProduct(productId) {
    return {
        type: DELETE_PRODUCT,
        payload: productId
    }
}
export function setStatus(status) {
    return {
        type: SET_LOADING,
        payload: status
    }
}
export function setError(error) {
    return {
        type: SET_ERROR,
        payload: error
    }
}