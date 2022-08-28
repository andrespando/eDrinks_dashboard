import React from "react"
import img from "../../assets/images/edrinks.png"

const NavBar = () => {
    return (
    <nav>
    <ul className="navbar">
        <a href="/"><img src={img} alt="e-Drinks Logo" />
        </a>
        <hr/>
        <li>
            <a href="/"><span>Dashboard e-Drinks</span>
            </a>
        </li>
        <li>
            <a href="/"><span>Productos</span>
            </a>
        </li>
        <li>
            <a href="/"><span>Usuarios</span>
            </a>
        </li>
        <li>
            <a href="/"><span>Categorías</span>
                </a>
        </li>
        <hr/>
    </ul>
    </nav>
    )}

export { NavBar }