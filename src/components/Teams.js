import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Teams extends Component  {

    render() { 
        return (
            <div className="teams_container">
                <div className="row">
                    <div className="col-12">
                        {this.props.teams.map((team, key) => {
                            return (
                            <Link to={`/rosters/${team.key}`}><img id={key} className="team" 
                                 src={team.logo} alt={team.key} 
                                width="200" height="200"></img>
                            </Link> 
                            )} 
                            )}
                    </div>
                <div className="w-100"></div>
                </div>
        </div>
        )
    }
} 

export default Teams;