import React from "react";
import logoImage from  './assets/logo2.png'

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <img src={logoImage} alt="Logotipo Little Lemon Restaurant" className="footer-logo-simple" />
                <p>© Copyright Little Lemon Restaurant</p>
            </div>
        </footer>
    );
}

export default Footer;