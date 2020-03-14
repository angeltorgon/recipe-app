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
            <h2>ENTER USERNAME</h2>
            <form onSubmit={props.submitHandler}>
                <div>
                    <input 
                        type="text" 
                        className="username-input" 
                        value={props.username} 
                        onChange={props.changeHandler} />
                    <button type="submit">ENTER</button>
                </div>
            </form>
        </div>
    )
}
