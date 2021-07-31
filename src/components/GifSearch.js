import React, { Component } from "react";

class GifSearch extends Component {
  state = {
    search: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getGifs(this.state.search);
  };

  handleSearchChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="search"
          value={this.state.search}
          onChange={this.handleSearchChange}
        ></input>
      </form>
    );
  }
}

export default GifSearch;
