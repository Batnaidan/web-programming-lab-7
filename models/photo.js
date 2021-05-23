const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  photo_id: {
    type: Number,
    required: true,
    default: 1,
  },
  owner_id: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Photo = mongoose.model('photos', { PhotoSchema });
