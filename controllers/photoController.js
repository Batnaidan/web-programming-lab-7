const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const Photo = require('../models/photo');

const getPhotosById = (req, res) => {
  //
};
const getAllPhotos = (req, res) => {
  //
};
const updatePhotoById = (req, res) => {
  //
};
const deletePhotoById = (req, res) => {
  //
};
const upload = (req, res) => {
  res.send('successfully uploaded пиктүүрэээ');
};

module.exports = {
  getPhotosById,
  getAllPhotos,
  updatePhotoById,
  deletePhotoById,
  upload,
};
