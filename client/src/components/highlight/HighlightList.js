import React from "react";

const HighlightList = props => {
  console.log(props.videos);
  return props.videos
    ? props.videos.map(video => (
        <div
          key={video.videoName}
          className="col-lg-3 col-md-6 col-sm-12 mt-2 mb-2 "
        >
          <div className="card ">
            <div className="embed-responsive embed-responsive-16by9">
              <video className="embed-responsive-item" controls>
                <source src={video.videoUrl} type="video/mp4" />
              </video>
            </div>

            <div className="card-body elegant-color white-text rounded-bottom">
              <a href={video.link}>
                <h4 className="card-title">{video.videoName}</h4>
              </a>
              <hr className="hr-light" />
              <div className="row">
                {video.author ? (
                  <div className="col-lg-6">By {video.author}</div>
                ) : null}
                {video.date ? (
                  <div className="col-lg-6">Date Created {video.date}</div>
                ) : null}
              </div>
              <div className="row">
                <div className="col-lg-6">{video.view} </div>
                <div className="col-lg-6">{video.likes}</div>
              </div>
            </div>
          </div>
        </div>
      ))
    : null;
};

export default HighlightList;
