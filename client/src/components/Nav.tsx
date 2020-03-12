import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// STYLES
import './styles/nav.scss';

// type NavProps = {
//     username: string
// }

export default function Nav(props: any) {

    return (
        <nav className="nav-container">
            <Link to="/">
                <h1 className="nav-item">Recipes App</h1>
            </Link>
            <div className="nav-item">
            { props.username.length > 0 ? <p>Hello, {`${props.username}`}</p> : null}
            </div>
        </nav>
    )
}
