import React, { Component} from "react";
import Product from "./Product";
import useFetch from '../../hooks/useFetch';

function Products() {
    const { data, isLoading} = useFetch('/api/products', 'data')
    return(
        <div className="row" >
            <table className="table">
            <thead>
                <tr> 
                    <th>Nombre</th> 
                    <th>Precio</th>
                    <th>Proporcion</th>  
                    <th>Categoria</th> 
                    
                </tr>
            </thead>
            <tbody>
                {   data && data.map((product, i)=>
                    <Product {...product} key={i} />)
                }
            </tbody>
          
            </table>
            {isLoading && <div>Loading products... </div>} 
        </div>
    )
}

export default Products