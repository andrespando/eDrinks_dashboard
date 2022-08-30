import React from "react"
import ContentRowEdrinks from "../ContentRowEdrinks"

const contentRowEdrinks = [
    {
        title: "Total de productos",
        color: "primary",
        total: 28
    },
    {
        title: "Total de usuarios",
        color: "success",
        total: 2
    },
    {
        title: "Total de categorías",
        color: "warning",
        total: 6
    }
]

const ContentRowTop = () => {
    return (

        <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard e-Drinks</h1>
        </div>
        <div className="row">
            {contentRowEdrinks.map((element, index) => {
                return (
                    <ContentRowEdrinks
                        title={element.title}
                        color={element.color}
                        total={element.total}
                        key={index + element.title}
                    />)
            })
            }
        </div>
    </div>

)}


export { ContentRowTop }