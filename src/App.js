import React, { Component } from 'react';
import RandomUser from './components/RandomUser';
import UserData from './UserData';
import './App.css';

class App extends Component {
  state = {
    userData: UserData,
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Random User</h1>
        </header>
        <RandomUser userData={this.state.userData.results[0]}/>
      </div>
    );
  }
}

export default App;
