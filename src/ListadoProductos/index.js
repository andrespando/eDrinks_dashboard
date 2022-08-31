import React from "react";
import Producto from './Producto';
import useFetch from '../hooks/useFetch';

function Productos() {
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
                    <th>Descripcion</th>
                </tr>
            </thead>
            <tbody>
                {   data && data.map((producto, i)=>
                    <Producto {...producto} key={i} />)
                }
            </tbody>
          {/*   <tfoot>
                <tr> 
                    <th>Nombre</th> 
                    <th>Precio</th>
                    <th>Proporcion</th>  
                    <th>Categoria</th> 
                    <th>Descripcion</th>
                </tr>
            </tfoot> */}
            </table>
            {isLoading && <div>Loading products... </div>} 
        </div>
    )
}

export default Productos