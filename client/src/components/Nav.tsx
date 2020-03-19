import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// STYLES
import './styles/nav.scss';

const Nav: React.FC = () => {
    return (
        <nav className="nav-container">
            <Link to="/">
                <h1 className="nav-item">Recipes App</h1>
            </Link>
        </nav>
    )
}

export default Nav;