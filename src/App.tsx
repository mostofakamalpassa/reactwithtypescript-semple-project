import React from 'react';

import './App.css';
import { Buttons } from './components/Buttons';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { MyStatus } from './components/MyStatus';
import { Oscar } from './components/OScar';
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
        {/* <Greet name="kamal passa" isLogdIn={true}></Greet>
        <Person name={personName}></Person>
        <PersonList nameList = {nameList}></PersonList>
        <MyStatus status='loading'></MyStatus> */}
        <Heading>
          <p>Hello Bangladesh</p>
        </Heading>
        
       <Oscar>
          <Heading>
              <h2>Children Property under Heading Methods</h2>
          </Heading>
       </Oscar>

       <Buttons handleClick={(event, id) =>{ console.log("Button event click", event, id)}}></Buttons>

      </header>
    </div>
  );
}

export default App;
