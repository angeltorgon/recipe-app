import React from 'react';
import './App.scss';

// COMPONENTS
import Nav from './components/Nav';

function App() {
  // const user = "Angel";
  const user = {name: "Angel"};

  return (
    <div className="App">
      <Nav user={user}/>
    </div>
  );
}

export default App;
