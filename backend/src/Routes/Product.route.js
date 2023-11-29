const express = require('express');
const multer = require('multer');
const path = require('path'); 

const router = express.Router();

const {getAll, addProduct, deleteProduct, getProductbyId, updateProduct} = require('../controllers/ProductController');


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
   return cb(null, "./src/public/upload"); 
  },
  filename: function(req, file, cb) {
   return cb(null, Date.now() + '-' + file.originalname);
  }
});

const uploads = multer({storage: storage});

router.get('', getAll)

router.post('', uploads.single('file'), addProduct)

router.delete('/:id', deleteProduct)

router.get('/:id',getProductbyId)

router.put('/:id',updateProduct)


module.exports = router;