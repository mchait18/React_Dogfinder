import React from "react";
import { NavLink } from "react-router-dom"
import "./NavBar.css"
import Nav from "./Nav"

function NavBar({ dogs }) {
    const links = dogs.map(dog => (
        <Nav key={dog.src} dogs={dogs} name={dog.name} />
    ));

    return (
        <nav>
            <NavLink to="/dogs" end>
                Home
            </NavLink>
            {links}
        </nav>
    );
}

export default NavBar;