import React from "react"
import Card from "./Card"
import Categories from "./Categories"

export default function ContentMiddle(){
    return(
        <div className="row">
                <Card 
                    changeBackground
                    title="Listado de categorías">
                    <Categories />
                </Card>
            </div>
    )
}