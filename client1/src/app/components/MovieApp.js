import React from "react";
import { MovieList } from "./MovieList"
import { SearchBar } from "./SearchBar"

import axios from "axios";
import _ from "lodash"

export class MovieApp extends React.Component {
    constructor(props) {
        super(props);
        this.myDel = this.deleteMovie.bind(this)
        this.myViewReview = this.viewReviews.bind(this)
        //this.filter = this.handleTextInput.bind(this);
        this.state = {
            items: [],
            filterText:''
           // favMovie: false

        }
        
         //this.handlefavMovieInput = this.handlefavMovieInput.bind(this);
      }
    
      handleTextInput(filterText) {
        this.setState({
          filterText: filterText
        });
      }
      
    //   handlefavMovieInput(favMovie) {
    //     this.setState({
    //         //favMovie: favMovie
    //     })
    //   }
   
    
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
    deleteMovie(id) {
        axios.delete('http://localhost:8000/api/movies/' + id)
            .then(response => {
                alert("Data Deleted successfully")
                this.componentDidMount();
            })
    }

    viewReviews(id) {
        axios.get('http://localhost:8000/api/movies/' + id + '/comments')
            .then(response => {
                alert(JSON.stringify(response.data))
            }).catch(function (error) {
                console.log(error)
            })
    }



    render() {
        return (

            <div>
                <SearchBar
                    filtertext={this.state.filterText} handleTextInput ={this.handleTextInput.bind(this)}
                    //favMovie={this.state.favMovie}
                />
               
          

            <MovieList movie={this.state.items} filtertext={this.state.filterText}
                     delete={this.myDel} review={this.myViewReview} />
            </div>
        
        )
    }
}
