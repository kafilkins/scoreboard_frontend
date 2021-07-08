import React from 'react' 
import '../App.css';
import { NavBarData } from './NavBarData'
import { FooterData } from './NavBarData'
import { Link } from 'react-router-dom'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CopyrightIcon from '@material-ui/icons/Copyright';


debugger

function NavBar() {
    return (
        <div className="NavBar">
            <ul className="NavBarList">
                {NavBarData.map((val, key) => {
                    return (
                        <li 
                            key={key} 
                            className="row" 
                            id={window.location.pathname === val.link ? "active" : ""} 
                            onClick={() => {window.location.pathname = val.link}}>
                        <div id="icon">{val.icon}</div>
                        <div id="title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>
            <div className="Footer">
                <ul className="FooterList">
                <li><Link className="aboutLink" to="/about">About</Link></li>
                <li><Link className="linkedInLogo" to="https://se.linkedin.com/pub/keith-filkins/11/667/8b1?trk=biz_employee_pub">
                <LinkedInIcon/></Link></li>
                <li><Link className="copyright"><CopyrightIcon/></Link></li>
                </ul>
            </div>
        </div>
    ) 
}

export default NavBar;