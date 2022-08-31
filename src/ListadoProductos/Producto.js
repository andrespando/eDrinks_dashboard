 const Producto = ({name, price, size, category_id, description})=>
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{size}</td>    
            <td>{category_id}</td> 
            <td>{description}</td>
        </tr>



export default Producto
