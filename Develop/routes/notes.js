const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// GET Route for retrieving all the tips
notes.get('/', (req, res) => {
  console.log("test route")
  readFromFile('./db/db.json').then((data) => 
  
  {res.json(JSON.parse(data));console.log(JSON.parse(data))});
});

notes.post('/', (req, res) => {

  const { title, text } = req.body;
  
  if (req.body) {
    const newNote = {
     title,
     text
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
});

module.exports = notes;
