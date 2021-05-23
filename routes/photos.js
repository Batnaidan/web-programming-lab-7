const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photoController');

const multer = require('multer');

const upload = multer({
  dest: 'images',
});

router.get('/photo/:userid', photoController.getPhotosById);
router.get('/photos', photoController.getAllPhotos);
router.put('/photo/:photoid', photoController.updatePhotoById);
router.delete('/photo/:photoid', photoController.deletePhotoById);
router.post('/photo/upload', upload.single('photo'), photoController.upload); //form-data dotor key ni "photo" baih ystoi, value dotor ni photo

module.exports = router;
