import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    teams: [
      { name: 'Messi', team:'Barca'},
      { name: 'Lewy', team:'Bayern'},
      { name: 'Salah', team:'Liverpool'}
    ]
  }

  switchNameHandler = () => {
    console.log('Click działa');
  }

  render() {
    return (
      <div className="App">
      <h1>Hi, Top players list!</h1>
      <button onClick={this.switchNameHandler}>Switch teams</button>
      <Person name={this.state.teams[0].name} team={this.state.teams[0].team}/>
      <Person name={this.state.teams[1].name} team={this.state.teams[1].team}>Let's see for how long</Person>
      <Person name={this.state.teams[2].name} team={this.state.teams[2].team}/>
      </div>
    );
  }
}

export default App;
