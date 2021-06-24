import React from 'react';
import logo from './logo.svg';
import './App.css';
import{ connect } from 'react-redux';
import TeamsContainer from './containers/TeamsContainer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <TeamsContainer />
      </div>
    );
  }
}

export default App
