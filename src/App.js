import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    teams: [
      { name: 'Messi', team:'Barca'},
      { name: 'Lewy', team:'Bayern'},
      { name: 'Salah', team:'Liverpool'}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Click działa');
    this.setState({
      teams: [
        { name: newName, team:'Barca'},
        { name: 'Salah', team:'Bayern'},
        { name: 'Messi', team:'FC Pasionki'}
      ],
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      teams: [
        { name: 'Messi', team:'Barca'},
        { name: event.target.value, team:'Bayern'},
        { name: 'Lewy', team:'FC Pasionki'}
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid orange',
      padding: '8px',
      cursor: 'pointer'
    };

    let teams = null;

    if(this.state.showPersons) {
      teams = (
        <div>
          {this.state.teams.map(team => {
            return <Person 
            name={team.name}
            team={team.team} />
          })}
          </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, Top players list!</h1>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Switch teams</button>
          {teams}
      </div>
    );
  }
}

export default App;
