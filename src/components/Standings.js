import React from 'react';

const Standings = (props) => {

    if (props.standings && props.standings.length <= 0){
        return <div>LOADING</div>
     }
                                              
    return (
        <div class="container">
            <table class="table table-striped">
                <thead className="thead">
                    <tr>
                        <th scope="col"> AL - Team</th>
                        <th scope="col"> Wins</th>
                        <th scope="col"> Losses</th>
                    </tr>
                </thead>
                <tbody>
                    <caption>Central</caption>
                    <tr>
                        <td key={props.standings[0].id}>{props.standings[0].city}</td>
                        <td key={props.standings[0].id}>{props.standings[0].wins}</td>
                        <td key={props.standings[0].id}>{props.standings[0].losses}</td>
                    </tr>
                    <tr>
                        <td key={props.standings[1].id}>{props.standings[1].city}</td>
                        <td key={props.standings[1].id}>{props.standings[1].wins}</td>
                        <td key={props.standings[1].id}>{props.standings[1].losses}</td>
                    </tr>
                    <tr>
                        <td key={props.standings[2].id}>{props.standings[2].city}</td>
                        <td key={props.standings[2].id}>{props.standings[2].wins}</td>
                        <td key={props.standings[2].id}>{props.standings[2].losses}</td>
                    </tr>
                    <tr>
                        <td key={props.standings[3].id}>{props.standings[3].city}</td>
                        <td key={props.standings[3].id}>{props.standings[3].wins}</td>
                        <td key={props.standings[3].id}>{props.standings[3].losses}</td>
                    </tr>
                    <tr>
                        <td key={props.standings[4].id}>{props.standings[4].city}</td>
                        <td key={props.standings[4].id}>{props.standings[4].wins}</td>
                        <td key={props.standings[4].id}>{props.standings[4].losses}</td>
                    </tr>
                    <caption>East</caption>
                    <tr>
                        <td key={props.standings[5].id}>{props.standings[5].city}</td>
                        <td key={props.standings[5].id}>{props.standings[5].wins}</td>
                        <td key={props.standings[5].id}>{props.standings[5].losses}</td>
                    </tr>
                    <tr>
                        <td key={props.standings[6].id}>{props.standings[6].city}</td>
                        <td key={props.standings[6].id}>{props.standings[6].wins}</td>
                        <td key={props.standings[6].id}>{props.standings[6].losses}</td>
                    </tr>
                    <tr>
                        <td key={props.standings[7].id}>{props.standings[7].city}</td>
                        <td key={props.standings[7].id}>{props.standings[7].wins}</td>
                        <td key={props.standings[7].id}>{props.standings[7].losses}</td>
                    </tr>
                    <tr>
                        <td key={props.standings[8].id}>{props.standings[8].city}</td>
                        <td key={props.standings[8].id}>{props.standings[8].wins}</td>
                        <td key={props.standings[8].id}>{props.standings[8].losses}</td>
                    </tr>
                    <tr>
                        <td key={props.standings[9].id}>{props.standings[9].city}</td>
                        <td key={props.standings[9].id}>{props.standings[9].wins}</td>
                        <td key={props.standings[9].id}>{props.standings[9].losses}</td>
                    </tr>
                    <caption>West</caption>
                    <tr>
                        <td key={props.standings[10].id}>{props.standings[10].city}</td>
                        <td key={props.standings[10].id}>{props.standings[10].wins}</td>
                        <td key={props.standings[10].id}>{props.standings[10].losses}</td>
                    </tr>
                    <tr>
                        <td key={props.standings[11].id}>{props.standings[11].city}</td>
                        <td key={props.standings[11].id}>{props.standings[11].wins}</td>
                        <td key={props.standings[11].id}>{props.standings[11].losses}</td>
                    </tr>
                    <tr>
                        <td key={props.standings[12].id}>{props.standings[12].city}</td>
                        <td key={props.standings[12].id}>{props.standings[12].wins}</td>
                        <td key={props.standings[12].id}>{props.standings[12].losses}</td>
                    </tr>
                    <tr>
                        <td key={props.standings[13].id}>{props.standings[13].city}</td>
                        <td key={props.standings[13].id}>{props.standings[13].wins}</td>
                        <td key={props.standings[13].id}>{props.standings[13].losses}</td>
                    </tr>
                    <tr>
                        <td key={props.standings[14].id}>{props.standings[14].city}</td>
                        <td key={props.standings[14].id}>{props.standings[14].wins}</td>
                        <td key={props.standings[14].id}>{props.standings[14].losses}</td>
                    </tr>
                </tbody><br></br>
                <thead className="thead">
                    <tr>
                        <th scope="col"> NL - Team</th>
                        <th scope="col"> Wins</th>
                        <th scope="col"> Losses</th>
                    </tr>
                </thead>
                <tbody>
                    <caption>Central</caption>
                    <tr>
                        <td key={props.standings[15].id}>{props.standings[15].city}</td>
                        <td key={props.standings[15].id}>{props.standings[15].wins}</td>
                        <td key={props.standings[15].id}>{props.standings[15].losses}</td>
                    </tr>
                    <tr>
                        <td key={props.standings[16].id}>{props.standings[16].city}</td>
                        <td key={props.standings[16].id}>{props.standings[16].wins}</td>
                        <td key={props.standings[16].id}>{props.standings[16].losses}</td>
                    </tr>
                    <tr>
                        <td key={props.standings[17].id}>{props.standings[17].city}</td>
                        <td key={props.standings[17].id}>{props.standings[17].wins}</td>
                        <td key={props.standings[17].id}>{props.standings[17].losses}</td>
                    </tr>
                    <tr>
                        <td key={props.standings[18].id}>{props.standings[18].city}</td>
                        <td key={props.standings[18].id}>{props.standings[18].wins}</td>
                        <td key={props.standings[18].id}>{props.standings[18].losses}</td>
                    </tr>
                    <tr>
                        <td key={props.standings[19].id}>{props.standings[19].city}</td>
                        <td key={props.standings[19].id}>{props.standings[19].wins}</td>
                        <td key={props.standings[19].id}>{props.standings[19].losses}</td>
                    </tr>
                    <caption>East</caption>
                    <tr>
                        <td key={props.standings[20].id}>{props.standings[20].city}</td>
                        <td key={props.standings[20].id}>{props.standings[20].wins}</td>
                        <td key={props.standings[20].id}>{props.standings[20].losses}</td>
                    </tr>
                    <tr>
                        <td key={props.standings[21].id}>{props.standings[21].city}</td>
                        <td key={props.standings[21].id}>{props.standings[21].wins}</td>
                        <td key={props.standings[21].id}>{props.standings[21].losses}</td>
                    </tr>
                    <tr>
                        <td key={props.standings[22].id}>{props.standings[22].city}</td>
                        <td key={props.standings[22].id}>{props.standings[22].wins}</td>
                        <td key={props.standings[22].id}>{props.standings[22].losses}</td>
                    </tr>
                    <tr>
                        <td key={props.standings[23].id}>{props.standings[23].city}</td>
                        <td key={props.standings[23].id}>{props.standings[23].wins}</td>
                        <td key={props.standings[23].id}>{props.standings[23].losses}</td>
                    </tr>
                    <tr>
                        <td key={props.standings[24].id}>{props.standings[24].city}</td>
                        <td key={props.standings[24].id}>{props.standings[24].wins}</td>
                        <td key={props.standings[24].id}>{props.standings[24].losses}</td>
                    </tr>
                    <caption>West</caption>
                    <tr>
                        <td key={props.standings[25].id}>{props.standings[25].city}</td>
                        <td key={props.standings[25].id}>{props.standings[25].wins}</td>
                        <td key={props.standings[25].id}>{props.standings[25].losses}</td>
                    </tr>
                    <tr>
                        <td key={props.standings[26].id}>{props.standings[26].city}</td>
                        <td key={props.standings[26].id}>{props.standings[26].wins}</td>
                        <td key={props.standings[26].id}>{props.standings[26].losses}</td>
                    </tr>
                    <tr>
                        <td key={props.standings[27].id}>{props.standings[27].city}</td>
                        <td key={props.standings[27].id}>{props.standings[27].wins}</td>
                        <td key={props.standings[27].id}>{props.standings[27].losses}</td>
                    </tr>
                    <tr>
                        <td key={props.standings[28].id}>{props.standings[28].city}</td>
                        <td key={props.standings[28].id}>{props.standings[28].wins}</td>
                        <td key={props.standings[28].id}>{props.standings[28].losses}</td>
                    </tr>
                    <tr>
                        <td key={props.standings[29].id}>{props.standings[29].city}</td>
                        <td key={props.standings[29].id}>{props.standings[29].wins}</td>
                        <td key={props.standings[29].id}>{props.standings[29].losses}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
    }

export default Standings 



