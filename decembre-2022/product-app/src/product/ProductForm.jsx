import { Component } from "react";

export default class ProductForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.product.name,
            price: props.product.price,
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleAdd = (event) => {
        event.preventDefault();
        this.props.handleAdd({
            name: this.state.name,
            price: this.state.price
        });
    }
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="name">Nom</label>
                    <input type="text" id="name" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="price">Prix</label>
                    <input type="text" id="price" value={this.state.price} onChange={this.handleChange} />
                </div>
                <div>
                    <input type="submit" value="Ajouter" onClick={this.handleAdd} />
                </div>
            </form>
        )
    }
}