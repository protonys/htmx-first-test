import express from 'express';
import createHomepageTemplate  from './views/index.js';
import createListTemplate from './views/list.js';
import createBookTemplate from './views/book.js';

import BOOKS_DATA from './data/data.js';


// create app
const app = express();
app.use(express.urlencoded({extended: false}));

// static assets
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.send(createHomepageTemplate());
});

app.get('/books', (req, res) => {
  res.send(createListTemplate(BOOKS_DATA));
});

app.post('/books', (req, res) => {
  const {title, author} = req.body;
  const id = Math.random().toString();

  BOOKS_DATA.push({id, title, author});


  res.redirect(`/books/${id}`)
});

app.get('/books/:id', (req, res) => {
  const {id} = req.params;
  const book = BOOKS_DATA.find((b) => b.id === id);

  res.send(createBookTemplate(book));
});

app.delete('/books/:id', (req, res) => {
  const {id} = req.params;
  const index = BOOKS_DATA.findIndex((b) => b.id === id);
  if (index!== -1) {
    BOOKS_DATA.splice(index, 1);
  }

  res.send();
});

// listen to port
app.listen(3000, () => {
  console.log('App listening on port 3000');
});