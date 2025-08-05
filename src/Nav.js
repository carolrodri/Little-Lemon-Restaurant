import React from "react";
import { Link } from 'react-router-dom';
import cartIcon from './assets/Basket.svg'


function Nav() {
    return (
        <nav>
      <ul>
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/order-online" className="OrderOnline">Order Online</Link></li>
        <li>
          <Link to="/cart">
            <img src={cartIcon} alt="Shopping Cart" className="nav-icon" />
          </Link>
        </li>
      </ul>
        </nav>
    );
}

export default Nav;