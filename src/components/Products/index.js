import React, { Component} from "react";
import Product from "./Product";

class Products extends Component {
    constructor() {
        super();
        this.state = {
            products : null
        }
    }

    componentDidMount(){
     fetch('api/products')
     .then(res => res.json())
     .then(data => {
        this.setState({ products: data.data})
     }) .catch(error => console.log(error))   
    }	

    render () {
        return(
            <div className="row">
            <table className="table">
                { this.state.products && this.state.products.map((product, i) =>
                <Product {...product} key = {i} />)
                }
                </table>
            </div>
        )
    }
}

export default Products