const VideoModel = require("../models/video.model");

class VideoController {
  static async postNewVideo(req, res) {
    try {
      const newVideo = new VideoModel(req.body);
      const saved = await newVideo.save();
      res.status(201).json({
        message: "New video added",
        video: saved,
      });
      res.status(201).send(saved);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getAllVideo(req, res) {
    try {
      const videoList = await VideoModel.find()
      res.status(200).send(videoList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getVideoByID(req, res) {
    try {
      const id = req.params.id;

      const videoList = await VideoModel.findOne({
        _id: id,
      });
      res.status(200).send(videoList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async updateVideo(req, res) {
    try {
      const id = req.params.id;
      const body = req.body;

      const videoList = await VideoModel.updateOne(
        { _id: id },
        {
          title: body.title,
          thumbnail_url: body.thumbnail_url,
          desc: body.desc,
          video_url: body.video_url,
        }
      );
      res.status(200).send(body);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async deleteVideo(req, res) {
    try {
      const id = req.params.id;
      await VideoModel.deleteOne({ _id: id });
      res.status(200).send({ message: `${id} has been deleted` });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }
}

module.exports = VideoController;
