 import React from 'react' 
 import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
 import ScoreIcon from '@material-ui/icons/Score';
 import ShowChartIcon from '@material-ui/icons/ShowChart';
 import HomeIcon from '@material-ui/icons/Home';
 import InfoIcon from '@material-ui/icons/Info';
 

 export const NavBarData = [
     {
        title:"Home",
        icon: <HomeIcon/>,
        link: '/news'
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
 export const FooterData = [
     {
         title: "About",
         icon: <InfoIcon/>,
         link: '/about'
     }
 ]

 export const RosterData = [
     {
         link: '/rosters'
     }
 ]