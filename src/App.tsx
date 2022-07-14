import React from 'react';

import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first:'kamal',
    last:'jamal'
  }

  const nameList = [
    {
      first:'kamal',
      last:'jamal'
    }, 
    {
      first:'tomal',
      last:'fomal'
    },
    {
      first:'abid',
      last:'dabid'
    },
    {
      first:'rabid',
      last:'sabid'
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Greet name="kamal passa" isLogdIn={true}></Greet>
        <Person name={personName}></Person>
        <PersonList nameList = {nameList}></PersonList>
      </header>
    </div>
  );
}

export default App;
