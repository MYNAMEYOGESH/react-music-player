import React from "react";
import { Link } from 'react-router-dom'
function Menu() {
    return(
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-success fixed-top">
                <div className="container">
                    <Link to={`/`} className = "navbar-brand" >Music-Player</Link>

                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={`/`} className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/about`} className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/contact`} className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Menu