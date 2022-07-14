import React from 'react';

import './App.css';
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greet name="kamal passa" isLogdIn={true}></Greet>
      </header>
    </div>
  );
}

export default App;
