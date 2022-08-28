import React from "react"
import img from "../../assets/images/edrinks.png"

const NavBar = () => {
    return (
    
    <ul className="navbar">
        <a href="/"><img src={img} alt="e-Drinks Logo" />
        </a>
        <hr/>
        <li>
            <a href="/"><span>eDrinks Dashboard</span>
            </a>
        </li>
        <li>
            <a href="/"><span>Páginas</span>
            </a>
        </li>
        <li>
            <a href="/"><span>Gráficos</span>
            </a>
        </li>
        <li>
            <a href="/"><span>Tablas</span>
                </a>
        </li>
        <hr/>
    </ul>
    
    )}


export { NavBar }