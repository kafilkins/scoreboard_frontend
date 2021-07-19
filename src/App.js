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
import About from './components/About';

class App extends React.Component {

  render() {
    return (
      <div className="App">  
      <NavBar/>
      <Route exact path="/teams" component={TeamsContainer} />
      <Route exact path="/" component={NewsContainer} />
      <Route exact path="/scores" component={ScoresContainer} />
      <Route exact path="/standings" component={StandingsContainer} />
      <Route exact path="/rosters/:key" component={RostersContainer} />
      <Route exact path="/about" component={About} />
      <Footer/>
      </div>
    );
  }
}

export default App;


