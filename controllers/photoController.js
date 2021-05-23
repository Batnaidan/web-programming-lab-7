const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const Photo = require('../models/photo');

const getPhotosById = async (req, res) => {
  try {
    const incident = await Photo.findById(req.params.photoid);
    res.set('Content-Type', 'image/png');
    res.send(incident.image);
  } catch (err) {
    res.status(404).json({ success: false, error: err });
  }
};
// const getAllPhotos = async (req, res) => {
//   try {
//     const incident = await Photo.findById(req.params.ownerid);
//   } catch (err) {
//     res.status(404).json({ success: false, error: err });
//   }
// };
const updatePhotoById = async (req, res) => {
  //
};
const deletePhotoById = async (req, res) => {
  try {
    const incident = await Photo.findById(req.body.id);
    incident.image = undefined;
    incident.save();
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false, error: err });
  }
};
const upload = async (req, res) => {
  try {
    const incident = await Photo.findById(req.body.id);
    incident.image = req.file.buffer;
    incident.save();
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false, error: err });
  }
};

module.exports = {
  getPhotosById,
  // getAllPhotos,
  updatePhotoById,
  deletePhotoById,
  upload,
};
