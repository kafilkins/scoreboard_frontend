
export default function scoresReducer(state = {scores: []}, action) {

    switch(action.type) {
        
        case "FETCH_SCORES":
            return {scores: action.payload}

    default:
        return state
    }
}