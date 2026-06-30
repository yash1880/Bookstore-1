const Book = require('../models/book');

exports.getAllBooks = async (req, res) => {
    const books = await Book.find();
    res.render('index', { books });
};

exports.addBook = async (req, res) => {
    const newBook = new Book({ ...req.body, image: req.file.filename });
    await newBook.save();
    res.redirect('/');
};

exports.getEditPage = async (req, res) => {
    const book = await Book.findById(req.params.id);
    res.render('editBook', { book });
};

exports.viewBooks = async (req, res) => {
    const books = await Book.find();
    res.render('viewBook', { books }); // 'inventory' ki jagah 'viewBook'
};

exports.updateBook = async (req, res) => {
    let updateData = req.body;
    if (req.file) updateData.image = req.file.filename;
    await Book.findByIdAndUpdate(req.params.id, updateData);
    res.redirect('/');
};

exports.deleteBook = async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.redirect('/');
};