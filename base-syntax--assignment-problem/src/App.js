import React, { Component } from 'react';
import './App.css';
import UserOutput from './Components/UserOutput/UserOutput'
import UserInput from './Components/UserInput/UserInput'

class App extends Component {
  state = {
    username: "Arnxld"
  }
  

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.changeUsernameHandler} currentName={this.state.username}/>
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username}/>
        <UserOutput username="Pedro"/>
      </div>
    );
  }
}

export default App;
