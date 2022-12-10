//methods to be used to select data from state object
//we use these methods in useSelector hook

export function selectAllProducts() {
    return (state) => state.product.products
}
export function selectProductById(productId) {
    return (state) => state.product.products.find((p) => p.id === productId)
}