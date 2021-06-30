
export default function teamReducer(state = [], action) {

    switch(action.type) {
        
        case "FETCH_TEAMS":
            return [
                ...state, 
                 ...action.payload]

    default:
        return state
    }
}