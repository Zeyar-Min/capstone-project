import React from "react";
import Logo from "../images/Logo.svg"

const Footer = () => {

    return (
        <footer class="general footer">
            <p>&copy; Copyright Little Lemon</p>
            <img src={Logo} alt="Little Lemon" />
        </footer>
    );  

}

export default Footer;