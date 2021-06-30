import React from 'react';

const Teams = (props) => {
    if (!props.teams)
            return <p> Loading...</p>
            else
    return (
        <div>
            {props.teams.map(team => <li key={team.id}>{team.name}</li> )}
        </div>
        
    )
}

export default Teams 