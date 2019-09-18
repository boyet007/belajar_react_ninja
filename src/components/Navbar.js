import React from 'react'
const Navbar = () => {
    return (
        <nav className="na-wrapper red darken-3">
            <div className="container">
                <a href="/" className="brand-logo">Poke's Times</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    ) 
}

export default Navbar