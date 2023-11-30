import React from "react";
import {NavLink} from "react-router-dom"
import header from "../styling/header.css"

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink
                to="/"
                className="nav-link"
            >
                Home
            </NavLink>
            <NavLink
                to="/plantlibrary"
                className="nav-link"
            >
                Plant Community
            </NavLink>

            <NavLink
                to="/myplants"
                className="nav-link"
            >
                My Plants
            </NavLink>


        </nav>
    );
}

export default NavBar;