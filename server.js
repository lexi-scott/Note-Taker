const express = require('express')
const path = require('path');
const api = require('./routes/notes.js');
const html = require('./routes/html.js');


const PORT = process.env.port || 3001;

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);
app.use('/', html);


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
  