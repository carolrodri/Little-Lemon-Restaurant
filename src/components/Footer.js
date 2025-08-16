import React from "react";
import logoImage from  '../assets/logo2.png'

function Footer() {
    return (
        <footer>
            <div className="footer-container">
            <div className="footer-column-logo">
                <img src={logoImage} alt="Logotipo Little Lemon Restaurant" className="footer-logo-simple" />
                <p>© Copyright Little Lemon Restaurant</p>
            </div>

            <div className="footer-column">
                <h3 className="footer-heading">Navigation</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">Reservations</a></li>
                    <li><a href="/">Order Online</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </div>

            <div className="footer-column">
                <h3 className="footer-heading">Contact</h3>
                <ul>
                    <li><address>123 Lemon St, Chicago</address></li>
                    <li><a href="tel:+11234567890">+1 (123) 456-7890</a></li>
                    <li><a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a></li>
                </ul>
            </div>

            <div className="footer-column">
                <h3 className="footer-heading">Social Media</h3>
                <ul>
                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </div>
            </div>
        </footer>
    );
}

export default Footer;