import React from "react";
import logoImage from '../assets/logo.png'
import Nav from './Nav';

function Header() {
    return (

        <header className="header-container">
            <img src={logoImage} alt="Logo restaurant Little Lemon"></img>
            <Nav />
        </header>
    );
}

export default Header;