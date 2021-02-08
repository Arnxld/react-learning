import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    text: ''
  } 

  textChangeHandler = (event) => {
    const text = event.target.value
    this.setState({text})
  }

  charClickHandler = (event, index) => {
    const stateArr = [...this.state.text.split('')]

    stateArr.splice(index, 1)
    const newText = stateArr.join('')

    this.setState({text: newText})
  }


  render() {
    let letterComponents = null

    if (this.state.text.length) {
      const stateTextArray = this.state.text.split('')

      letterComponents = stateTextArray.map((letter, index) => (
        <CharComponent 
          key={index} 
          letterProp={letter}
          click={(event) => this.charClickHandler(event, index)}  
        />
        )
      )
    }

    return (
      <div className="App">
        <input type="text" onChange={(event) => this.textChangeHandler(event)} placeholder="type here" value={this.state.text}/>
        <p>{this.state.text.length}</p>
        <ValidationComponent lengthValidation={this.state.text.length}/>
        {letterComponents}
      </div>
    );
  }
}

export default App;
