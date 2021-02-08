import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = () => {
  const [personsState, setPersonsState] = useState({
    persons : [
      {name:"Pedro", age: '19'},
      {name:"Juliana", age: '24'},
      {name:"Giovana", age: '19'},
    ]
  })

  const [otherState, setOtherState] = useState({
    otherAttribute: 'something'
  })


  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name:"Pedro Arnold", age: '19'},
        {name:"Juliana", age: '24'},
        {name:"Giovana", age: '19'},
      ]
    })
  } 

  return (
    <div className="App">
      <h1>Hi, i'm a react app</h1>
      <button onClick={switchNameHandler}>Switch a name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>
        My hobbies: coding
      </Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
}

export default App;
