import React from 'react';

const News = (props) => {

    if (!props.news)
            return <p> Loading...</p>
            else
    
    return (
        <div>
            {props.news.map(info => <li key={info.id}>{info.title}</li> )}
        </div>
    )
}

export default News 