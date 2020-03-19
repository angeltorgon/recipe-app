import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles, Theme, createStyles, TextField } from '@material-ui/core';
import useStyles from './styles/auth';

// STYLES
// import './styles/login.scss';
import { Link } from 'react-router-dom';

function Login(props: any) {
    const [ user, setUser ] = useState({
        username: "",
        password: ""
    });
    const [ error, setError ] = useState(false);
    const classes = useStyles();

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement> ) => { 
        e.preventDefault();
        setUser({...user, [e.target.name]: e.target.value});
    };

    const submitHandler = (e: React.FormEvent) => { 
        e.preventDefault();
        axios
        .post('http://localhost:3500/auth/login', user)
        .then((res) => {
            setUser({
                username: "",
                password: ""
            })
            setError(false);
            props.history.push(`/${user.username}`);
        })
        .catch((err) => {
            console.log(err);
            setError(true);
        })
    };

    return (
        <div className={classes.loginContainer}>
            <div className={classes.loginCard}>
                <form className={classes.form} onSubmit={submitHandler}>
                    <h2>Log In!</h2>
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
                    <button className={classes.button} type="submit">Log In</button>
                    <p>Not a user? <Link to="/">Sign Up</Link></p>
                </form>
            </div>
        </div>
    )
}
export default Login;