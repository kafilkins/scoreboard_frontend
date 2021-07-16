export function fetchScores() {
    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/api/v1/scores`)
        .then(response => response.json())
        .then(scores => dispatch({ type: 'FETCH_SCORES', payload: scores }))
    };
} 