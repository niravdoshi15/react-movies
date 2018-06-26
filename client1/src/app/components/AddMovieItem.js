import React from "react";


export class AddMovieItem extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.add)
        this.add1 = this.handleAdd.bind(this)
    }
    handleAdd() {
        this.props.add(this.refs.poster.value, this.refs.title.value, this.refs.description.value, this.refs.dor.value)
    }
    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="form-group">
                   <h2>Poster URL:</h2>
                    <input type="text" ref="poster" className="form-control" id="poster" />

                    <div className="form-group">
                        <h2 >Title:</h2>
                        <input type="text" ref="title" className="form-control" id="title" />
                    </div>
                        <div className="form-group">
                            <h2 >Description:</h2>
                            <input type="text" ref="description" className="form-control" id="description" />
                            </div>
                            <div className="form-group">
                                <h2 >Release Date:</h2>
                                <input type="text" ref="dor" className="form-control" id="dor" />

                                </div>

                                <button onClick={this.add1} type="button" className="btn btn-primary" role="button" ><h3>Add</h3> </button>
                            </div>
                        </div>
                
                   

                    )

    }
}