const AuthorController = require('../controllers/author.controllers');

module.exports = (app) => {
    app.get('/api', AuthorController.index);
    app.get('/api/authors', AuthorController.allAuthors);
    app.post('/api/author/new', AuthorController.newAuthor);
    app.put('/api/author/update/:_id', AuthorController.updateAuthor);
    app.delete('/api/author/delete/:_id', AuthorController.deleteAuthor);
}