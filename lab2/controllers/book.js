const Book = require('../models/Books');


const getBooksList = (req, res) => {
    const { userId } = req.session;
    if (!userId) {
        res.render('books', { title: 'Books', userId, books: [] });
    } else {
        const books = Book.getAll();
        res.render('books', { title: 'Books', userId, books });
    }
};


module.exports = {
    getBooksList
};