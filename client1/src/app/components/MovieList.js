import React from "react";
import _ from "lodash"
import { MovieListItem } from "./MovieListItem"

export class MovieList extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.movie)
    }

    // renderBody() {
    //     return _.map(this.props.movie, ((movies, index) => <MovieListItem key={index} movie={movies} remove={this.props.delete} review={this.props.review} />))
    // }

    render() {
        var rows = [];
        //console.log(this.props.favMovie)
        this.props.movie.forEach((movie) => {
          if (movie.title.indexOf(this.props.filtertext) === -1  )
           // (!movie.favourite && this.props.favMovie)) 
          {
            return;
          }
          else{
                   rows.push(<MovieListItem movie={movie}   remove={this.props.delete} review={this.props.review}/>);
          }
        });
        return(
            <div className="row col-lg-12">
                {rows}
                {/* {this.renderBody()} */}
            </div>
        )
    }
}
