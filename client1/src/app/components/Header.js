import React from "react";
import {NavLink} from "react-router-dom"


export class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">

                        <ul className="nav navbar-nav">

                            <li><NavLink to="/">Home </NavLink></li>
                            <li><NavLink to="/aboutus">AboutUs</NavLink></li>
                            <li><NavLink to="/MovieApp">View Movies</NavLink></li>
                            <li><NavLink to="/AddMovie">Add Movies</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}