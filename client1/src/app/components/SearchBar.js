import React from "react";


export class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleTextInputChange = this.handleTextInputChange.bind(this);
      //  this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
    }

    handleTextInputChange(e) {
        this.props.handleTextInput(e.target.value);
    }

    // handlefavMovieInputChange(e) {
    //     this.props.onfavMovieInput(e.target.checked);
    // }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filtertext}
                    onChange={this.handleTextInputChange}
                    ref="title"
                />
                {/* <p>
                    <input
                        type="checkbox"
                        checked={this.props.favMovie}
                        onChange={this.handlefavMovieInputChange}
                    /> */}
                    {/* <p>
                        <input
                            type="checkbox"
                            checked={this.props.inStockOnly}
                            onChange={this.handleFav}
                        />
                        {' '}
                        Mark Favourite */}
            {/* </p>
            </p> */}
          </form>
                );
      }
    }
    
       
       
      
      
      
    










