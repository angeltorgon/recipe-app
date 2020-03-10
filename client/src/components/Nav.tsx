import React from 'react'

type NavProps = {
    user: {name: string}
}

export default function Nav(props: NavProps) {
    return (
        <div>
      <nav className="nav-container">
        <h1 className="nav-item">Recipes App</h1>
        <div className="nav-item">
          { props.user.name && <p>Hello, {`${props.user.name}`}</p>}
        </div>
      </nav>
        </div>
    )
}
