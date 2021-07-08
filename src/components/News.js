import React from 'react';

const News = (props) => {

    if (!props.news)
            return <p> Loading...</p>
            else
    
    return (
        <div className="news">
            {props.news.map((info, key) => {
                return (
                    <body>
                        <h2 className="newsTitle"> {info.title} </h2>
                        <p className="newsText"> {info.content} </p> 
                    </body>
                )
            })}
        </div>
    )
}

export default News 