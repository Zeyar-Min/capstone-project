import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    
    return(
            <nav>
                <Link to="/" class="nav">Home Page</Link>
                <Link to="/" class="nav">Menu</Link>
                <Link to="/Reservation" class="nav">Reservation</Link>
                <Link to="/" class="nav">Location</Link>
                <Link to="/" class="nav">About</Link>
            </nav>
    );

}

export default Nav;