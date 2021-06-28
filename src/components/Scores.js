import React from 'react';

const Scores = (props) => {
    
    return (
        <div>
            {props.scores.map(score => <li key={score.id}>{score.day}</li> )}
        </div>
    )
}

export default Scores