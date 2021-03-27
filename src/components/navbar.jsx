import React from 'react';

// stateless functional component
const NavBar = ({totalCounters}) => {
    console.log("Navbar - Rendered")
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/" >
                Num in cart  
                 
                 <span className="badge badge-secondary ml-2">
                    {totalCounters}
                 </span>

            </a>
        </nav>
     );
}

export default NavBar;