import React, { useState, useEffect } from 'react';

export default function Login() {
    const [ usernameInput, setUsernameInput ] = useState("");

    useEffect(() => {
        setUsernameInput(() => {
            const username = localStorage.getItem("username"); 
            if(username) {
                console.log("logging username - ", username);
                return username;
            } else {
                return ""
            }
        })
    }, []);

    const changeHandler = (e: any) => { 
        e.preventDefault();
        setUsernameInput(e.target.value)
    };

    const submitHandler = (e: any) => { 
        e.preventDefault();
        localStorage.setItem("username", usernameInput);
        console.log("Submitting...")
    };

    return (
        <div>
            <h2>Create a username!</h2>
            <h1>{usernameInput}</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="text" name="username" value={usernameInput} onChange={changeHandler} />
                    <button type="submit">Enter Recipe App!</button>
                </div>
            </form>
        </div>
    )
}
