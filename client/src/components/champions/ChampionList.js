import React from "react";
import "./champion.css";

const ChampionList = props => {
  return props.champions
    ? props.champions.map(champion => (
        <div
          className="col-lg-3 col-md-6 col-sm-12 mt-2 mb-2"
          key={champion.championName}
        >
          <div className="card" style={{ width: "250px", height: "350px" }}>
            <a href={champion.url}>
              <div className="view">
                <img
                  className="card-img-top "
                  src={`https://www.mobafire.com/` + champion.img}
                  alt="Champion Card"
                />
              </div>
            </a>
            <div className="card-body">
              <a href={champion.url}>
                <h4
                  className="card-title text-center"
                  style={{ fontSize: "1.5rem" }}
                >
                  {champion.championName}
                </h4>
              </a>
            </div>
          </div>
        </div>
      ))
    : null;
};
export default ChampionList;
