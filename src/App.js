import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import 'bulma/css/bulma.css';
import './App.css';

import { Button, Card, CardImage, Container, Hero, HeroBody, Title } from 'bloomer';

import RandomUser from './components/RandomUser';

class App extends Component {
  state = {
    userData: [],
  };

  loadData = async () => {
    const response = await fetch('https://randomuser.me/api/?results=10');
    const data = await response.json();
    return data;
  }

  handleClick = async () => {
    const userData = await this.loadData();
    
    this.setState({
      userData: userData.results,
    });
  };

  async componentDidMount() {
    const userData = await this.loadData();
    
    this.setState({
      userData: userData.results,
    });
  }

  render() {
    const { userData } = this.state;

    return (
      <div className="App">
        <Container isFluid>
          <Hero isColor='info' isSize='medium'>
            <HeroBody>
              <Container hasTextAlign='centered'>
                <Title>Random User</Title>
              </Container>
            </HeroBody>
          </Hero>
          {userData.length ? (
            <RandomUser userData={userData} />
            ) : (
              <p>No User Data</p>
            )}
          <Button isColor='info' onClick={this.handleClick}>Load More Users</Button>
        </Container>
      </div>
    );
  }
}

export default App;
