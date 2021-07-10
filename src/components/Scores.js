import React from 'react';

const Scores = (props) => {
    
    if (!props.scores)
            return <p> Loading...</p>
            else

    return (
        <div className="grid-container">
            {props.scores.map((score) => {
                return (  
            <div>
                <table>
                    <tr>
                        <th>Teams</th>
                        <th>Runs</th>
                    </tr>
                    <tr>
                    <td>{score.hometeam}</td>
                    <td>{score.hometeamruns}</td>
                    </tr>
                    <tr>
                        <td>{score.awayteam}</td>
                        <td>{score.awayteamruns}</td>
                    </tr>
                </table>
            </div>
        )})}
    </div>
    )
}

export default Scores 

/*
day
awayteam
hometeam
awayteamruns
hometeamruns
{props.scores.map(score => <li key={score.id}>{score.day}</li> )}
*/