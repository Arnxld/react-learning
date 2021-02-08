import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      {id:"asda", name:"Pedro Arnold", age: '19'},
      {id:"gdfgd", name:"Juliana", age: '24'},
      {id:"hdfb", name:"Giovana", age: '19'},
    ],
    otherAttribute: 'something',
    showPersons: false
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]

    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow})
  }

  deletePersonHandler = (index) => {
    const personsArr = [...this.state.persons]
    personsArr.splice(index, 1)

    this.setState({persons: personsArr})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      border: 'none',
      padding: '12px',
      borderRadius: '4px',
      fontSize: '16px',
      outline: 'none',
      marginBottom: '40px',
      fontWeight: 'bold'
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person 
                key={person.id}
                click={() => this.deletePersonHandler(index)} 
                name={person.name} 
                age={person.age}
                changed={(event) => this.changeNameHandler(event, person.id)}
              />
            )
          })}
        </div>
      )

      style.backgroundColor = 'red'
    }

    return (
      <div className="App">
        <h1>Hi, i'm a react app</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
