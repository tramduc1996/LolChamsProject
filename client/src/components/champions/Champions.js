import React from "react";
import ChampionList from "./ChampionList";
import { getAllChampions } from "../../service/champions.service";

class Champions extends React.Component {
  state = {
    champions: null
  };
  componentDidMount() {
    this.getChampions();
  }

  getChampions = () => {
    getAllChampions()
      .then(res => {
        const champions = res.data;
        this.setState({ champions });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <div className="row px-5" style={{ margin: "0 auto" }}>
          <ChampionList champions={this.state.champions} />
        </div>
      </React.Fragment>
    );
  }
}
export default Champions;
