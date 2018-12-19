const messageService = require("../services/message.service");

const post = (req, res) => {
  console.log(req.body);
  messageService
    .post(req.body)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      res
        .status(503)
        .json({ message: "Hacker News Service not responding", err: err });
    });
};

module.exports = {
  post
};
