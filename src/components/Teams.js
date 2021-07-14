import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import RostersContainer from '../containers/RostersContainer'
import Rosters from './Rosters';

class Teams extends Component  {

        constructor() {
        super();

        this.state = {
        team: ''
        }
    }

    handleClick = (e) => {
        let newTeam = e.target.alt 
        this.setState({
             team: newTeam
        })
        debugger
    }

    render() {
        debugger 
        return (
            <div className="teams_container">
                <div className="row">
                    <div className="col-12">
                        {this.props.teams.map((team, key) => {
                            return (
                            <Link to={RostersContainer}><img id={key} className="team" 
                                onClick={this.handleClick} src={team.logo} alt={team.key} 
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

const mapStateToProps = state => {
    return {
        team: state.team 
    }
}


export default connect(mapStateToProps)(Teams);

/*<Route path="/rosters" component={Container} />*/