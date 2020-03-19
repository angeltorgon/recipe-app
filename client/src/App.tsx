import React, { useEffect, useState } from 'react';
import './App.scss';
import { Route, Switch, withRouter } from 'react-router-dom';
// import ProtectedRoute from './utils/ProtectedRoute';

// COMPONENTS
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App(props: any) {

  return (
    <div className="App">
      <Nav />
      <Switch >
        {/* <ProtectedRoute path="/:username" component={Dashboard}/> */}
        <Route path="/:username" render={(props) => <Dashboard {...props} />} />
        <Route path="/" render={(props) => <Login {...props} />} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
