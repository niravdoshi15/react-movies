import React from "react";

export class Review extends React.Component {

    render() {
        return (

            <table className="table table-striped table-bordered">
                <thead>
                    <BookMarkTableHeader />
                </thead>
                <tbody>
                    {this.renderBody()}
                </tbody>
            </table>

        )
    }
}

