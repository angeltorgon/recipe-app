import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles, Theme, createStyles, TextField } from '@material-ui/core';

// STYLES
// import './styles/login.scss';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    loginContainer: {
        backgroundImage: "url('https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        alignItems: "center", 
        flexDirection: "column",
        justifyContent: "center",
    },
    loginCard: {
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        border: "1px solid whitesmoke",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        maxWidth: "400px",
        margin: "0 auto",
        height: "400px",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        backgroundColor: "whitesmoke",
    },
    button: {
        height: "40px",
        margin: "20px",
        width: "200px",
        borderRadius: "5px",
        padding: "10px",
        color: "white",
        fontSize: "18px",
        backgroundColor: "rgb(0, 73, 114)",
        opacity: ".8"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      height: "40px",
      width: "100%",
      margin: "10px",
      fontSize: "4rem"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        margin: "10px 0",
        height: "100px",
        width: "300px",
        justifyContent: "center",
        alignItems: "center"
    },
    error: {
        color: "red"
    }
  }),
);


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