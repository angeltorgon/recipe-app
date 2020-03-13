import React, { useEffect, useState } from 'react';
import './App.scss';
import { Route, Switch, withRouter } from 'react-router-dom';
// import ProtectedRoute from './utils/ProtectedRoute';


// COMPONENTS
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App(props: any) {
  // const user = "Angel";
  const [ username, setUsername ] = useState(() => {
    if(localStorage.getItem("username")) {
      return localStorage.getItem("username")
    } 
    return ""
  });
  const [ loggedIn, setLoggedIn ] = useState(false);

  const changeHandler = (e: any) => { 
      e.preventDefault();
      setUsername(e.target.value);
  };

  const submitHandler = (e: any) => { 
      e.preventDefault();
      setLoggedIn(true);
      // localStorage.setItem("username", username);
      props.history.push(`/${username}`);
  };


  return (
    <div className="App">
      <Nav username={username} />
      <Switch >
        {/* <ProtectedRoute path="/:username" component={Dashboard}/> */}
        <Route path="/:username" render={(props) => <Dashboard {...props} username={username}/>} />
        <Route path="/" render={(props) => <Login {...props} submitHandler={submitHandler} changeHandler={changeHandler} username={username}/>} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
