import React, { useState, useEffect } from 'react';
import axios from 'axios';

// STYLES
import './styles/login.scss';

function Login(props: any) {
    const [ user, setUser ] = useState({
        username: "",
        password: ""
    });

    const changeHandler = (e: any) => { 
        e.preventDefault();
        setUser({...user, [e.target.name]: e.target.value});
    };

    const submitHandler = (e: any) => { 
        e.preventDefault();
        axios
        .post('http://localhost:3500/auth/signup', user)
        .then((res) => {
            console.log("res", res)
        })
        .catch((err) => {
            console.error(err);
        })
        // props.history.push(`/${user.username}`);
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>ENTER USERNAME</h2>
                <form onSubmit={submitHandler}>
                    <div>
                        <input 
                            type="text" 
                            className="username-input" 
                            value={user.username} 
                            onChange={changeHandler} 
                            placeholder="username" 
                            name="username" 
                            />
                        <input 
                            type="text" 
                            className="username-input" 
                            value={user.password} 
                            onChange={changeHandler} 
                            placeholder="password" 
                            name="password" 
                            />
                        <button type="submit">ENTER</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;