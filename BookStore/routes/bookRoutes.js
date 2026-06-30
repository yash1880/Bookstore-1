const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const multer = require('multer');
const upload = multer({ dest: 'public/uploads/' });

router.get('/', bookController.getAllBooks);
router.get('/add', (req, res) => res.render('addBook'));
router.post('/add', upload.single('image'), bookController.addBook);
router.get('/edit/:id', bookController.getEditPage);
router.get('/view-books', bookController.viewBooks);
router.post('/edit/:id', upload.single('image'), bookController.updateBook);
router.post('/delete/:id', bookController.deleteBook);

module.exports = router;