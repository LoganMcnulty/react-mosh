import React, { Component } from "react";

class MovieDetails extends Component {
  handleSave = () => {
  // Navigate to /products. This also pushes into history
    this.props.history.push('/movies');

  // use replace for something like a login page where you don't want a user to go back to the login page
    // this.props.history.replace('/ble');

  };

  render() {
    return (
      <div>
        <h1>Movie Details - {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default MovieDetails;
