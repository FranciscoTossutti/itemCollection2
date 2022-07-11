import React from "react";
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav">
            <NavLink className="logo" to='/'>Logo</NavLink>
            <ul className="nav-menu">
                <NavLink className="nav-menu-item" to='/'>Inicio</NavLink>
                <NavLink className="nav-menu-item" to='/categoria/Parlantes'>Parlantes</NavLink>
                <NavLink className="nav-menu-item" to='/categoria/Auriculares'>Auriculares</NavLink>
                <NavLink className="nav-menu-item" to='/contacto'>Contacto</NavLink>
                <NavLink className="nav-menu-item" to='/Cart'><CartWidget /></NavLink>
            </ul>
        </nav>
    );
}

export default NavBar;