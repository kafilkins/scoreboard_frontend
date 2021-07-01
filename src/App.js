import React from 'react';
import './App.css';
import TeamsContainer from './containers/TeamsContainer';
import RostersContainer from './containers/RostersContainer';
import NewsContainer from './containers/NewsContainer';
import ScoresContainer from './containers/ScoresContainer';
import StandingsContainer from './containers/StandingsContainer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
      <RostersContainer />
      </div>
    );
  }
}

export default App;

//<StandingsContainer />
//      ,
//      <NewsContainer />,
//      <ScoresContainer />,
//     <TeamsContainer />

