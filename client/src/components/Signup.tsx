import React, { useState } from 'react';
import Loader from 'react-loader-spinner'
import axios from 'axios';
import {  TextField } from '@material-ui/core';
import useStyles from './styles/auth';

// STYLES
// import './styles/login.scss';
import { Link } from 'react-router-dom';

const Signup: React.FC <any> = (props) => {
    const [ user, setUser ] = useState({
        username: "",
        password: ""
    });
    const classes = useStyles();
    const [ error, setError ] = useState<string>("");
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement> ) => { 
        e.preventDefault();
        setUser({...user, [e.target.name]: e.target.value});
    };

    const submitHandler = (e: React.FormEvent) => { 
        e.preventDefault();

        if (user.username.length > 0 && user.password.length > 0) {
            setIsLoading(true)
            axios
            .post(`${process.env.REACT_APP_ROOT_URL}auth/signup`, user)
            .then((res) => {
                setUser({
                    username: "",
                    password: ""
                })
                setError("");
                setIsLoading(false)
                props.history.push(`/${user.username}`);
            })
            .catch((err) => {
                setError("There was an error. Try again.");
                setIsLoading(false)
                console.log(err);
            })
        } else {
            setError("Provide email and password")
        }
    };

    return (
        <div className={classes.loginContainer}>
            <div className={classes.loginCard}>
                <form className={classes.form} onSubmit={submitHandler}>
                    <h2>Sign Up!</h2>
                    {error ? <p className={classes.error}>{error}</p> : null}
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
                    <button className={classes.button} type="submit">
                        {
                            isLoading ?  <Loader
                            type="TailSpin"
                            color="white"
                            height={20}
                            width={20}
                            timeout={3000} //3 secs
                    
                         /> : "Sign Up"
                        }
                    </button>
                    <p>Already a user? <Link to="/login">Log In</Link></p>
                </form>
            </div>
        </div>
    )
}
export default Signup;