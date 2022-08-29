import React from "react"
import ContentRowEdrinks from "../ContentRowEdrinks"

const contentRowEdrinks = [
    {
        title: "Total de productos",
        color: "green",
        total: 28
    },
    {
        title: "Total de usuarios",
        color: "red",
        total: 2
    },
    {
        title: "Total de categorías",
        color: "yelow",
        total: 6
    }
]


const ContentRowTop = () => {
    return (

        <div styles={{ backgroundColor: 'black' }}>
        <div>
            <h1>Dashboard e-Drinks</h1>
        </div>
        <div>
            {contentRowEdrinks.map((element, index) => {
                return (
                    <ContentRowEdrinks
                        title={element.title}
                        color={element.color}
                        total={element.total}
                        key={element.total + element.title}
                    />)
            })
            }
        </div>
    </div>

)}


export { ContentRowTop }