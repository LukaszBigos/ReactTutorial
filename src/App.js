import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    teams: [
      { id: '123312', name: 'Messi', team:'Barca'},
      { id: '123311232', name: 'Lewy', team:'Bayern'},
      { id: '123312131223', name: 'Salah', team:'Liverpool'}
    ],
    showPersons: false
  }


  nameChangedHandler = (event) => {
    this.setState({
      teams: [
        {  name: 'Messi', team:'Barca'},
        {  name: event.target.value, team:'Bayern'},
        {  name: 'Lewy', team:'FC Pasionki'}
      ]
    })
  }

  deleteTeamHandler = (personIndex) => {
    // const teams = this.state.teams.slice();
    const teams = [...this.state.teams];
    teams.splice(personIndex, 1);
    this.setState({teams: teams});
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
          {this.state.teams.map((team, index) => {
            return <Person
            click={() => this.deleteTeamHandler(index)}
            name={team.name}
            team={team.team} 
            key={team.id} />
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
