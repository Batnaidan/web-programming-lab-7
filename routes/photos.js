const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photoController');

const multer = require('multer');

router.get('/photo/:photoid', photoController.getPhotosById);
router.get('/photos/:ownerid', photoController.getAllPhotos);
router.put('/photo/:photoid', photoController.updatePhotoById);
router.delete('/photo/:photoid', photoController.deletePhotoById);
router.post('/photo/upload', upload.single('image'), photoController.upload); //form-data dotor key ni "photo" baih ystoi, value dotor ni photo

module.exports = router;
