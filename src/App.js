import React from 'react';
import './App.css';
import TeamsContainer from './containers/TeamsContainer';
import RostersContainer from './containers/RostersContainer';
import NewsContainer from './containers/NewsContainer';
import ScoresContainer from './containers/ScoresContainer';
import StandingsContainer from './containers/StandingsContainer';
import NavBar from './components/NavBar';
//import { Navbar } from 'react-bootstrap';

class App extends React.Component {

  render() {
    return (
      <div className="App">  
      <NavBar/>,
      <TeamsContainer />
      </div>
    );
  }
}

export default App;

//<StandingsContainer />
//      <RostersContainer />,
//      <NewsContainer />,
//      <ScoresContainer />,
//     <TeamsContainer />

