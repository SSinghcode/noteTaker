// require
const express = require("express");
const path = require("path");
const fs = require('fs');

// app declaration
const app = express();

//ports
const PORT = process.env.PORT || 3003;

// 
const route = require("./routes/index.js");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", route);

// index route
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

//notes page api
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);


app.delete("/api/notes/:id",(req,res)=>{
  // verify that the DELET was received
  res.json(`${req.method}`);
  console.info(`${req.method}`);
  
  let listNote = JSON.parse(fs.readFileSync("./db/db.json"));
  let noteID = (req.params.id).toString();

  listNote = listNote.filter(selected => selected.id != noteID)

  // update notes data
  fs.writeFileSync("./db/db.json",JSON.stringify(listNote));
  res.json(listNote)
})




// Listening on Port
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT} 🚀`));