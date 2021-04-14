import React from 'react';
import { NavLink } from "react-router-dom"

// stateless functional component
const NavBar = ({brand, links}) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                <NavLink className="navbar-brand" to="/movies" >{brand}</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {links.map(link => {
                        let navText = link[0]
                        let navLink = link[1]

                        return <li 
                        key={navText}
                        className='nav-item'>
                                <NavLink className='nav-link' to={'/'+ navLink}>{navText}</NavLink>
                                </li>
                    })}
                </ul>
            </div>
            </nav>
        </React.Fragment>
     );
}

export default NavBar;