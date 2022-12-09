import { useState } from "react";

export default function ProductFormWithHook(props) {
    const [name, setName] = useState(props.product.name);
    const [price, setPrice] = useState(props.product.price);
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
        props.handleAdd({
            name: name,
            price: price
        });
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
                <input type="submit" value="Ajouter" onClick={handleAdd} />
            </div>
        </form>
    )
}