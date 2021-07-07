 import React from 'react' 
 import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
 import ScoreIcon from '@material-ui/icons/Score';
 import InfoIcon from '@material-ui/icons/Info';
 import ShowChartIcon from '@material-ui/icons/ShowChart';
 import TeamsContainer from '../containers/TeamsContainer';
 import { Link } from 'react-router-dom';

 export const NavBarData = [
     {
         title: "Teams",
         icon: <SportsBaseballIcon/>,
         link: <Link to={TeamsContainer}></Link>
     },
     {
        title: "Scores",
        icon: <ScoreIcon/>,
        link: ""
    },
    {
        title: "News",
        icon: <InfoIcon/>,
        link: ""
    },
    {
        title: "Standing",
        icon: <ShowChartIcon/>,
        link: ""
    }

 ]