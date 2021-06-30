export default function rostersReducer(state = [], action) {

    switch(action.type) {

        case "FETCH_ROSTERS":
            return [
                ...state,
                ...action.payload
            ]

        default:
            return state
    }
}