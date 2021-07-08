import React from 'react';

const Teams = (props) => {
    if (props.teams && props.teams.length <= 0){
        return <div>LOADING</div>
     }

     return (
         <div className="teams_container">
            <div className="row">
                <div className="col-12">
                    {props.teams.map(team => <img src={team.logo} alt={team.city} width="200" height="200"></img> )}
                    </div>
                <div className="w-100"></div>
            </div>
        </div>
     )  
}

export default Teams 