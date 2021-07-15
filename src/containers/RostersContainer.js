import React from 'react'
import Rosters from '../components/Rosters'
import { connect } from 'react-redux';
import { fetchRosters } from '../actions/fetchRosters';

class RostersContainer extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.key
        this.props.fetchRosters(id)
    }

    render() {
        return(
            <div className="Rosters">
                <Rosters rosters={this.props.rosters}/>
            </div>
        )
    }
}



const mapStateToProps = state  => {
    return {
        rosters: state.rosters
    }
}

export default connect(mapStateToProps, {fetchRosters})(RostersContainer); 





