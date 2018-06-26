import React from "react";


export class MovieListItem extends React.Component {
    constructor(props) {
        super(props);
        this.del = (id) => this.removeData(this.props.movie._id);
        this.review1 = (id) => this.viewReviewData(this.props.movie._id);
    }
    removeData(id) {
        this.props.remove(id)
    }

    viewReviewData(id) {
        this.props.review(id)
    }
    render() {

        // var title = this.props.movie.favourite ?
        //   this.props.movie.title :
        //   <span style={{color: 'red'}}>
        //     {this.props.movie.title}
        //   </span>;

        return (

            <div className="col-md-4 ">
                <div className="thumbnail">

                    <img src={this.props.movie.poster} height="300" width="250" />
                    <div className="caption">
                        <h3>{this.props.movie.title}</h3>
                        <h4>{this.props.movie.description}</h4>
                        <p>Rating:{this.props.movie.reviews.rating}</p>
                        <p>Release Date:{this.props.movie.year}</p>
                        <a href="https://youtu.be/c25GKl5VNeY" className="btn btn-primary" role="button" >Trailer</a>
                        <button onClick={this.del} type="button" className="btn btn-danger" role="button" >Delete </button>
                        <button type="button" className="btn btn-primary" role="button" >Update </button>
                        <button onClick={this.review1} type="button" className="btn btn-info" role="button" >View Review </button>
                    </div>
                </div>
            </div >
        )

    }
}