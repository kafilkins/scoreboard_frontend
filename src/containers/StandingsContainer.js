import React from 'react'
import Standings from '../components/Standings'
import { connect } from 'react-redux';
import { fetchStandings } from '../actions/fetchStandings';

class StandingsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchStandings()
    }

    render() {

        return(
            <div className="Standings">
                <Standings standings={this.props.standings}/>
            </div>
        )
    } 
}

const mapStateToProps = state  => {
    return {
        standings: state.standings
    }
}

export default connect(mapStateToProps, {fetchStandings})(StandingsContainer);