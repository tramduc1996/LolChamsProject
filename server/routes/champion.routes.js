const router = require("express").Router();

const championController = require("../controllers/champion.controller");
module.exports = router;

router.get("/", championController.get);
