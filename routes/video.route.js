const express = require("express");
const cors = require("cors");

const VideoController = require("../controllers/video.controller");

const router = express.Router();
const corsOptions = {
    origin: true, //included origin as true
    credentials: true, //included credentials as true
    exposedHeaders: ["set-cookie"],
};

// router
router.post("/videos",cors(),  VideoController.postNewVideo);
router.get("/videos", cors(), VideoController.getAllVideo);
router.get("/videos/:id", cors(), VideoController.getVideoByID);
router.put("/videos/:id", cors(), VideoController.updateVideo);
router.delete("/videos/:id", cors(), VideoController.deleteVideo);

module.exports = router;