import React from 'react';

const Rosters = (props) => {
    
    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Position</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {props.rosters.map(roster => <tr>
                                                    <td>{roster.position}</td> 
                                                    <td>{roster.firstname}</td>
                                                    <td>{roster.lastname}</td>
                                                </tr>)}         
                </tbody>
            </table>
        </div>
    )
}

export default Rosters 

