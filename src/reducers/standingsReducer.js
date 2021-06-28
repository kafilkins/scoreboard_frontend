
export default function standingsReducer(state = {standings: []}, action) {

    switch(action.type) {
        
        case "FETCH_STANDINGS":
            return {standings: action.payload}

    default:
        return state
    }
}