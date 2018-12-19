const router = require("express").Router();
const industryRoutes = require("./industry.routes");
const championRoutes = require("./champion.routes");
const highlightVideosRoutes = require("./highlightVideos.routes");
const messageRoutes = require("./message.routes");
module.exports = router;

router.use("/message", messageRoutes);
router.use("/industry", industryRoutes);
router.use("/champions", championRoutes);
router.use("/highlightVideos", highlightVideosRoutes);
