import React, { useEffect } from 'react'

// type NavProps = {
//     username: string
// }

export default function Nav(props: any) {
    console.log("props - ", props)
    let currUser:string = props.match.params.username; 

    return (
        <div>
            <nav className="nav-container">
                <h1 className="nav-item">Recipes App</h1>
                <div className="nav-item">
                { props.username && <p>Hello, {`${currUser}`}</p>}
                </div>
            </nav>
        </div>
    )
}
