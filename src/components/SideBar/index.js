import React from "react"
import img from "../../assets/images/edrinks.png"

const SideBar = () => {
        return (<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon">
                    <img className="w-100" src={img} alt="e-Drinks Logo" />
                </div>
            </a>
            <hr className="sidebar-divider" />
            <li className="nav-item">
                <a className="nav-link collapsed" href="/">
                    <span className="title">Productos</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">
                    <span className="title">Usuarios</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">
                    <span className="title">Categorías</span></a>
            </li>
            <hr className="sidebar-divider d-none d-md-block" />
        </ul>)}

export { SideBar }