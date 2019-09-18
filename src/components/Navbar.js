import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="na-wrapper red darken-3">
            <div className="container">
                <a href="/" className="brand-logo">Poke's Times</a>
                <ul className="right">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    ) 
}

//NavLink supaya linknya bisa di set active untuk di style

export default Navbar