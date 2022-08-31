export default function Product ({name, category_id, size, price}){
    return (
        <thead>
        <tr> 
        <td>{name}</td>
        <td>{category_id}</td>
        <td>{size}</td>    
        <td>{price}</td>
        </tr>
        </thead>
    )
}