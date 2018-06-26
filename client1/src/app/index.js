import React from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./components/Home"
import { AddMovie } from "./components/AddMovie"
import { AboutUs } from "./components/AboutUs"
import {Header} from "./components/Header"
import {MovieApp} from "./components/MovieApp"

class App extends React.Component{

    render(){
        return (
            <Router>
                <div>
                    <Header/>
                    <Route exact path="/" component={Home} />
                    <Route path="/aboutus" component={AboutUs} />
                    <Route path="/MovieApp" component={MovieApp} />
                    <Route path="/AddMovie" component={AddMovie} />
                </div>
            </Router>

        )
    }
}
render(<App/>,document.getElementById("app"));