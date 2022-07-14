import React from 'react';

import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';

function App() {
  const personName = {
    first:'kamal',
    last:'jamal'
  }
  return (
    <div className="App">
      <header className="App-header">
        <Greet name="kamal passa" isLogdIn={true}></Greet>
        <Person name={personName}></Person>
      </header>
    </div>
  );
}

export default App;
