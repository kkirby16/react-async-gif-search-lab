import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {
  state = {
    giphyUrls: [],
  };

  getGifs = (search = "llamas") => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=hgu6AxU2n36G7Z8xoIENhedamkNhIpWB&rating=g&limit=3`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          giphyUrls: data.data.map((gif) => gif.images.original.url),
        });
      });
  };

  render() {
    return (
      <div>
        <GifList giphyUrls={this.state.giphyUrls} />
        <GifSearch getGifs={this.getGifs} />
      </div>
    );
  }
}

export default GifListContainer;
