const router = require("express").Router();

const highlightVideosController = require("../controllers/highlightVideos.controller");
module.exports = router;

router.get("/", highlightVideosController.getHighlightVideos);
