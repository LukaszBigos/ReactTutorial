
import React, { Component } from 'react';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {
  state = {
    username: 'Mike'
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div>
        <UserInput 
          changed={this.usernameChangedHandler}
          currentName={this.state.username}/> 
        <UserOutput name={this.state.username}/>
        <UserOutput name='Luki'/>
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import './App.css';
// import Person from './Person/Person';
// class App extends Component {
//   state = {
//     teams: [
//       { name: 'Messi', team:'Barca'},
//       { name: 'Lewy', team:'Bayern'},
//       { name: 'Salah', team:'Liverpool'}
//     ]
//   }

//   switchNameHandler = (newName) => {
//     // console.log('Click działa');
//     this.setState({
//       teams: [
//         { name: newName, team:'Barca'},
//         { name: 'Salah', team:'Bayern'},
//         { name: 'Messi', team:'FC Pasionki'}
//       ]
//     })
//   }

//   nameChangedHandler = (event) => {
//     this.setState({
//       teams: [
//         { name: 'Messi', team:'Barca'},
//         { name: event.target.value, team:'Bayern'},
//         { name: 'Lewy', team:'FC Pasionki'}
//       ]
//     })
//   }

//   render() {

//     const style = {
//       backgroundColor: 'white',
//       font: 'inherit',
//       border: '1px solid orange',
//       padding: '8px',
//       cursor: 'pointer'
//     };

//     return (
//       <div className="App">
//       <h1>Hi, Top players list!</h1>
//       <button 
//         style={style}
//         onClick={this.switchNameHandler.bind(this, 'Luki! ')}>Switch teams</button>
//       <Person name={this.state.teams[0].name} team={this.state.teams[0].team}/>
//       <Person 
//         name={this.state.teams[1].name} 
//         team={this.state.teams[1].team}
//         click={this.switchNameHandler.bind(this, 'Luki2')}
//         changed={this.nameChangedHandler} >Let's see for how long
//         </Person>
//       <Person name={this.state.teams[2].name} team={this.state.teams[2].team}/>
//       </div>
//     );
//   }
// }

// export default App;
