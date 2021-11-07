// 2 get roytes 1 for index.html 2 for notes .html
const noteData = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const {
  readFromFile,
  writeToFile,
  readAndAppend,
  
} = require("../public/helpers/fsUtil");

// Route for retrieving notes

noteData.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// Route for posting notes

noteData.post("/", (req, res) => {
  const { id, title, text } = req.body;

  if (req.body) {
     

     const notes= {
      id: uuidv4(),
      title,
      text,
    };
    readAndAppend(notes, "./db/db.json");
    res.json(`New note has been created`);
  } else {
    res.error(`Cannot create note`);
  }
});


module.exports =noteData