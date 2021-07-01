import React from 'react';

const Teams = (props) => {
    if (props.teams && props.teams.length <= 0){
        return <div>LOADING</div>
     }

     return (
         <div class="container">
            <div class="row">
                <div class="col-12">
                    {props.teams.map(team => <img src={team.logo} alt={team.city} width="200" height="200"></img> )}
                    </div>
                <div class="w-100"></div>
            </div>
        </div>
     )  
}

export default Teams 