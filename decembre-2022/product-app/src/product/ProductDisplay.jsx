import { Component } from "react";
import { getProducts } from "../api/Api";
import ProductForm from "./ProductForm";
import ProductFormWithHook from "./ProductFormWithHook";
import ProductTable from "./ProductTable";

export default class ProductDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productId: 1003,
            showForm: false,
            loading: true,
            networkError: false,
            products: [],
            selectedProduct: {
                id: null,
                name: "",
                price: 0
            }
        }
    }
    componentDidMount() {
        const getdata = async () => {
            try {
                this.setState({ loading: true })
                //retourne l'objet http
                const response = await getProducts();
                console.log(response);
                //Conversion du JSON vers JS
                const products = await response.json();
                console.log(products);
                this.setState({
                    products: products,
                    loading: false
                })
            }
            catch (e) {
                this.setState({
                    networkError: true,
                    loading: false
                })
            }
        }
        getdata();
    }
    handleShowForm = () => {
        this.setState({
            showForm: true
        })
    }
    addProduct = (product) => {
        product = {
            ...product, id: this.state.productId
        }
        this.setState((prevState) => ({
            products: [...prevState.products, product],
            productId: prevState.productId + 1,
            showForm: false
        }))
    }
    handleDelete = (productId) => {
        this.setState((prevState) => ({
            products:
                prevState.products.filter((product) => product.id !== productId)
        }))
    }
    render() {
        const { showForm, products, networkError, loading } = this.state;
        return (
            <div className="container">
                <button className="btn btn-primary" onClick={this.handleShowForm}>Ajouter produit</button>
                {networkError ?
                    <p className="badge badge-danger">network error</p> :
                    null}
                {loading ?
                    <p className="badge badge-warning">Loading...</p> :
                    null}
                {showForm ?
                    // <ProductForm handleAdd={this.addProduct} product={this.state.selectedProduct} /> :
                    <ProductFormWithHook handleAdd={this.addProduct} product={this.state.selectedProduct} /> :
                    <ProductTable
                        products={products}
                        handleDelete={this.handleDelete} />
                }
            </div>

        )
    }
}