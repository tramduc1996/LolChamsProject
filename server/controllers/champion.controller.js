const championService = require("../services/champion.service");

const get = (req, res) => {
  championService
    .get(req.params)
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
  get
};
