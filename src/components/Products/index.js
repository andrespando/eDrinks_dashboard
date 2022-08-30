import React, { Component} from "react";

function Product ({name, category_id, price, size})


class Products extends Component {
    constructor() {
        super();
        this.state = {
            product : null
        }
    }

    componentDidMount(){
     fetch('api/produts')
     .then(res => res.json())
     .then(data => {
        this.setState({ products: data.data})
     }) .catch(error => console.log(error))   
    }	

    render () {
        return(
            <div>
                { this.state.products && this.state.product.map((product, i) =>
                <Product {...product} key = {i} />)
                }
            </div>
        )
    }
}