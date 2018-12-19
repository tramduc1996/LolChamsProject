import React, { Component } from "react";
import HighlightList from "./HighlightList";
import { getAllHighlightVideos } from "../../service/highlightVideos.service";
class Highlight extends Component {
  state = {
    videos: null
  };
  componentDidMount() {
    this.handleGetAllHighLightVideos();
  }

  handleGetAllHighLightVideos = () => {
    getAllHighlightVideos()
      .then(response => {
        const videos = response.data;
        this.setState({ videos });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="row" style={{ padding: "25px" }}>
        <HighlightList videos={this.state.videos} />
      </div>
    );
  }
}

export default Highlight;
