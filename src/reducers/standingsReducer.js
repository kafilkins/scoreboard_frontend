
export default function standingsReducer(state = [], action) {

    switch(action.type) {
        
        case "FETCH_STANDINGS":
            return [...state,
                ...action.payload]

    default:
        return state
    }
}