import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  TextField } from '@material-ui/core';
import useStyles from './styles/auth';

// STYLES
// import './styles/login.scss';
import { Link } from 'react-router-dom';

const Signup = (props: any) => {
    const [ user, setUser ] = useState({
        username: "",
        password: ""
    });
    const classes = useStyles();
    const [ error, setError ] = useState(false);
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement> ) => { 
        e.preventDefault();
        setUser({...user, [e.target.name]: e.target.value});
    };

    const submitHandler = (e: React.FormEvent) => { 
        e.preventDefault();
        axios
        .post('http://localhost:3500/auth/signup', user)
        .then((res) => {
            setUser({
                username: "",
                password: ""
            })
            setError(false);
            props.history.push(`/${user.username}`);
        })
        .catch((err) => {
            setError(true);
            console.log(err);
        })
    };

    return (
        <div className={classes.loginContainer}>
            <div className={classes.loginCard}>
                <form className={classes.form} onSubmit={submitHandler}>
                    <h2>Sign Up!</h2>
                    {error ? <p className={classes.error}>There was an error.</p> : null}
                    <TextField 
                        type="text" 
                        value={user.username} 
                        className={classes.textField} 
                        onChange={changeHandler} 
                        placeholder="username" 
                        name="username" 
                        label="username" 
                        variant="outlined"
                        />
                    <TextField 
                        type="text" 
                        value={user.password} 
                        className={classes.textField} 
                        onChange={changeHandler} 
                        placeholder="password" 
                        label="password" 
                        name="password" 
                        variant="outlined"
                        />
                    <button className={classes.button} type="submit">Sign Up</button>
                    <p>Already a user? <Link to="/login">Log In</Link></p>
                </form>
            </div>
        </div>
    )
}
export default Signup;