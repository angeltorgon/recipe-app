import React, { useEffect, useState } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';


// COMPONENTS
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  // const user = "Angel";
  const [ username, setUsername ] = useState("");

  const changeHandler = (e: any) => { 
      e.preventDefault();
      setUsername(e.target.value);
  };

  const submitHandler = (e: any) => { 
      e.preventDefault();
      console.log("Submitting...")
  };


  return (
    <div className="App">
      <Nav username={username}/>
      <Switch >
        <Route path="/:username" component={Dashboard} />
        <Route path="/" render={() => <Login submitHandler={submitHandler} changeHandler={changeHandler} username={username}/>} />
      </Switch>
    </div>
  );
}

export default App;
