import React, { Component } from "react";

class GifList extends Component {
  render() {
    return (
      <div>
        {this.props.giphyUrls.map((url) => (
          <div>
            <img src={url} />
            <br></br>
            <br></br>
          </div>
        ))}
      </div>
    );
  }
}

export default GifList;
