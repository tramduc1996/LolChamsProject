const router = require("express").Router();
const validateBody = require("../filters/validate.body");
const messageController = require("../controllers/message.controller");
const Message = require("../models/Message");
module.exports = router;

router.post("/", validateBody(Message), messageController.post);
