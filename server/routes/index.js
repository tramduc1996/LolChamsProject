const router = require("express").Router();
const industryRoutes = require("./industry.routes");
const championRoutes = require("./champion.routes");
const highlightVideosRoutes = require("./highlightVideos.routes");
const messageRoutes = require("./message.routes");
module.exports = router;

router.use("/api/message", messageRoutes);
router.use("/api/industry", industryRoutes);
router.use("/api/champions", championRoutes);
router.use("/api/highlightVideos", highlightVideosRoutes);
