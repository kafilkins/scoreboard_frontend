import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import TeamsContainer from './containers/TeamsContainer';
import RostersContainer from './containers/RostersContainer';
import NewsContainer from './containers/NewsContainer';
import ScoresContainer from './containers/ScoresContainer';
import StandingsContainer from './containers/StandingsContainer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <TeamsContainer />
        <RostersContainer />
        <NewsContainer />
        <ScoresContainer />
        <StandingsContainer />
      </div>
    );
  }
}

export default App
