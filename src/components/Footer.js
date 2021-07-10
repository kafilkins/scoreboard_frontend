import React from 'react' 
import '../App.css';
import { Link } from 'react-router-dom'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CopyrightIcon from '@material-ui/icons/Copyright';

 function Footer() {
    return (
        <div className="footer">
                <ul className="footerList">
                <li><Link className="aboutLink" to="/about">About</Link></li>
                <li><Link className="linkedInLogo" to="https://se.linkedin.com/pub/keith-filkins/11/667/8b1?trk=biz_employee_pub">
                <LinkedInIcon/></Link></li>
                <li><Link className="copyright"><CopyrightIcon/></Link></li>
                </ul>
            </div>
    ) 
}

export default Footer;



















