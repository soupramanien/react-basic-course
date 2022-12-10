import { ADD_PRODUCT, DELETE_PRODUCT, SET_ERROR, SET_LOADING, SET_PRODUCTS } from "./actionTypes";

const initialState = {
    product: {
        productId: 1003,
        products: [],
        loading: "idle",
        error: null
    }
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                product: {
                    ...state.product,
                    products: action.payload
                }
            }
        case ADD_PRODUCT:
            let product = action.payload
            let productId = state.product.productId
            let products = []
            if (product.id) {
                //update
                products = state.product.products.map((p) => {
                    if (p.id === product.id) {
                        return product
                    }
                    return p
                })
            }
            else {
                //create product
                product.id = productId
                productId = productId + 1
                products = [...state.product.products, product]
            }
            return {
                ...state,
                product: {
                    ...state.product,
                    products: products,
                    productId: productId
                }
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                product: {
                    ...state.product,
                    products:
                        state.product.products.filter((product) => product.id !== action.payload)
                }
            }
        case SET_LOADING:
            return {
                ...state,
                product: {
                    ...state.product,
                    loading: action.payload
                }
            }
        case SET_ERROR:
            return {
                ...state,
                product: {
                    ...state.product,
                    error: action.payload
                }
            }
        default:
            return state
    }
}
