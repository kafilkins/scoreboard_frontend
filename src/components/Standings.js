import React from 'react';
import _ from "lodash";

const Standings = (props) => {

    let league = _.groupBy(props.standings, "league")

    let ALDivision = _.groupBy(league.AL, "division")

    let NLDivision = _.groupBy(league.NL, "division")


    if (props.standings && props.standings.length <= 0){
        return <div><h1>LOADING</h1></div> 
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
                        {ALDivision.Central.map((team, key) => {
                            return (
                                <tr>
                                <td key={key}>{team.city}</td>
                                <td key={key}>{team.wins}</td>
                                <td key={key}>{team.losses}</td>
                                </tr>
                            )})
                        }
                    <caption>East</caption>
                        {ALDivision.East.map((team, key) => {
                            return (
                                <tr>
                                <td key={key}>{team.city}</td>
                                <td key={key}>{team.wins}</td>
                                <td key={key}>{team.losses}</td>
                                </tr>
                            )})
                        }
                    <caption>West</caption>
                        {ALDivision.West.map((team, key) => {
                                return (
                                    <tr>
                                    <td key={key}>{team.city}</td>
                                    <td key={key}>{team.wins}</td>
                                    <td key={key}>{team.losses}</td>
                                    </tr>
                                )})
                        }
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
                        {NLDivision.Central.map((team, key) => {
                                return (
                                    <tr>
                                    <td key={key}>{team.city}</td>
                                    <td key={key}>{team.wins}</td>
                                    <td key={key}>{team.losses}</td>
                                    </tr>
                                )})
                        }
                    <caption>East</caption>
                        {NLDivision.East.map((team, key) => {
                                return (
                                    <tr>
                                    <td key={key}>{team.city}</td>
                                    <td key={key}>{team.wins}</td>
                                    <td key={key}>{team.losses}</td>
                                    </tr>
                                )})
                        }
                    <caption>West</caption>
                        {NLDivision.West.map((team, key) => {
                                return (
                                    <tr>
                                    <td key={key}>{team.city}</td>
                                    <td key={key}>{team.wins}</td>
                                    <td key={key}>{team.losses}</td>
                                    </tr>
                                )})
                        }
                </tbody>
            </table>
        </div>
        )
    }

export default Standings 



