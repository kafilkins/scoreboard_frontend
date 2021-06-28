export function fetchNews() {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/api/v1/news')
        .then(response => response.json())
        .then(news => dispatch({ type: 'FETCH_NEWS', payload: news }))
    };
}