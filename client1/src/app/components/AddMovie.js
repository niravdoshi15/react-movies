import React from "react";

import { AddMovieItem } from "./AddMovieItem"

import axios from "axios";

import _ from "lodash";



export class AddMovie extends React.Component {

    //Mandatory function



    constructor(props) {

        super(props);

        this.add = this.addMovie.bind(this)



    }


    //add movie 
    componentDidMount() {
        axios.get('http://localhost:8000/api/movies')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    items: response.data
                })
            }).catch(function (error) {
                console.log(error)
            })
    }
    addMovie(poster,title,description, year) {

        var data = {


            title: title,

            year: year,
            description:  description,
            poster: poster,

            runtime: "180min",

            genre: "Romantic",

            actors: ['srk', 'kajol'],

            directors: ['adi', 'karan'],

            writers: ['adi', 'karan'],

            music: ["mere", "mujhko"],

            singers: ["kumar", "udit"],

         

            language: ["hindi", "punjabi"],

            awards: ["Zee Cine", "Star dust"],

            

            trailer: "https://youtu.be/cmax1C1p660",

            production: "Chopra",

            reviews: [

                { reviewer_name: "Swapnil", rating: 4, dateof_review: "13 Oct 1997", comments: "Nice Movie" },

                { reviewer_name: "Sonu", rating: 5, dateof_review: "13 Oct 1997", comments: "Exc Movie" }

            ]


        }

        axios.post('http://localhost:8000/api/movies/',data)

            .then(response => {

                alert('movie added')
                window.location="http://localhost:8081/MovieApp"
                // this.componentDidMount();

            })

    }

    render() {

        return (

            <div>

                <AddMovieItem add={this.add} />


            </div>

        )

    }

}




