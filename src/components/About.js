import React from 'react';
import image from '../images/IMG_3112.jpeg'

const About = () => {

    return (
        <div className="about">
            <h2>Who Am I?</h2>
            <p className="about-me">I was born and raised in Boston,MA. After completing my Bachelor of Science, double majoring in Finance & Management, I went to work for over 10 years in corporate American, holding various sales positions. After experiencing burnout, I decided to transition my career path, from a client-facing position to more of a technical position. I enrolled with Flatiron School, taking part in their software-enginnering course and the rest is history. Feel free to check out my LinkedIn page (link below) for more information and any inqueries.</p>
            <img className="me" src={image} alt="Keith Filkins"></img>
        </div>
    )
}

export default About