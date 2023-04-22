import React from "react";
import '../css/style.css';
import Logo from "../images/Logo.svg"
import Nav from "./Nav";

const Header = () => {
    
    return (
        <header>
            <img src={Logo} alt="Little Lemon"/>
            <Nav />
    </header>
    );
}

export default Header;