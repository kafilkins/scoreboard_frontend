export default function rostersReducer(state = {rosters: []}, action) {

    switch(action.type) {

        case "FETCH_ROSTERS":
            return {rosters: action.payload}

        default:
            return state
    }
}