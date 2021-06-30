import { combineReducers } from 'redux';
import teamReducer from './teamReducer';
import rostersReducer from './rostersReducer';
import newsReducer from './newsReducer';
import standingsReducer from './standingsReducer';
import scoresReducer from './scoresReducer';

export default combineReducers({
    teams: teamReducer,
    rosters: rostersReducer,
    news: newsReducer,
    standings: standingsReducer,
    scores: scoresReducer
})