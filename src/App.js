import React from 'react';
import './App.css';
import TeamsContainer from './containers/TeamsContainer';
import NewsContainer from './containers/NewsContainer';
import ScoresContainer from './containers/ScoresContainer';
import StandingsContainer from './containers/StandingsContainer';
import RostersContainer from './containers/RostersContainer';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';
import Footer from './components/Footer';

class App extends React.Component {

  render() {
    return (
      <div className="App">  
      <NavBar/>
      <Route path="/teams" component={TeamsContainer} />
      <Route path="/news" component={NewsContainer} />
      <Route path="/scores" component={ScoresContainer} />
      <Route path="/standings" component={StandingsContainer} />
      <Route path="/rosters/:key" component={RostersContainer} />
      <Footer/>
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

