import React from 'react'
import Scores from '../components/Scores'
import { connect } from 'react-redux';
import { fetchScores } from '../actions/fetchScores';

class ScoresContainer extends React.Components {

    componentDidMount() {
        this.props.fetchScores()
    }

    render() {

        return(
            <div className="Scores">
                <Scores scores={this.props.scores}/>
            </div>
        )
    }
}

const mapStateToProps = state  => {
    return {
        scores: state.scores
    }
}

export default connect(mapStateToProps, {fetchScores})(ScoresContainer);