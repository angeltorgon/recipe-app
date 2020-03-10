import React from 'react'

type NavProps = {
    username: string
}

export default function Nav(props: NavProps) {
    return (
        <div>
            <nav className="nav-container">
                <h1 className="nav-item">Recipes App</h1>
                <div className="nav-item">
                { props.username && <p>Hello, {`${props.username}`}</p>}
                </div>
            </nav>
        </div>
    )
}
