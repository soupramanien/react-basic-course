import ProductTableItem from "./ProductTableItem"

export default function ProductTable({ products, handleDelete }) {
    if (products.length === 0) {
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
                            handleDelete={handleDelete}
                        />
                    )
                })}
            </tbody>
        </table>
    )
}