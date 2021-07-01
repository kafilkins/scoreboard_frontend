import React from 'react'
import Rosters from '../components/Rosters'
import { connect } from 'react-redux';
import { fetchRosters } from '../actions/fetchRosters';

class RostersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchRosters()
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
    const groupBy = keys => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = keys.map(key => obj[key]).join('-');
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

  
  const LAD = groupBy(["team"]);
  const CIN = groupBy(["team" === "CIN"]);
  const TOR = groupBy(["team" === "TOR"]);
  const PIT = groupBy(["team" === "PIT"]);
  const KC = groupBy(["team" === "KC"]);
  const CHI = groupBy(["team" === "CHI"]);
  const CLE = groupBy(["team" === "CLE"]);
  const TB = groupBy(["team" === "TB"]);
  const PHI = groupBy(["team" === "PHI"]);
  const SEA = groupBy(["team" === "SEA"]);
  const ARI = groupBy(["team" === "ARI"]);
  const SF = groupBy(["team" === "SF"]);
  const CHW = groupBy(["team" === "CHW"]);
  const DET = groupBy(["team" === "DET"]);
  const NYM = groupBy(["team" === "NYM"]);
  const BAL = groupBy(["team" === "BAL"]);
  const MIN = groupBy(["team" === "MIN"]);
  const LAA = groupBy(["team" === "LAA"]);
  const MIA = groupBy(["team" === "MIA"]);
  const COL = groupBy(["team" === "COL"]);
  const OAK = groupBy(["team" === "OAK"]);
  const BOS = groupBy(["team" === "BOS"]);
  const ATL = groupBy(["team" === "ATL"]);
  const TEX = groupBy(["team" === "TEX"]);
  const NYY = groupBy(["team" === "NYY"]);
  const HOU = groupBy(["team" === "HOU"]);
  const STL = groupBy(["team" === "STL"]);
  const MIL = groupBy(["team" === "MIL"]);
  const SD = groupBy(["team" === "SD"]);
  const WSH = groupBy(["team" === "WSH"]);

    debugger
    return {
        rosters: state.rosters
    }
}

export default connect(mapStateToProps, {fetchRosters})(RostersContainer); 





