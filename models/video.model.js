const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema(
  {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    thumbnail_url: {
      type: String,
    },
    video_url: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", videoSchema);