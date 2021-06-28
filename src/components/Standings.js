import React from 'react';

const Standings = (props) => {
    
    return (
        <div>
            {props.standings.map(standing => <li key={standing.id}>{standing.city}</li> )}
        </div>
    )
}

export default Standings