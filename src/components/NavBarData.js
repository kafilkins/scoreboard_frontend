 import React from 'react' 
 import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
 import ScoreIcon from '@material-ui/icons/Score';
 import ShowChartIcon from '@material-ui/icons/ShowChart';
 import HomeIcon from '@material-ui/icons/Home';
 
 export const NavBarData = [
     {
        title:"Home",
        icon: <HomeIcon/>,
        link: '/'
     },
     {
         title: "Teams",
         icon: <SportsBaseballIcon/>,
         link: '/teams'
     },
     {
        title: "Scores",
        icon: <ScoreIcon/>,
        link: "/scores"
    },
    {
        title: "Standing",
        icon: <ShowChartIcon/>,
        link: "/standings"
    }
 ]
