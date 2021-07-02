import React from 'react';
<link href="css/styles.css" rel="stylesheet" />

const NavBar = () => {
    return (
        <div>
            <head>
                <title>Scorebord NavBar</title>
            </head>
            <body>
                <div class="d-flex" id="wrapper">
                    {/*-- Sidebar --*/} 
                    <div class="border-end bg-white" id = "sidebar-wrapper">
                        <div class="sidebar-heading border-bottom bg-light">Teams</div>
                        <div class="list-group list-group-flush"> 
                        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="">Team</a>
                        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="">Scores</a>
                        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="">News</a>
                        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="">Standings</a>
                        </div>
                    </div>
                </div>
                <div id="page-content-wrapper">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                        <div class="container-fluid">
                            <button class="btn btn-primary" id="sidebarToggle">Options</button>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                                    <li class="nav-item active"><a class="nav-link" href="">Home</a></li>
                                    <li class="nav-item"><a class="nav-link" href="">About</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/*-- Page Content --*/}
                    <div class="containter-fluid"></div>
                </div>
            </body>

        </div>
    )
}

export default NavBar

