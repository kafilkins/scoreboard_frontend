export function fetchTeams() {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/api/v1/teams')
        .then(response => response.json())
        .then(teams => dispatch({ type: 'FETCH_TEAMS', payload: teams }))
    };
} 

