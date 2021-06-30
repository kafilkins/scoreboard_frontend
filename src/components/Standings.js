import React from 'react';

const Standings = (props) => {


    let _ = require ('underscore')
    let groupedByLeague = _.groupBy(props.standings, function(team) {
         return team.division && team.league;
     });
     debugger
                                         
    return (
        <div>
            <div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"> AL - Team</th>
                            <th scope="col"> Wins</th>
                            <th scope="col"> Losses</th>
                        </tr>
                    </thead>
                    <tbody>
                    {groupedByLeague.AL.map(team => 
                        <tr>
                            <td key={team.id}>{team.city}</td>
                            <td key={team.id}>{team.wins}</td>
                            <td key={team.id}>{team.losses}</td>
                        </tr> )}
                    </tbody>
                </table>
            </div>
            <div>
                <table class="table table-striped">
                <thead>
                        <tr>
                            <th scope="col"> NL - Team</th>
                            <th scope="col"> Wins</th>
                            <th scope="col"> Losses</th>
                        </tr>
                </thead>
                <tbody>
                    {groupedByLeague.NL.map(team => 
                        <tr>
                            <td key={team.id}>{team.city}</td>
                            <td key={team.id}>{team.wins}</td>
                            <td key={team.id}>{team.losses}</td>
                        </tr> )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Standings 

