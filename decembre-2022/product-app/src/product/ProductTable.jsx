import { useSelector } from "react-redux"
import { selectAllProducts } from "../redux/selectors"
import ProductTableItem from "./ProductTableItem"

export default function ProductTable() {
    // const products = useSelector(state => state.product.products)
    const products = useSelector(selectAllProducts())
    if (!products || products.length === 0) {
        return <p>La liste est vide !</p>
    }
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prix</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => {
                    return (
                        <ProductTableItem
                            key={product.id}
                            product={product}
                        />
                    )
                })}
            </tbody>
        </table>
    )
}