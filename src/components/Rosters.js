import React from 'react';

const Rosters = (props) => {
    
    return (
        <div>
            {props.rosters.map(roster => <li key={roster.id}>{roster.firstname}</li> )}
        </div>
    )
}

export default Rosters