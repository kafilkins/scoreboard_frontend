import React from 'react';

const News = (props) => {
    
    return (
        <div>
            {props.news.map(info => <li key={info.id}>{info.title}</li> )}
        </div>
    )
}

export default News