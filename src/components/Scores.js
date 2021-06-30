import React from 'react';

const Scores = (props) => {
    
    if (!props.scores)
            return <p> Loading...</p>
            else
    
    return (
        <div>
            {props.scores.map(score => <li key={score.id}>{score.day}</li> )}
        </div>
    )
}

export default Scores 