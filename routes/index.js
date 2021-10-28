// requirements
const express = require("express");
const notesroute = require("./notes");

//app declaration
const app = express();

// Middleware
app.use("/notes", notesroute);

// Exporting app
module.exports = app;