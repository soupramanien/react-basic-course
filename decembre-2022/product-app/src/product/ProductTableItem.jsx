import { useDispatch } from "react-redux"
import { Link, useLocation, useNavigate, useNavigation } from "react-router-dom";
import { deleteProduct } from "../redux/actionCreators";

export default function ProductTableItem({ product }) {
    const dispatch = useDispatch();
    const handleDelete = (productId) => {
        dispatch(deleteProduct(productId))
    }
    //Returns the current location object, which represents the current URL in web browsers
    const location = useLocation()
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <Link to={location.pathname + "/update/" + product.id}
                    className="btn btn-warning"
                >Modifier</Link>
                <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(product.id)}
                >Supprimer</button>

            </td>
        </tr>
    )
}