import React from "react"
import Card from "./Card"
import Categories from "./Categories"
import Products from "./Products"
import LastProduct from "./LastProduct"

export default function ContentMiddle(){
    return(
        <div className="row">
                <Card title="Listado de categorías">
                    <Categories />
                </Card>
                <Card title="Último producto creado">
                    <LastProduct />
                </Card>  
                <Card title="Listado de productos">
                    <Products />
                </Card>  
                
            </div>
    )
}