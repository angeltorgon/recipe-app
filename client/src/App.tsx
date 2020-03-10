import React from 'react';
import './App.css';

function App() {
  const user = "Angel";

  return (
    <div className="App">
      <nav className="nav-container">
        <h1>Recipes App</h1>
        <div>
          <p>Hello, {`${user}`}</p>
        </div>
      </nav>
    </div>
  );
}

export default App;
