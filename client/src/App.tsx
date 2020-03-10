import React, { useEffect, useState } from 'react';
import './App.scss';
import { Route, Switch, withRouter } from 'react-router-dom';


// COMPONENTS
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App(props: any) {
  // const user = "Angel";
  const [ username, setUsername ] = useState("");

  const changeHandler = (e: any) => { 
      e.preventDefault();
      setUsername(e.target.value);
  };

  const submitHandler = (e: any) => { 
      e.preventDefault();
      props.history.push(`/${username}`);
  };


  return (
    <div className="App">
      <Nav {...props} />
      <Switch >
        <Route path="/:username" component={Dashboard} />
        <Route path="/" render={(props) => <Login {...props} submitHandler={submitHandler} changeHandler={changeHandler} username={username}/>} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
