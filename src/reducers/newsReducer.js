export default function newsReducer(state = {news: []}, action) {

    switch(action.type) {

        case "FETCH_NEWS":
            return {news: action.payload}

        default:
            return state
    }
}