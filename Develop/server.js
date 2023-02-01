const express = require('express')
const path = require('path');
const { clog } = require('./middleware/clog');
const savedNotes = require('./db/db.json');
const api = require('./routes/notes.js');


const PORT = process.env.port || 3001;

const app = express();
//app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api/notes', api);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
  
