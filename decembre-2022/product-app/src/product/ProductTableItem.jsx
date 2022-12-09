export default function ProductTableItem({ product, handleDelete }) {
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(product.id)}
                >Supprimer</button>
            </td>
        </tr>
    )
}