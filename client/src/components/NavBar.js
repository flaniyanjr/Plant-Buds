import React from "react";
import {NavLink} from "react-router-dom"
import "../NavBar.css"

function NavBar() {
    return (
        <nav className= "navbar">
            <ul className="nav-link">
                <li>
                    <NavLink
                    to= "/home"
                    className= "nav-link"
                    >
                        Home
                    </NavLink>   
                </li>
                <li>
                    <NavLink
                    to= "/plantlibrary"
                    className = "nav-link"
                    >
                        Plant Community
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to= "/myplants"
                    className= "nav-link"
                    >
                        My Plants
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;