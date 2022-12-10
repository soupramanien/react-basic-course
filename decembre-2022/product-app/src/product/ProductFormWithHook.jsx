import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addProduct } from "../redux/actionCreators";
import { selectProductById } from "../redux/selectors";

export default function ProductFormWithHook() {
    //Returns an object of key/value pairs of the dynamic params from the current URL
    const params = useParams()
    //Returns redux store's dispatch function
    const dispatch = useDispatch()
    //Returns an imperative method for changing the location
    const navigate = useNavigate()
    //returns the matched producted from redux store
    let product = useSelector(selectProductById(parseInt(params.productId)));
    if (!product) {
        product = {
            name: "",
            price: undefined
        }
    }
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    const methodMap = { name: setName, price: setPrice }
    const handleChange = (event) => {
        methodMap[event.target.id](event.target.value);
        // if (event.target.id === "price") {
        //     setPrice(event.target.value);
        // }
        // else if (event.target.id === "name") {
        //     setName(event.target.value)
        // }
    }
    const handleAdd = (event) => {
        event.preventDefault();
        product.name = name
        product.price = price
        dispatch(addProduct(product))
        navigate("/products")
    }
    return (
        <form>
            <div>
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" value={name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="price">Prix</label>
                <input type="text" id="price" value={price} onChange={handleChange} />
            </div>
            <div>
                <input type="submit" value={product.id ? "modifier" : "Ajouter"} onClick={handleAdd} />
            </div>
        </form>
    )
}