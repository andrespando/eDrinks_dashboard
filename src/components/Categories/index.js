import React, {Component} from "react"
import Category from "../Category";

class Categories extends Component {
    constructor() {
        super();
        this.state = {
            categories : null
        }
    }

    componentDidMount(){
     fetch('api/categories')
     .then(res => res.json())
     .then(data => {
        this.setState({ categories: data.data})
     }) 
     .catch(error => console.log(error))   
    }	

    render () {
        return(
            <div className="row">
                { this.state.categories && this.state.categories.map((category, i) =>
                    <Category {...category} key = {i} />)
                }
            </div>
        )
}
}

export default Categories
