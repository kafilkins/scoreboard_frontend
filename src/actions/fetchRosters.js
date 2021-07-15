export function fetchRosters(id) {
    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/api/v1/rosters/${id}`)
        .then(response => response.json())
        .then(rosters => dispatch({ type: 'FETCH_ROSTERS', payload: rosters }))
    };
} 