import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import { fromEventPattern } from 'rxjs';


const Navbar = (props) => {
    console.log(props)
    
    setTimeout(() => {
        props.history.push('/about')
    }, 2000)

    return (
        //nav.nav-isExpressionWrapper.red.darken-3
        <nav className="na-wrapper red darken-3">
            <div className="container">
                <a href="/" className="brand-logo">Poke's Times</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
        
    ) 
}

export default withRouter(Navbar)