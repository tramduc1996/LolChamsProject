const highlightVideosService = require("../services/highlightVideos.service");

const getHighlightVideos = (req, res) => {
  highlightVideosService
    .getHighlightVideos(req.params)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res
        .status(503)
        .json({ message: "Hacker News Service not responding", err: err });
    });
};

module.exports = {
  getHighlightVideos
};
