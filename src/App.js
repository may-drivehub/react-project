import React, { Component } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <h2 className="App-title">Hello World !!</h2>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            This is dev branch. !!!!!!!!  Test Auto deploy
          </p>
          <Button bsStyle="warning" bsSize="large"> Test Button </Button>
          <Button bsStyle="warning" bsSize="large"> Test Button2 </Button>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
