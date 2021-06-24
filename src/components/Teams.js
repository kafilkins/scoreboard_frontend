import React from 'react';

const Teams = (props) => {
    
    return (
        <div>
            {props.teams.map(team => <li key={team.id}>{team.name}</li> )}
        </div>
    )
}

export default Teams