import React from 'react';
import { Link } from 'react-router-dom';

// STYLES
import useStyles from "./styles/nav"

const Nav: React.FC<any> = () => {
    const classes = useStyles();

    return (
        <nav className={classes.navContainer}>
            <Link className={classes.link} to="/">
                <h1 className={classes.navItem}>Recipes App</h1>
            </Link>
        </nav>
    )
}

export default Nav;