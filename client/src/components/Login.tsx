import React, { useState, useEffect } from 'react';

// STYLES
import './styles/login.scss';

// type LoginProps = {
//     username: string;
//     submitHandler: () => void;
//     onChangeHandler: (e: any) => void;
// }

export default function Login(props: any) {

    return (
        <div className="login-container">
            <h2>Enter username</h2>
            <h1>{props.username}</h1>
            <form onSubmit={props.submitHandler}>
                <div>
                    <input type="text" value={props.username} onChange={props.changeHandler} />
                    <button type="submit">ENTER</button>
                </div>
            </form>
        </div>
    )
}
