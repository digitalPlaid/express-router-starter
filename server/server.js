const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./routes/books.router.js')

const app = express();
const PORT = process.env.PORT || 5000;
const bookList = [];
const movieList = [];

// express static file serving - public is the folder name
app.use( express.static('server/public') );

// Setup body parser for POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Tell express ap to use booksRouter mini-app
app.use('/', booksRouter) // to be explained


// Start server listening on PORT
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}...`);
})

// TODO - Move these routes to their own modules!
/* THIS GOT MOVED TO BOOKS.ROUTER.JS
app.get('/book', (req, res) => {
  res.send(bookList);
})

app.post('/book', (req, res) => {
  bookList.push(req.body);
  res.sendStatus(200);
});
*/

router.get('/movie', (req, res) => {
  res.send(movieList);
});

router.post('/movie', (req, res) => {
  movieList.push(req.body);
  res.sendStatus(200);
});
