export function fetchStandings() {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/api/v1/standings')
        .then(response => response.json())
        .then(standings => dispatch({ type: 'FETCH_STANDINGS', payload: standings }))
    };
}