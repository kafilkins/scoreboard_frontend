
export default function scoresReducer(state = [], action) {

    switch(action.type) {
        
        case "FETCH_SCORES":
        
            return [
                ...state,
                ...action.payload
            ]

    default:
        return state
    }
} 