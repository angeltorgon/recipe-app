import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';


// COMPONENTS
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  // const user = "Angel";
  const user = {name: localStorage.getItem("username")} 

  return (
    <div className="App">
      <Nav user={user}/>
      <Switch >
        <Route path="/:username" component={Dashboard} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
